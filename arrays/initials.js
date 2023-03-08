"use strict"
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
const unsortInitials = userNames.map(function(element) {
    element = element.split(' ');
    let initialsArr = element.map(a => a.slice(0, 1));
    return initialsArr.join('.');
})
let initials = unsortInitials.sort();
console.log(initials);