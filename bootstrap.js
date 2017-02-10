var fs = require("fs");
var extractor = require("./src/definitionextractor");
var jsdocparser = require("./src/jsdocparser");
var retriever = require("./src/documentation/MdnCoreJSRetriever");

var documentor = new retriever.MdnCoreJSRetriever();

fs.readdir("input", function (error, files) {
    if (error) {
        throw error;
    }
    
    files.forEach(function (file) {
        processFile(file);
    });
});

function processFile(file) {
    console.log("Processing file " + file);
    if (fs.existsSync("output/" + file)) {
        console.log("The file " + file + " has already been processed " +
            "before, skipping");
        return;
    }

    fs.readFile("input/" + file, { encoding: "UTF-8" }, function (error, data) {
        var definitions, documentedDefinitions;
        if (error) {
            throw error;
        }
        
        definitions = jsdocparser.process(extractor.extract(data));
        documentedDefinitions = [];
        processNextDefinition();
        
        function processNextDefinition() {
            var definition, result;
            definition = definitions.shift();
            if (!definition) { // we're done!
                console.log("Writing the constructed documentation to a file");
                result = documentedDefinitions.join("\n\n") + "\n";
                fs.writeFileSync("output/" + file, result, {
                    mode: parseInt("644", 8)
                });
                return;
            }

            console.log("Retrieving the documentation for " +
                    getDefinitionName(definition));
            documentor.getDocumentationFor(definition, function (doc) {
                console.log(doc.getDocumentedDefinition() + "\n");
                documentedDefinitions.push(doc.getDocumentedDefinition());
                processNextDefinition();
            });
        }

        function getDefinitionName(definition) {
            if (!definition) {
                return "[UNKNOWN]";
            }
            if (definition.name instanceof Array) {
                return definition.name.join(".");
            }
            return definition.name;
        }
    });
}
