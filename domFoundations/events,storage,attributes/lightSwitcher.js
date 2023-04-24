import { backgrElement } from "./initialPageRenderer.js";
import { dateFieldElement } from "./initialPageRenderer.js";
import { saveData } from "./storage.js";

export const lightSwitcher = (checkTriggerMode) => {
    backgrElement.style.backgroundColor = checkTriggerMode() ? '#282727' : '#FFF';
    saveData('background-color', backgrElement.style.backgroundColor);
    dateFieldElement.style.color = checkTriggerMode() ? '#ede5e5' : '#000';
    saveData('date-color', dateFieldElement.style.color);
}