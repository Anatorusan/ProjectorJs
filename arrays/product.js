'use strict'
const resultsArray = [1, 2, [3, [4]]];

function depthCounter(array) {
    let counter = 0;
    counterFunc(array);
    function counterFunc(cascadedArray) {
        for (let element of cascadedArray) {
            if (Array.isArray(element)) {
                counter ++;
                counterFunc(element);
            }
        }
        return
    }
    return counter;
}

const flattenArr = resultsArray.flat(depthCounter(resultsArray));
let productOfArray = flattenArr.reduce((a, b) => a * b );
console.log(productOfArray);