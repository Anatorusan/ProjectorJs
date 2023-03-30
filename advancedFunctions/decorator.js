'use strict'
const tribonacci = (signature,n) => {
    const arr = [...signature];
    for(let count = 3; count < n; count ++) {
        arr.push(arr.slice(-3).reduce((a, b) => a + b, 0));
      }
    arr.slice(0, n).forEach((element) => console.log(element));
  }

const slower = (func, seconds) => {
  const wrapper = (...args) => {
    console.log(`Chill out bro, you will get you result in ${seconds} seconds`);
    return setTimeout(func.bind(this, ...args), seconds*1000);
  }
  return wrapper;
}

const slowedTribonacci = slower(tribonacci, 5);
slowedTribonacci([0, 0, 3], 10);