"use strict";

exports.Annotation = Annotation;

/**
 * The Annotation represents a single JS Doc 3 @ annotation.
 * 
 * @constructor
 * @param {string} tag Tag of the annotation, e.g. "param" or "return".
 * @param {?Object} type Data type associated with the annotation.
 * @param {string} documentation Raw documentation string.
 */
function Annotation(tag, type, documentation) {
    /**
     * @private
     * @type {string}
     */
    this.tag = tag;
    
    /**
     * @private
     * @type {?Object}
     */
    this.type = type;
    
    /**
     * @private
     * @type {?string}
     */
    this.typeAsString = type ? buildTypeString(type) : null;
    
    /**
     * @private
     * @type {string}
     */
    this.documentation = preprocessDocumentation(documentation);
}

/**
 * Returns the name of this JS Doc annotation.
 * 
 * @returns {string} The name of this JS Doc annotation.
 */
Annotation.prototype.getTag = function () {
    return this.tag;
};

/**
 * Returns the type descriptor of this annotation.
 * 
 * @returns {?Object} Type descriptor of this annotation.
 */
Annotation.prototype.getType = function () {
    return this.type;
};

/**
 * Returns the type associated with this annotation as a string.
 * 
 * @returns {?string} Type associated with this annotation as a string.
 */
Annotation.prototype.getTypeAsString = function () {
    return this.typeAsString;
};

/**
 * Returns the preprocessed documenation string associated with this
 * annotation.
 * 
 * @returns {string} Documenation string associated with this annotation.
 */
Annotation.prototype.getDocumentation = function () {
    return this.documentation;
};

/**
 * Returns this annotation as a JS Doc text fragment.
 * 
 * @returns {string} JSDoc fragment representation of this annotation.
 */
Annotation.prototype.getJSDocText = function () {
    var rawText, output, splitPosition;
    rawText = "@" + this.tag +
            (this.typeAsString ? " {" + this.typeAsString + "}" : "") +
            (this.documentation ? " " + this.documentation : "");
    output = "";
    while (rawText.length > 76) {
        splitPosition = rawText.lastIndexOf(" ", 76);
        if (splitPosition === -1) {
            splitPosition = rawText.indexOf(" ", 76);
        }
        if (splitPosition === -1) {
            output += rawText;
            rawText = "";
        } else {
            output += "\n * " + rawText.substring(0, splitPosition);
            rawText = rawText.substring(splitPosition + 1);
        }
    }
    output = output + "\n * " + rawText;
    return output;
};

/**
 * Preprocesses the provided raw documentation.
 * 
 * @param {string} rawDocumenation Raw documentation to preprocess.
 * @returns {string} Preprocessed documentation.
 */
function preprocessDocumentation(rawDocumenation) {
    if (!rawDocumenation) {
        return "";
    }
    return stripLinks(rawDocumenation.replace(/\r?\n/g, " ").
            replace(/\s+[*]\s+/g, " ").
            replace(/\s{2,}/g, " "));
}

/**
 * Strings all hyperlinks (anchors) from the provided HTML code.
 *
 * @param {string} code The HTML code from which the hyperlinks should be
 *        removed.
 * @returns {string} The provided code with all anchors stripped.
 */
function stripLinks(code) {
    while (code.indexOf("<a ") > -1) {
        code = code.replace(/<a [^>]*>/, "");
        code = code.replace(/<\/a>/, "");
    }
    return code.trim();
}

/**
 * Converts the provided type descriptor into string.
 * 
 * @param {Object} type Type descriptor.
 * @returns {string} Type as a JSDoc type string.
 */
function buildTypeString(type) {
    switch (type.type) {
        case "OptionalType":
            return buildTypeString(type.expression) + "=";
        case "NullableType":
            return "?" + buildTypeString(type.expression);
        case "NonNullableType":
            return "!" + buildTypeString(type.expression);
        case "TypeApplication":
            return buildTypeString(type.expression) + "<" +
                    type.applications.map(buildTypeString).join(", ") + ">";
        case "FunctionType":
            return "function(" +
                    (type.this ?
                        "this: " + buildTypeString(type.this) +
                            (type.params.length ? ", " : ""):
                        "") +
                    type.params.map(buildTypeString).join(", ") + ")" +
                    (type.result ? ": " + buildTypeString(type.result) : "");
        case "UnionType":
            return "(" + type.elements.map(buildTypeString).join("|") + ")";
        case "RestType":
            return "..." + buildTypeString(type.expression);
        case "NameExpression":
            return type.name;
        case "UndefinedLiteral":
            return "undefined";
        case "NullLiteral":
            return "null";
        case "RecordType":
            return "{" + type.fields.map(function (field) {
                return field.key + ": " + buildTypeString(field.value)
            }).join(", ") + "}";
        default:
            throw new Error("Unknown type descriptor type: " + type.type);
    }
}
