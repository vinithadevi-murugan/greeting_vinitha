"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(str) {
    if (typeof str !== 'string') {
        return "Please pass string value";
    }
    return "Hello " + str;
}
exports.greet = greet;
