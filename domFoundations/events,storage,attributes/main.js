const backgr = document.querySelector('body');
const dateField = document.querySelector('.dateOutput');
const swBtn = document.getElementById('swichButtn');
const btnOnOff = document.querySelector('.btnOnOff');
const dateOnOff = document.querySelector('.dateOnOff');

const trigBox = {
    trigger: 1,
    trigOff() {
        this.trigger -= 1;
    },
    trigOn() {
        this.trigger += 1;
    }
}

const trigSwitcher = () => {
    trigBox.trigger ? trigBox.trigOff() : trigBox.trigOn();
    console.log(trigBox.trigger)
}

const lightSwitcher = () => {
    backgr.style.backgroundColor = trigBox.trigger ? '#282727' : '';
    dateField.style.color = trigBox.trigger ? '#ede5e5' : '';
}

const textSwitcher = () => {
    btnOnOff.innerHTML = trigBox.trigger ? 'On' : 'Off';
    dateOnOff.innerHTML = !trigBox.trigger ? 'on' : 'off';
}



swBtn.addEventListener('click', lightSwitcher);
swBtn.addEventListener('click', textSwitcher);
swBtn.addEventListener('click', trigSwitcher)


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