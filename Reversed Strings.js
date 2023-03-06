"use strict"
function solution(str) {
    const strArray = str.split('');
    const reversedStrArray = strArray.reverse();
    const reversedStr = reversedStrArray.join('');
    return reversedStr;
  }