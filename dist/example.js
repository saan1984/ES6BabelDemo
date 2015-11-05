"use strict";

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var symbol1 = Symbol("I am Symbol1");
console.log("symbol1: ", symbol1);
var symbol1Type = typeof symbol1 === "undefined" ? "undefined" : _typeof(symbol1);
console.log("symbol1Type: ", symbol1Type);

var symbol2 = Symbol.for(24);
console.log("Key for symbol2: ", Symbol.keyFor(symbol2));
console.log("Symbol for key 24: ", Symbol.for(24));