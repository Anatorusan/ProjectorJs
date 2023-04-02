//module for trigBox object
//startapp function
//module for buttonListener
//module for lightSwitcher
//module for textSwitcher
//module for localStorage
//module for dateRenderer

'use strict'
import { securedTrigSwitch } from "./trigBox.js";
import { trigCheck } from "./trigBox.js";
import { buttonListener } from "./buttonListener.js";
import { backgr } from "./lightSwitcher.js"; //temporary - waiting for renderer function and local storage
import { dateField } from "./lightSwitcher.js"; //temporary - waiting for renderer function and local storage
import { lightSwitcher } from "./lightSwitcher.js";
import { btnOnOff } from "./textSwitcher.js"; //temporary - waiting for renderer function and local storage
import { dateOnOff } from "./textSwitcher.js"; //temporary - waiting for renderer function and local storage
import { textSwitcher } from "./textSwitcher.js";
import { saveData } from "./storage.js";
import { loadData } from "./storage.js";
import { renderDate } from "./dateRenderer.js";
import { dateText } from "./dateRenderer.js";
import { timeText } from "./dateRenderer.js";




//module for switcherRenderer



const startAppFunc = () => {
    console.log ('App started');

    backgr.style.backgroundColor = loadData('background-color') ? loadData('background-color') : '#FFF';
    dateField.style.color = loadData('date-color') ? loadData('date-color') : '#000';
    btnOnOff.innerHTML = loadData('btnText') ? loadData('btnText') : 'Turn Off';
    dateOnOff.innerHTML = loadData('dateText') ? loadData('dateText') : 'on';
    dateText.innerHTML = loadData('date') ? loadData('date') : '';
    timeText.innerHTML = loadData('time') ? loadData('time') : '';

    const textOutputdocument= document.querySelector('.dateOutput'); //doesn't work
    textOutputdocument.style.visibility = localStorage.length ? 'visible' : ''; //doesn't work

    buttonListener(lightSwitcher.bind(this, trigCheck), textSwitcher.bind(this, trigCheck), securedTrigSwitch, renderDate);
}

document.addEventListener('DOMContentLoaded', startAppFunc);

//alternative bckgr color: #282727
//alternative date color: #ede5e5