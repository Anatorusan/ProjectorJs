"use strict"
function solution(str){
  const arrOfRevStr = [];
  let revStr = '';
  for (let i = 0; i < str.length; i++) {
    arrOfRevStr[(str.length - 1) - i] = str[i];
  }
  for (let count = 0; count < str.length; count ++) {
    revStr = revStr + arrOfRevStr[count];
  }
  return revStr;
}

console.log(solution('world'))