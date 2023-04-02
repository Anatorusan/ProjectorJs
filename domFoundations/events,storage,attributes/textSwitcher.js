export const btnOnOff = document.querySelector('.btnOnOff');
export const dateOnOff = document.querySelector('.dateOnOff');

export const textSwitcher = (check) => {
    btnOnOff.innerHTML = check() ? 'Turn On' : 'Turn Off';
    dateOnOff.innerHTML = !check() ? 'on' : 'off';
}