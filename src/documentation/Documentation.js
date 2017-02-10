"use strict";

var annotation = require("./Annotation");

exports.Documentation = Documentation;

/**
 * Documentation of a single definition.
 * 
 * @constructor
 * @param {string} summary Raw documentation summary.
 * @param {string} description Raw documentation text.
 * @param {Annotation[]} annotations Documentation annotations.
 * @param {Object} definition The documented definition.
 * @param {string[]} seeAlso The "see also" section.
 */
function Documentation(summary, description, annotations, definition,
         seeAlso) {
    var isConstructorAnnotated;

    /**
     * @private
     * @type {string}
     */
    this.summary = preprocessDocumentation(summary);
    
    /**
     * @private
     * @type {string}
     */
    this.description = preprocessDocumentation(description);
    
    /**
     * @private
     * @type {Annotation[]}
     */
    this.annotations = annotations.slice(0);
    
    /**
     * @private
     * @type {Object}
     */
    this.definition = definition;
    
    /**
     * @private
     * @type {string[]}
     */
    this.seeAlso = seeAlso;
    
    if (this.definition.type === "class declaration") {
        isConstructorAnnotated = this.annotations.some(function (annotation) {
            return annotation.getTag() === "constructor";
        });
        if (!isConstructorAnnotated) {
            this.annotations.unshift(new annotation.Annotation("constructor",
                    null, ""));
        }
    }
}

/**
 * Returns the preprocessed summary text.
 * 
 * @returns {string} Preprocessed summary text.
 */
Documentation.prototype.getSummary = function () {
    return this.summary;
};

/**
 * Returns the preprocessed documentation text.
 * 
 * @returns {string} Preprocessed documentation text.
 */
Documentation.prototype.getDescription = function () {
    return this.description;
};

/**
 * Returns the annotations of this documentation declaration.
 * 
 * @returns {Annotation[]} Annotations of this documentation declaration.
 */
Documentation.prototype.getAnnotations = function () {
    return this.annotations.slice(0);
};

/**
 * Returns the documented definition.
 * 
 * @returns {Object} Documented definition.
 */
Documentation.prototype.getDefinition = function () {
    return this.definition;
};

/**
 * Returns the "see also" section of this documentation item.
 * 
 * @returns {string[]} The "see also" section of this documentation item.
 */
Documentation.prototype.getSeeAlso = function () {
    return this.seeAlso;
};

/**
 * Returns this definition documenation as a JS Doc text.
 * 
 * @returns {string} JSDoc representation of this definition.
 */
Documentation.prototype.getJSDocText = function () {
    var output;
    output = "/**\n" +
            formatDocumentationFragment(this.description) + "\n *\n" +
            formatDocumentationFragment("@summary " + this.summary) + "\n" +
            this.annotations.map(function (annotation) {
                return annotation.getJSDocText();
            }).join("\n") + "\n" +
            this.seeAlso.map(function (item) {
                return " * @see " + item;
            }).join("\n") +
            "\n */";
    while (output.indexOf("\n\n") > -1) {
        output = output.replace("\n\n", "\n");
    }
    return output;
};

/**
 * Generates JavaScript code representing the documented definition.
 * 
 * @returns {string} JavaScript code representing the documented definition.
 */
Documentation.prototype.getDefinitionText = function () {
    switch (this.definition.type) {
        case "variable":
            return "var " + this.definition.name + ";";
        case "prototype property":
        case "member declaration":
            return this.definition.name.join(".") + " = null;";
        case "class declaration":
        case "instance method":
        case "function declaration":
        case "static method":
            if (this.definition.name.length === 1) {
                return "function " + this.definition.name[0] + "(" +
                        this.definition.params.join(", ") + ") {}";
            }
            return this.definition.name.join(".") + " = function (" +
                    this.definition.params.join(", ") + ") {};";
        default:
            throw new Error("Unknown definition type: " +
                    this.definition.type);
    }
};

/**
 * Generates a JSDoc-documented JavaScript definition code.
 * 
 * @returns {string} JSDoc-documented JavaScript definition code.
 */
Documentation.prototype.getDocumentedDefinition = function () {
    return this.getJSDocText() + "\n" + this.getDefinitionText();
};

/**
 * Formats the provided documentation text.
 * 
 * @param {string} rawText The raw documentation text to format.
 * @returns {string} The formatted documentation text.
 */
function formatDocumentationFragment(rawText) {
    var output, splitPosition;
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
}

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
            replace(/\s{2,}/g, " ").
            replace(/\/\\\*\//g, "/[*]/"));
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
