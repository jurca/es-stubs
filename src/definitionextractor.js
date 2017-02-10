"use strict";

var esprima = require("esprima");

module.exports.extract = function (code) {
    var ast, rawDefinitions, filteredDefinitions;
    ast = esprima.parse(code, {
        attachComment: true
    });
    rawDefinitions = ast.body.map(extractDefinitions);
    filteredDefinitions = rawDefinitions.filter(function (definition) {
        return definition.type !== "EmptyStatement";
    });
    return flatten(filteredDefinitions).filter(function (definition) {
        if (definition.type.charAt(0).toLowerCase() !==
                definition.type.charAt(0)) {
            console.error("The following definition was not recognized: " +
                    JSON.stringify(definition, null, 4));
            return false;
        }
        if (!definition.docBlock) {
            console.error("The following definition is not documented: " +
                    JSON.stringify(definition, null, 4));
            return false;
        }
        if (definition.docBlock.charAt(0) !== "*") {
            console.error("The following definition is not documented: " +
                    JSON.stringify(definition, null, 4));
            return false;
        }
        return true;
    });
};

function flatten(sequence) {
    var elements;
    elements = [];
    sequence.forEach(function (element) {
        if (element instanceof Array) {
            elements = elements.concat(flatten(element));
        } else {
            elements.push(element);
        }
    });
    return elements;
}

function extractDefinitions(statement) {
    switch (statement.type) {
        case "VariableDeclaration":
            return extractVariableDeclaration(statement);
        case "ExpressionStatement":
            return extractExpressionDeclaration(statement);
        case "FunctionDeclaration":
            return extractFunctionDeclaration(statement);
        default:
            return statement;
    }
}

function extractFunctionDeclaration(statement) {
    var name, type, params, docBlock;
    name = resolveMemberExpression(statement.id);
    if (name[0].charAt(0).toUpperCase() === name[0].charAt(0)) {
        type = "class declaration";
    } else {
        type = "function declaration";
    }
    docBlock = statement.leadingComments && statement.leadingComments.length ?
            statement.leadingComments.pop().value : null;
    params = statement.params.map(resolveMemberExpression).map(function (p) {
        return p[0];
    });
    return {
        type: type,
        name: name,
        params: params,
        docBlock: docBlock
    };
}

function extractExpressionDeclaration(statement) {
    var docBlock;
    docBlock = statement.leadingComments && statement.leadingComments.length ?
            statement.leadingComments.pop().value : null;
    switch (statement.expression.type) {
        case "AssignmentExpression":
            return extractAssignmentDeclaration(statement.expression,
                    docBlock);
        case "MemberExpression":
            return extractMemberDeclaration(statement.expression, docBlock);
        default:
            return statement;
    }
}

function extractMemberDeclaration(expression, docBlock) {
    return {
        type: "member declaration",
        name: resolveMemberExpression(expression),
        docBlock: docBlock
    };
}

function extractAssignmentDeclaration(expression, docBlock) {
    var left, right, name, type, valueType, params;
    left = expression.left;
    right = expression.right;
    switch (left.type) {
        case "MemberExpression":
            name = resolveMemberExpression(left);
            break;
        case "Identifier":
            name = [left.name];
            break;
        default:
            return expression;
    }
    if (name[1] === "prototype") {
        switch (right.type) {
            case "NewExpression":
                type = "prototype property";
                valueType = resolveMemberExpression(right.callee);
                break;
            case "FunctionExpression":
                type = "instance method";
                params = right.params.map(resolveMemberExpression).
                        map(function (p) { return p[0]; });
                break;
            case "Literal":
                type = "prototype property";
                valueType = right.raw;
                break;
            default:
                return expression;
        }
    } else if (name[0].charAt(0).toUpperCase() === name[0].charAt(0)) {
        switch (right.type) {
            case "NewExpression":
                type = "static property";
                valueType = resolveMemberExpression(right.callee);
                break;
            case "FunctionExpression":
                type = "static method";
                params = right.params.map(resolveMemberExpression).
                        map(function (p) { return p[0]; });
                break;
            case "Literal":
                type = "prototype property";
                valueType = right.raw;
                break;
            default:
                return expression;
        }
    } else {
        switch (right.type) {
            case "FunctionExpression":
                type = "function declaration";
                params = right.params.map(resolveMemberExpression).
                        map(function (p) { return p[0]; });
                break;
            default:
                return expression;
        }
    }
    return {
        type: type,
        name: name,
        docBlock: docBlock,
        params: params,
        valueType: valueType
    };
}

function resolveMemberExpression(expression) {
    if (expression.type === "Identifier") {
        return [expression.name];
    } else {
        return resolveMemberExpression(expression.object).
                concat([expression.property.name]);
    }
}

function extractVariableDeclaration(statement) {
    var declarations;
    declarations = statement.declarations.map(function (declaration) {
        switch (declaration.type) {
            case "VariableDeclarator":
                return {
                    type: "variable",
                    name: declaration.id.name,
                    docBlock: declaration.leadingComments &&
                            declaration.leadingComments.length ?
                            declaration.leadingComments.pop().value : null
                };
            default:
                return declaration;
        }
    });
    if (statement.leadingComments && statement.leadingComments.length) {
        declarations[0].docBlock = statement.leadingComments.pop().value;
    }
    return declarations;
}
