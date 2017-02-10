"use strict";

var doctrine = require("doctrine");

module.exports.process = function (definitions) {
    return definitions.map(function (definition) {
        var copy, docBlockData;
        copy = JSON.parse(JSON.stringify(definition));
        docBlockData = doctrine.parse(definition.docBlock, {
            unwrap: true,
            recoverable: true
        });
        copy.docBlockDescription = docBlockData.description;
        if (copy.docBlockDescription) {
            copy.docBlockDescription = copy.docBlockDescription.trim();
        }
        copy.docBlockData = docBlockData.tags.map(function (tag) {
            return {
                tag: tag.title,
                type: tag.type,
                name: tag.name,
                description: tag.description
            };
        });
        return copy;
    });
};
