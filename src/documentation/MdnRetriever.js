"use strict";

exports.MdnRetriever = MdnRetriever;

var retriever = require("./Retriever");
var annotation = require("./Annotation");
var documentation = require("./Documentation");

/**
 * The MDN Retriever is used to retrieve documentation from the Mozilla
 * Developer Network (https://developer.mozilla.org/).
 * 
 * @abstract
 * @constructor
 * @extends Retriever
 */
function MdnRetriever() {
    retriever.Retriever.call(this);
    
    // check for overrides of abstract methods
    if (this.createUri === MdnRetriever.prototype.createUri) {
        throw new Error("The abstract method createUri is not overridden");
    }
}
MdnRetriever.prototype = Object.create(retriever.Retriever.prototype);
MdnRetriever.prototype.constructor = MdnRetriever;

/**
 * @override
 * @param {Object} definition The definition for which the documentation should
 *        be retrieved.
 * @param {Function} callback Callback to execute with the retrieved
 *        documentation or error.
 * @returns {Documentation} Retrieved documentation.
 */
MdnRetriever.prototype.getDocumentationFor = function (definition, callback) {
    var instance, annotations, doc;
    instance = this;

    // is this definition already documented?
    if (definition.docBlockDescription) {
        doc = new documentation.Documentation(
            definition.docBlockDescription,
            definition.docBlockDescription,
            createAnnotations(definition, {}),
            definition,
            []
        );
        callback(doc);
        return;
    }

    this.httpsGet({
        hostname: "developer.mozilla.org",
        path: this.createUri(definition.name)
    }, function (response) {
        var article, summary, syntaxCode, syntax, description, seeAlso;
        if (response instanceof Error) {
            throw response;
        }
        article = instance.extractArticle(response.toString());
        
        summary = instance.extractSection(article, "Summary");
        description = instance.extractSection(article, "Description");
        syntaxCode = instance.extractSection(article, "Syntax");
        if (!syntaxCode) {
            syntaxCode = instance.extractSection(article, "Constructor");
        }
        syntax = syntaxCode ? new SyntaxInfo(syntaxCode, article) : {};
        seeAlso = parseSeeAlso(instance.extractSection(article, "See_also"));
        
        annotations = createAnnotations(definition, syntax);
        doc = new documentation.Documentation(summary, description,
                annotations, definition, seeAlso);
        
        callback(doc);
    });
};

/**
 * Creates the path part of the URI to the documentation page for the specified
 * class / method / function / whatever.
 * 
 * @abstract
 * @param {string[]} name Name of the extracted declaration.
 * @returns {string} URI Path to the documentation page.
 */
MdnRetriever.prototype.createUri = function (name) {
    throw new Error("Abstract method");
};

/**
 * Extract the text of a level-2 (&lt;h2&gt;) or level-3 (&lt;h3&gt;) section.
 * 
 * @param {string} article Documentation article.
 * @param {string} sectionId ID of the level-2 or level-3 section to extract.
 * @param {number=} level The current heading level to look up.
 * @returns {string}
 */
MdnRetriever.prototype.extractSection = function (article, sectionId, level) {
    var start, headingEnd, sectionEnd;
    if (level === undefined) {
        level = 2;
    }
    start = article.indexOf("<h" + level + " id=\"" + sectionId + "\"");
    if (start === -1) {
        start = article.indexOf("<h" + level + " id='" + sectionId + "'");
        if (start === -1) {
            start = article.indexOf("<h" + level + " id='" + sectionId +
                    "\"");
        }
    }
    if (start === -1) {
        if (level === 2) {
            return this.extractSection(article, sectionId, 3);
        }
        return null;
    }
    headingEnd = article.indexOf("</h" + level + ">", start);
    if (headingEnd === -1) {
        throw new Error("Cannot find end of heading of section " + sectionId);
    }
    sectionEnd = article.indexOf("<h" + level + " ", headingEnd);
    if (sectionEnd === -1) {
        return article.substring(headingEnd + 5);
    }
    return article.substring(headingEnd + 5, sectionEnd).trim();
};

/**
 * Extracts the documentation article text from the provided MDN server
 * response.
 * 
 * @param {string} responseBody Body of the MDN server response.
 * @returns {string} Extracted documenation article text.
 */
MdnRetriever.prototype.extractArticle = function (responseBody) {
    var start, end;
    start = responseBody.indexOf("<article id=\"wikiArticle\">");
    if (start === -1) {
        throw new Error("Cannot find the wiki article wrapper");
    }
    end = responseBody.indexOf("</article>");
    return responseBody.substring(start + 26, end).trim();
};

/**
 * Converts the provided declaration name to a relatove URI part for use with
 * the MDN.
 * 
 * @param {string[]} declarationName The name of the declaration obtained from
 *        the parser of JS stubs.
 * @returns {string} URI part for use with the MDN.
 */
MdnRetriever.prototype.convertNameToUriPart = function (declarationName) {
    var simplifiedName;
    simplifiedName = declarationName.filter(function (namePart) {
        return namePart !== "prototype";
    });
    return simplifiedName.join("/").replace(/_/g, "");
};

/**
 * Creates annotations from the provided syntax info.
 * 
 * @param {Object} definition The definition being processed.
 * @param {SyntaxInfo} syntaxInfo Syntax information.
 * @returns {Annotation[]} Created annotations.
 */
function createAnnotations(definition, syntaxInfo) {
    var annotations, processedThrows;
    annotations = [];
    processedThrows = [];
    if (!definition.docBlockData) {
        return annotations;
    }
    definition.docBlockData.forEach(function (tag) {
        var annot, docs;
        switch (tag.tag) {
            case "param":
                docs = getMatchingParametersDocs(tag.name,
                        syntaxInfo.parameters);
                annotations.push(new annotation.Annotation(tag.tag,
                        tag.type, tag.name + " " + docs.join("\n").trim()));
                break;
            case "throws":
                annot = new annotation.Annotation(tag.tag, tag.type,
                        tag.description ? tag.description : null);
                docs = getMatchingThrowsDocs(annot.getTypeAsString(),
                        syntaxInfo.throws);
                if (docs) {
                    annot.documentation = docs;
                }
                processedThrows.push(annot.getTypeAsString);
                annotations.push(annot);
                break;
            case "return":
            case "returns":
                annotations.push(new annotation.Annotation("returns",
                        tag.type, syntaxInfo.returns ?
                        syntaxInfo.returns.trim() : tag.description));
                break;
            case "extends":
                annotations.push(new annotation.Annotation("extends",
                        null, tag.name));
                break;
            default:
                annotations.push(new annotation.Annotation(tag.tag, tag.type,
                        tag.description ? tag.description : null));
                break;
        }
    });
    if (syntaxInfo.throws) {
        syntaxInfo.throws.forEach(function (throwDoc) {
            if (processedThrows.indexOf(throwDoc.type.trim()) > -1) {
                return;
            }
            annotations.push(new annotation.Annotation("throws", {
                type: "NameExpression",
                name: throwDoc.type.trim()
            }, throwDoc.description.trim()));
        });
    }
    return annotations;
}

/**
 * Retrieves the documentation for the specified type of thrown error.
 * 
 * @param {string} type Name of the error type.
 * @param {Object[]} syntaxInfoThrows Extracted syntax infos about thrown
 *        errors.
 * @returns {string} Documentation for the specified thrown error.
 */
function getMatchingThrowsDocs(type, syntaxInfoThrows) {
    var i;
    for (i = syntaxInfoThrows.length; i--;) {
        if (syntaxInfoThrows.type === type) {
            return syntaxInfoThrows.description;
        }
    }
    return "";
}

/**
 * Retrieves all documenation strings related to the parameter(s) of the
 * specified name(s).
 * 
 * @param {string} name Parameter name or name wildcard.
 * @param {Object[]} syntaxInfoParams Parameters info from syntax info.
 * @returns {string[]} Documentation(s) for the specified parameter.
 */
function getMatchingParametersDocs(name, syntaxInfoParams) {
    var i, result, nameParts, j;
    if (!syntaxInfoParams) {
        return [];
    }
    if (name.indexOf("_") === -1) {
        for (i = syntaxInfoParams.length; i--;) {
            if (syntaxInfoParams[i].name === name) {
                return [syntaxInfoParams[i].description];
            }
            if (syntaxInfoParams[i].name.indexOf(",")) {
                nameParts = syntaxInfoParams[i].name.split(/\s*,\s*/);
                for (j = nameParts.length; j--;) {
                    if (name === nameParts[j]) {
                        return [syntaxInfoParams[i].description];
                    }
                }
            }
        }
        return [""];
    }
    result = [];
    nameParts = name.split("_");
    for (i = syntaxInfoParams.length; i--;) {
        for (j = nameParts.length; j--;) {
            if (syntaxInfoParams[i].name.indexOf(nameParts[j]) > -1) {
                if (result.indexOf(syntaxInfoParams[i].description) === -1) {
                    result.unshift(syntaxInfoParams[i].description);
                }
            }
        }
    }
    return result;
}

/**
 * Parses the See Also sections and returns the extracted items.
 * 
 * @param {string} htmlCode HTML code of the See Also section.
 * @returns {string[]} See also items.
 */
function parseSeeAlso(htmlCode) {
    var result;
    result = [];
    if (!htmlCode) {
        return result;
    }
    htmlCode.split("</li>").forEach(function (item) {
        if (/<code>[^<]+<\/code>/m.test(item)) {
            result.push(item.match(/<code>([^<]+)<\/code>/)[1]);
        }
    });
    return result;
}

/**
 * Syntax documentation parser.
 * 
 * @constructor
 * @param {string} syntaxCode HTML code of the syntax section.
 */
function SyntaxInfo(syntaxCode, article) {
    var sectionNames;
    sectionNames = this.getSections(syntaxCode);
    sectionNames.forEach(function (sectionName) {
        var lowerCaseName;
        lowerCaseName = sectionName.toLowerCase();
        this[lowerCaseName] = this.getSection(syntaxCode, sectionName);
    }, this);
    if (this.throws) {
        this.throws = this.processThrows(this.throws);
    }
    if (this.parameter) {
        this.parameters = this.parameter;
    }
    if (!this.parameters) {
        this.parameters = MdnRetriever.prototype.
            extractSection(article, "Parameters");
    }
    if (!sectionNames.length && !this.parameters) {
        this.parameters = syntaxCode;
    }
    if (this.parameters) {
        this.parameters = this.processParameters(this.parameters);
    }
    if (this.return_value) {
        this.returns = this.return_value;
    }
}

/**
 * Processes the parameters documentation.
 * 
 * @param {string} code The HTML code representing the parameters.
 * @returns {Object[]} The processed documentation.
 */
SyntaxInfo.prototype.processParameters = function (code) {
    return this.processDls(code).map(function (element) {
        return {
            name: this.stripTags(element.dt).trim(),
            description: this.stripLinks(element.dd).trim()
        };
    }, this);
};

/**
 * Strings all hyperlinks (anchors) from the provided HTML code.
 * 
 * @param {string} code The HTML code from which the hyperlinks should be
 *        removed.
 * @returns {string} The provided code with all anchors stripped.
 */
SyntaxInfo.prototype.stripLinks = function (code) {
    while (code.indexOf("<a ") > -1) {
        code = code.replace(/<a [^>]*>/, "");
        code = code.replace(/<\/a>/, "");
    }
    return code.trim();
};

/**
 * Stripps all tags from the provided HTML code.
 * 
 * @param {string} code The code from which the tags should be stripped.
 * @returns {string} The provided code with all tags stripped.
 */
SyntaxInfo.prototype.stripTags = function (code) {
    while (code.indexOf("<") > -1) {
        code = code.replace(/<[^>]*>/, "");
    }
    return code.trim();
};

/**
 * Processes the "throws" documentation.
 * 
 * @param {string} code HTML code representing the throws.
 * @returns {Object[]} Parsed documentation.
 */
SyntaxInfo.prototype.processThrows = function (code) {
    return this.processDls(code).map(function (element) {
        if (!element.dt.match(/<code>([^<]+)<\/code>/)) {
            return null;
        }
        return {
            type: element.dt.match(/<code>([^<]+)<\/code>/)[1].trim(),
            description: this.stripLinks(element.dd).trim()
        };
    }, this).filter(function (element) {
        return !!element;
    });
};

/**
 * Processes the &lt;dl&gt; tags in the provided code by extracting the
 * contents of them and the contents of the &lt;dt&gt; and &lt;dd&gt; elements.
 * 
 * @param {string} code The HTML code to process.
 * @returns {Object[]} Extracted parts.
 */
SyntaxInfo.prototype.processDls = function (code) {
    var codeParts, parts, offset, lastOffset, subDlOffset;
    parts = [];
    codeParts = [];
    offset = 0;
    lastOffset = 0;
    code = code.trim().replace(/<\/dl>(\s|\n)+<dl>/g, "");
    if (code.indexOf("<dl>") > 0) {
        code = code.substring(code.indexOf("<dl>"));
    }
    if (code.substring(0, 4) === "<dl>") {
        code = code.substring(4);
    }
    if (code.substring(code.length - 5) === "</dl>") {
        code = code.substring(0, code.length - 5);
    }
    code = code.replace(/<\/dd>(\s|\n)+<dd>/g, " ");
    while (code.indexOf("</dd>", offset) > -1) {
        subDlOffset = code.indexOf("<dl>", offset);
        if (subDlOffset > -1) {
            if (subDlOffset < code.indexOf("</dd>", offset)) {
                offset = code.indexOf("</dl>", offset) + 5;
                continue;
            }
        }
        offset = code.indexOf("</dd>", offset);
        codeParts.push(code.substring(lastOffset, offset));
        offset += 5;
        lastOffset = offset;
    }
    if (code.substring(offset)) {
        codeParts.push(code.substring(offset));
    }
    codeParts.forEach(function (element) {
        var dtPosition, dt, dd;
        if (element.indexOf("<dd") === -1) {
            return;
        }
        dtPosition = element.indexOf("<dt>");
        dt = element.substring(dtPosition + 4);
        dt = dt.substring(0, dt.indexOf("</dt>"));
        dd = element.substring(element.indexOf("<dd>") + 4);
        if (dd.lastIndexOf("</dd>") > -1) {
            dd = dd.substring(0, dd.lastIndexOf("</dd>"));
        }
        parts.push({
            dt: dt.trim(),
            dd: dd.trim()
        });
        while (element.indexOf("<dt>", dtPosition + 4) > -1) {
            dtPosition = element.indexOf("<dt>", dtPosition + 4);
            dt = element.substring(dtPosition + 4);
            dt = dt.substring(0, dt.indexOf("</dt>"));
            parts.push({
                dt: dt.trim(),
                dd: dd.trim()
            });
        }
    });
    return parts;
};

/**
 * Extracts the section of the specified name.
 * 
 * @param {string} code The HTML code from which the section may be extracted.
 * @param {string} name The name of the section to extract.
 * @returns {string} The code of the section.
 */
SyntaxInfo.prototype.getSection = function (code, name) {
    var start;
    start = code.indexOf("<h3 id=\"" + name + "\"");
    start = code.indexOf("</h3>", start) + 5;
    if (code.indexOf("<h3 id=", start) > -1) {
        return code.substring(start, code.indexOf("<h3 id=", start));
    }
    return code.substr(start).trim();
};

/**
 * Extracts the names of level-3 sections from the provided HTML code.
 * 
 * @param {string} code The HTML code to process.
 * @returns {string[]} Names of level-3 sections in the provided HTML code.
 */
SyntaxInfo.prototype.getSections = function (code) {
    var sections, index, id;
    sections = [];
    index = 0;
    while (/<h3 id=/.test(code.substring(index))) {
        id = code.substring(index).match(/<h3 id="([^"]+)"/)[1];
        sections.push(id);
        index += code.substring(index).indexOf("</h3>") + 5;
    }
    return sections;
};
