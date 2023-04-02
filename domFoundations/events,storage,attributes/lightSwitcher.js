export const backgr = document.querySelector('body');
export const dateField = document.querySelector('.dateOutput');

export const lightSwitcher = (check) => {
    backgr.style.backgroundColor = check() ? '#282727' : '#FFF';
    dateField.style.color = check() ? '#ede5e5' : '#000';
}