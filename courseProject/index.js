'use strict'

import { saveData } from './jsModules/ls.js';
import { loadData } from './jsModules/ls.js';

const initialDateElement = document.querySelector('.startDateInput'); //verified
const endDateElement = document.querySelector('.endDateInput'); //verified
const calcButtnElement = document.querySelector('#calcButtn'); //verified
const displayElement = document.querySelector('.result__text'); //verified
const unitSelectorElement = document.querySelector('#selectUnit'); //verified
const minusMonthButtnElement = document.querySelector('#minusMonthButtn'); //verified
const plusMonthButtnElement = document.querySelector('#plusMonthButtn'); //verified
const minusWeekButtnElement = document.querySelector('#minusWeekButtn'); //verified
const plusWeekButtnElement = document.querySelector('#plusWeekButtn'); //verified
const selectDayTypeElement = document.querySelector('#selectDayType'); //verified
const tableHeaderElement = document.querySelector('.tableHeader'); //verified
const resetButtnElement = document.querySelector('#resButtn'); //verified
const unitTypeElement = document.querySelector('.unitType'); //verified

const unitsMap = {
  '86400000' : 'Days',
  '3600000' : 'Hours',
  '60000' : 'Minutes',
  '1000' : 'Seconds'
}

const endDateActivator = () => {
  endDateElement.disabled = false;
  endDateElement.setAttribute('min', initialDateElement.value);
}

const initialDateLimiter = () => {
  initialDateElement.setAttribute('max', endDateElement.value);
}

const limitersReset = () => {
  endDateElement.setAttribute('min', '');
  initialDateElement.setAttribute('max', '');
}

const resultReset = () => {
  displayElement.innerHTML = 'Result';
}

const unitTypeReset = () => {
  unitTypeElement.innerHTML = '';
}

const endDateDeactivator = () => {
  endDateElement.disabled = true;
}

const termDurationGenerator = () => {
  let start = new Date(initialDateElement.value);
  start.setDate(start.getDate() + 1); 
  const finish = new Date(endDateElement.value);
  const dayMilliseconds = 1000 * 60 * 60 * 24;

  if (selectDayTypeElement.value !== 'all') {
    let weekendDaysCounter = 0;
    let businessDaysCounter = 0;
    while (start <= finish) {
      let day = start.getDay();
      if (day === 0 || day === 6) {
        weekendDaysCounter++;
      } else {
        businessDaysCounter++;
      }
      start = new Date(+start + dayMilliseconds);
    }
    return selectDayTypeElement.value === 'weekend' ? weekendDaysCounter * dayMilliseconds : businessDaysCounter * dayMilliseconds;
  }
  return finish - start + dayMilliseconds;
}

const calculate = () => {
  if ((endDateElement.value === '') || (endDateElement.value < initialDateElement.value)) {
    return;
  }
  displayElement.innerHTML = termDurationGenerator() / Number(unitSelectorElement.value);
}

const unitTypeIndicator = () => {
  unitTypeElement.innerHTML = displayElement.innerHTML == '1' ? unitsMap[unitSelectorElement.value].split('').slice(0, -1).join('') : unitsMap[unitSelectorElement.value];
}

const listeners = () => {
  initialDateElement.addEventListener('input', endDateActivator);
  endDateElement.addEventListener('change', initialDateLimiter);
  resetButtnElement.addEventListener('click', limitersReset);
  resetButtnElement.addEventListener('click', resultReset);
  resetButtnElement.addEventListener('click', endDateDeactivator);
  resetButtnElement.addEventListener('click', unitTypeReset);
  calcButtnElement.addEventListener('click', calculate);
  calcButtnElement.addEventListener('click', unitTypeIndicator);
}

const startApp = () => {
  console.log ('App started');
  
  listeners();
}

document.addEventListener('DOMContentLoaded', startApp); 