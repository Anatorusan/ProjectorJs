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



const listeners = () => {
  initialDateElement.addEventListener('input', endDateActivator);
  endDateElement.addEventListener('change', initialDateLimiter);
  resetButtnElement.addEventListener('click', limitersReset);
}

const startApp = () => {
  console.log ('App started');
  
  listeners();
}

document.addEventListener('DOMContentLoaded', startApp); 