export const backgr = document.querySelector('body'); //temporary export
export const dateField = document.querySelector('.dateOutput'); //temporary export

import { saveData } from "./storage.js";

//make vairble with key name and export where needed

export const lightSwitcher = (check) => {
    backgr.style.backgroundColor = check() ? '#282727' : '#FFF';
    saveData('background-color', backgr.style.backgroundColor);
    dateField.style.color = check() ? '#ede5e5' : '#000'; //cosider transfer this function to the date module
    saveData('date-color', dateField.style.color); //cosider transfer this function to the date module
}