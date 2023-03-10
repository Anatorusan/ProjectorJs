'use strict'
const resultsArray = [1, 2, [3, [4]]];
const flattenArr = resultsArray.flat(Infinity);
const productOfArray = flattenArr.reduce((a, b) => a * b );
console.log(productOfArray);