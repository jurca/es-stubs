"use strict";

exports.Retriever = Retriever;

var http = require("http");
var https = require("https");

/**
 * The Retriever is the common base class for documentation retrievers used to
 * retrieve detailed documentation from various sources.
 * 
 * @abstract
 * @constructor
 */
function Retriever() {
    // check for overrides of abstract methods
    if (this.getDocumentationFor === Retriever.prototype.getDocumentationFor) {
        throw new Error("The abstract method getDocumentationFor is not " +
                "overridden");
    }
}

/**
 * Retrieves the documentation for the provided definition.
 * 
 * @param {Object} definition The definition for which the documentation should
 *        be retrieved.
 * @param {Function} callback Callback to execute with the retrieved
 *        documentation or error.
 * @returns {Documentation} Retrieved documentation.
 */
Retriever.prototype.getDocumentationFor = function (definition, callback) {
    throw new Error("Not implemented yet");
};

/**
 * Performs an HTTPS request.
 * 
 * @param {Object} options Request options.
 * @param {Function} callback Callback to execute with the response body or
 *        error.
 * @see http://nodejs.org/api/http.html#http_http_request_options_callback
 */
Retriever.prototype.httpsGet = function (options, callback) {
    https.get(options, function (response) {
        var body;
        body = "";
        response.on("data", function (chunk) {
            body += chunk;
        });
        response.on("end", function () {
            callback(body);
        });
    }).on("error", callback);
};

/**
 * Performs an HTTP request. Do not use for HTTPS.
 * 
 * @param {Object} options Request options.
 * @param {Function} callback Callback to execute with the response body or
 *        error.
 * @see http://nodejs.org/api/http.html#http_http_request_options_callback
 * @see #httpsGet
 */
Retriever.prototype.httpGet = function (options, callback) {
    http.get(options, function (response) {
        var body;
        body = "";
        response.on("data", function (chunk) {
            body += chunk;
        });
        response.on("end", function () {
            callback(body);
        });
    }).on("error", callback);
};
