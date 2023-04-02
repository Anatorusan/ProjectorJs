//module for trigBox object
//startapp function
//module for buttonListener
//module for lightSwitcher

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



//module for textSwitcher
//module for switcherRenderer
//module for dateRenderer
//module for localStorage

// const btnOnOff = document.querySelector('.btnOnOff');
// const dateOnOff = document.querySelector('.dateOnOff');


const startAppFunc = () => {
    console.log ('App started');
    backgr.style.backgroundColor = '#FFF';
    dateField.style.color = '#000';
    btnOnOff.innerHTML = 'Turn Off';
    dateOnOff.innerHTML = 'on';

    buttonListener(lightSwitcher.bind(this, trigCheck), textSwitcher.bind(this, trigCheck), securedTrigSwitch);
}

document.addEventListener('DOMContentLoaded', startAppFunc);

// const textSwitcher = () => {
//     btnOnOff.innerHTML = trigCheck() ? 'Turn On' : 'Turn Off';
//     dateOnOff.innerHTML = !trigCheck() ? 'on' : 'off';
// }

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