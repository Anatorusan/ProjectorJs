//module for trigBox object
//startapp function
//module for buttonListener
//module for lightSwitcher
//module for textSwitcher

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




//module for switcherRenderer
//module for dateRenderer
//module for localStorage

const startAppFunc = () => {
    console.log ('App started');

    backgr.style.backgroundColor = loadData('background-color') ? loadData('background-color') : '#FFF';
    dateField.style.color = loadData('date-color') ? loadData('date-color') : '#000';
    btnOnOff.innerHTML = loadData('btnText') ? loadData('btnText') : 'Turn Off';
    dateOnOff.innerHTML = loadData('dateText') ? loadData('dateText') : 'on';

    buttonListener(lightSwitcher.bind(this, trigCheck), textSwitcher.bind(this, trigCheck), securedTrigSwitch);
}

document.addEventListener('DOMContentLoaded', startAppFunc);

//alternative bckgr color: #282727
//alternative date color: #ede5e5


//example of startApp
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