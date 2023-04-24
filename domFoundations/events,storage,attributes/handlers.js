const swBtn = document.getElementById('swichButtn');

export const handlers = (...events) => {
    events.forEach((event) => {
        swBtn.addEventListener('click', event);
    })
    
}