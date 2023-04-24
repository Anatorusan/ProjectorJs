import { loadData } from "./storage.js";

export const backgrElement = document.querySelector('body');
export const dateFieldElement = document.querySelector('.dateOutput');
export const btnOnOffElement = document.querySelector('.btnOnOff');
export const dateOnOffElement = document.querySelector('.dateOnOff');
export const dateTextElement = document.querySelector('.date');
export const timeTextElement = document.querySelector('.time');
export const dateOutputElement= document.querySelector('.dateOutput');

export const startStateRenderer = () => {
    backgrElement.style.backgroundColor = loadData('background-color', '#FFF');
    dateFieldElement.style.color = loadData('date-color', '#000');
    btnOnOffElement.innerHTML = loadData('btnText', 'Turn Off');
    dateOnOffElement.innerHTML = loadData('dateText', 'on');
    dateTextElement.innerHTML = loadData('date', '00-00-0000');
    timeTextElement.innerHTML = loadData('time', '00:00:00');
    dateOutputElement.style.visibility = localStorage.length ? 'visible' : 'hidden';
}