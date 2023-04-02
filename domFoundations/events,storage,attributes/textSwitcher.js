export const btnOnOff = document.querySelector('.btnOnOff'); //temporary export
export const dateOnOff = document.querySelector('.dateOnOff'); //temporary export

import { saveData } from "./storage.js";
//make vairble with key name and export where needed

export const textSwitcher = (check) => {
    btnOnOff.innerHTML = check() ? 'Turn On' : 'Turn Off';
    saveData('btnText', btnOnOff.innerHTML);
    dateOnOff.innerHTML = !check() ? 'on' : 'off';
    saveData('dateText', dateOnOff.innerHTML);
    const textOutputdocument= document.querySelector('.dateOutput'); //doesn't work
    textOutputdocument.style.visibility = localStorage.length ? 'visible' : ''; //doesn't work
}