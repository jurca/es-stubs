"use strict";

exports.MdnCoreJSRetriever = MdnCoreJSRetriever;

var mdnRetriever = require("./MdnRetriever");

/**
 * The MDN Core JS Retriever is used to retrieve documentation for core
 * JavaScript from the MDN website.
 * 
 * @constructor
 * @extends MdnRetriever
 */
function MdnCoreJSRetriever() {
    mdnRetriever.MdnRetriever.call(this);
}
MdnCoreJSRetriever.prototype =
        Object.create(mdnRetriever.MdnRetriever.prototype);
MdnCoreJSRetriever.prototype.constructor = MdnCoreJSRetriever;

/**
 * @override
 */
MdnCoreJSRetriever.prototype.createUri = function (name) {
    var preprocessedName;
    if (name instanceof Array) {
        preprocessedName = name.slice(0);
    } else {
        preprocessedName = [name];
    }
    if (preprocessedName.indexOf("prototype") > -1) {
        if (preprocessedName.slice(0).pop() !== "prototype") {
            preprocessedName.splice(preprocessedName.indexOf("prototype"), 1);
        }
    }
    preprocessedName = preprocessedName.map(function (namePart) {
        while (namePart.indexOf("__") > -1) {
            namePart = namePart.replace("__", "");
        }
        return namePart;
    });
    if ((preprocessedName.length > 1) &&
            (preprocessedName[0] === "Intl") &&
            (preprocessedName[1].charAt(0).toUpperCase() ===
            preprocessedName[1].charAt(0))) {
        preprocessedName.shift();
    }
    if ((preprocessedName[0].indexOf("8Array") > -1) ||
            (preprocessedName[0].indexOf("16Array") > -1) ||
            (preprocessedName[0].indexOf("32Array") > -1) ||
            (preprocessedName[0].indexOf("64Array") > -1) ||
            (preprocessedName[0].indexOf("8ClampedArray") > -1) ||
            (preprocessedName[0] === "ArrayBuffer") ||
            (preprocessedName[0] === "DataView")) {
        preprocessedName.unshift("API");
    } else if (preprocessedName[0] === "arguments") {
        preprocessedName.unshift("Functions_and_function_scope");
        preprocessedName.unshift("Reference");
        preprocessedName.unshift("JavaScript");
    } else {
        preprocessedName.unshift("Global_Objects");
        preprocessedName.unshift("Reference");
        preprocessedName.unshift("JavaScript");
    }
    return "/en-US/docs/Web/" + preprocessedName.join("/");
};
