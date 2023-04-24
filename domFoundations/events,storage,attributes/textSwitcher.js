import { btnOnOffElement } from "./initialPageRenderer.js";
import { dateOnOffElement } from "./initialPageRenderer.js";
import { dateOutputElement } from "./initialPageRenderer.js";
import { saveData } from "./storage.js";

export const textSwitcher = (check) => {
    btnOnOffElement.innerHTML = check() ? 'Turn On' : 'Turn Off';
    saveData('btnText', btnOnOffElement.innerHTML);
    dateOnOffElement.innerHTML = !check() ? 'on' : 'off';
    saveData('dateText', dateOnOffElement.innerHTML);
    dateOutputElement.style.visibility = localStorage.length ? 'visible' : 'hidden'; 
}