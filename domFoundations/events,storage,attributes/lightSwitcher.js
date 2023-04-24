import { backgrElement } from "./initialPageRenderer.js";
import { dateFieldElement } from "./initialPageRenderer.js";
import { saveData } from "./storage.js";

export const lightSwitcher = (check) => {
    backgrElement.style.backgroundColor = check() ? '#282727' : '#FFF';
    saveData('background-color', backgrElement.style.backgroundColor);
    dateFieldElement.style.color = check() ? '#ede5e5' : '#000';
    saveData('date-color', dateFieldElement.style.color);
}