'use strict';
function makeNegative(num) {
    if (num === 0) {
      return 0;
      }
    if(Boolean(Math.sign(num)-1)) {
      return num ;
    } else {
      return num * (-1);
    }
  }