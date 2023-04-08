import { timeText } from "./initialPageRenderer.js";
import { dateText } from "./initialPageRenderer.js";
import { saveData } from "./storage.js";
import { loadData } from "./storage.js";

export const renderDate = () => {
    const currentDate = new Date();
    const addZero = (stringToPad, targetLength = 2, padWithString = `0`) =>
     `${stringToPad}`.padStart(targetLength, padWithString);
    
    const date = `${
        addZero(currentDate.getDate())}-${
        addZero(currentDate.getMonth()+1)}-${
            currentDate.getFullYear()}`
    saveData('date', date);

    const time = `${
        addZero(currentDate.getHours())}:${
        addZero(currentDate.getMinutes())}:${
        addZero(currentDate.getSeconds())}`
    saveData('time', time);

    dateText.innerHTML = loadData('date');
    timeText.innerHTML = loadData('time');
}