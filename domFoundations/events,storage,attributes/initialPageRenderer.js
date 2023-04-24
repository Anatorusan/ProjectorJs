import { loadData } from "./storage.js";

export const backgrElement = document.querySelector('body');
export const dateFieldElement = document.querySelector('.dateOutput');
export const btnOnOffElement = document.querySelector('.btnOnOff');
export const dateOnOffElement = document.querySelector('.dateOnOff');
export const dateTextElement = document.querySelector('.date');
export const timeTextElement = document.querySelector('.time');
export const dateOutputElement= document.querySelector('.dateOutput');

export const startStateRenderer = () => {
    backgrElement.style.backgroundColor = 'background-color' in localStorage ? loadData('background-color') : '#FFF';
    dateFieldElement.style.color = 'date-color' in localStorage ? loadData('date-color') : '#000';
    btnOnOffElement.innerHTML = 'btnText' in localStorage ? loadData('btnText') : 'Turn Off';
    dateOnOffElement.innerHTML = 'dateText' in localStorage ? loadData('dateText') : 'on';
    dateTextElement.innerHTML = 'date' in localStorage ? loadData('date') : '00-00-0000';
    timeTextElement.innerHTML = 'time' in localStorage ? loadData('time') : '00:00:00';
    dateOutputElement.style.visibility = localStorage.length ? 'visible' : 'hidden';
}