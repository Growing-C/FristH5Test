'use strict'
console.log("Hello world");

if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}