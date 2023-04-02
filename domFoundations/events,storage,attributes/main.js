//module for trigBox object
'use strict'
import { securedTrigSwitch } from "./trigBox.js";
import { trigCheck } from "./trigBox.js";


//module for lightOn/Off
//module for genDate
//module for localStorage
//module for switchListener
//startapp function

const backgr = document.querySelector('body');
const dateField = document.querySelector('.dateOutput');
const swBtn = document.getElementById('swichButtn');
const btnOnOff = document.querySelector('.btnOnOff');
const dateOnOff = document.querySelector('.dateOnOff');


const startAppFunc = () => {
    console.log ('Light switcher started');
    backgr.style.backgroundColor = '#FFF';
    dateField.style.color = '#000';
    btnOnOff.innerHTML = ' Turn Off';
    dateOnOff.innerHTML = 'on';
}

document.addEventListener('DOMContentLoaded', startAppFunc);

const lightSwitcher = () => {
    backgr.style.backgroundColor = trigCheck() ? '#282727' : '#FFF';
    dateField.style.color = trigCheck() ? '#ede5e5' : '#000';
}

const textSwitcher = () => {
    btnOnOff.innerHTML = trigCheck() ? 'Turn On' : 'Turn Off';
    dateOnOff.innerHTML = !trigCheck() ? 'on' : 'off';
}

swBtn.addEventListener('click', lightSwitcher);
swBtn.addEventListener('click', textSwitcher);
swBtn.addEventListener('click', securedTrigSwitch);


//alternative bckgr color: #282727
//alternative date color: #ede5e5


//exampl of startApp
// const startApp = () => {
//     console.log('Workshop1 startApp');

//     const tasksList = loadList();

//     renderList(tasksList);

//     const updateList = () => {
//         saveList(tasksList);
//         renderList(tasksList);
//     };

//     const onSubmit = (newTask) => {
//         tasksList.push({
//             name: newTask,
//             completed: false,
//         });
//         updateList();
//     };

//     formListener(onSubmit);

//     listClickListener((index) => {
//         tasksList.splice(index, 1);
//         updateList();
//     });

//     formChangeListener((text) => {
//         const filteredTasks = tasksList.filter(byName(text));
//         renderList(filteredTasks);
//     });
// };

// document.addEventListener('DOMContentLoaded', startApp);

//exampe of local storage
// const LS_KEY = 'tasksList';

// export const saveList = (tasksList) => {
//     localStorage.setItem(LS_KEY, JSON.stringify(tasksList));
// };

// export const loadList = (tasksList) => {
//     const savedList = localStorage.getItem(LS_KEY);
//     return savedList ? JSON.parse(savedList) : [];
// };