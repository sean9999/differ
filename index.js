#!/usr/bin/env node

require('colors');
var jsdiff = require('diff');

var a = '{"funk": "bunk", "banana": 7, "nice": "cake", "bird": "parrot"}';

var b = `
{
    "funk": "bunk",
    "banana": 76,
    "bird": "parrot",
    "nice": "cake"
}
`;

var reorderKeys = function(obj1){
    var obj2 = {};
    var keys = Object.keys(obj1);
    keys.sort();
    keys.forEach(function(key){
        obj2[key] = obj1[key];
    });
    return obj2;
};

var distill = function(obj) {
    return JSON.stringify(reorderKeys(JSON.parse(obj)),null,' ');
};

var c = distill(a);
var d = distill(b);

console.log( JSON.parse(a), JSON.parse(b) );

var diff = jsdiff.diffJson( JSON.parse(a), JSON.parse(b));

console.log(diff);
