"use strict"
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
const unsortInitials = userNames.map((element) => {
    const splitElement = element.split(' ');
    const initialsArr = splitElement.map(name => name.slice(0, 1));
    return initialsArr.join('.');
})
const initials = unsortInitials.sort();
console.log(initials);