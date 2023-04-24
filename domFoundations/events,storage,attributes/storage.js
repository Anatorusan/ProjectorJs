export const saveData = (key, value) => {
    localStorage.setItem(key, value);
}

export const loadData = (key, defaultValue) => {
    const loadedData = localStorage.getItem(key);
    return loadedData ? loadedData : defaultValue;
}