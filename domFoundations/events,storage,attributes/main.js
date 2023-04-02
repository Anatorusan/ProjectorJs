'use strict'

//TODO - make module to render the whole document

import { securedTrigSwitch } from "./trigBox.js";
import { trigCheck } from "./trigBox.js";
import { buttonListener } from "./buttonListener.js";
import { backgr } from "./lightSwitcher.js"; //temporary - should be somehow removed
import { dateField } from "./lightSwitcher.js"; //temporary - should be somehow removed
import { lightSwitcher } from "./lightSwitcher.js";
import { btnOnOff } from "./textSwitcher.js"; //temporary - should be somehow removed
import { dateOnOff } from "./textSwitcher.js"; //temporary - should be somehow removed
import { textSwitcher } from "./textSwitcher.js";
import { saveData } from "./storage.js";
import { loadData } from "./storage.js";
import { renderDate } from "./dateRenderer.js";
import { dateText } from "./dateRenderer.js";
import { timeText } from "./dateRenderer.js";


const startAppFunc = () => {
    console.log ('App started');

    //TODO - make function for this
    backgr.style.backgroundColor = 'background-color' in localStorage ? loadData('background-color') : '#FFF';
    dateField.style.color = 'date-color' in localStorage ? loadData('date-color') : '#000';
    btnOnOff.innerHTML = 'btnText' in localStorage ? loadData('btnText') : 'Turn Off';
    dateOnOff.innerHTML = 'dateText' in localStorage ? loadData('dateText') : 'on';
    dateText.innerHTML = 'date' in localStorage ? loadData('date') : '';
    timeText.innerHTML = 'time' in localStorage ? loadData('time') : '';

    const textOutputdocument= document.querySelector('.dateOutput'); //doesn't work properly, repeats in textSwitcher.js
    textOutputdocument.style.visibility = localStorage.length ? 'visible' : ''; //doesn't work properly, repeats in textSwitcher.js

    buttonListener(lightSwitcher.bind(this, trigCheck), textSwitcher.bind(this, trigCheck), securedTrigSwitch, renderDate);
}

document.addEventListener('DOMContentLoaded', startAppFunc);