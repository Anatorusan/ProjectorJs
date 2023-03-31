const backgr = document.querySelector('body');
const dateField = document.querySelector('.dateOutput');
const swBtn = document.getElementById('swichButtn');

const trigBox = {
    trigger: 1,
    trigOff() {
        this.trigger -= 1;
    },
    trigOn() {
        this.trigger += 1;
    }
}

const lightSwitcher = () => {

    const changer = () => {
        if (trigBox.trigger) {
            backgr.style.backgroundColor = '#282727';
            dateField.style.color = '#ede5e5';
            trigBox.trigOff();
        } else {
            backgr.style.backgroundColor = '';
            dateField.style.color = '';
            trigBox.trigOn();
        }
    }
    return changer;
}



swBtn.addEventListener('click', lightSwitcher());


// const box = document.querySelector("body > div")
// box.style.backgroundColor = 'pink'
// document.querySelector("body > div").style.backgroundColor = 'red';
//alternative bckgr color: #282727
//alternative date color: #ede5e5

// const lightSwitcher = () => {
//     let trigger = 1;
//     const changer = () => {
//         if (trigger) {
//             backgr.style.backgroundColor = '#282727';
//             dateField.style.color = '#ede5e5';
//             trigger -= 1;
//         } else {
//             backgr.style.backgroundColor = '';
//             dateField.style.color = '';
//             trigger += 1;
//         }
//     }
//     return changer;
// }