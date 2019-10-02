const addToLocalStorage = (key, values) => localStorage.setItem(key, JSON.stringify(values))
const getFromLocalStorage = key => JSON.parse(localStorage.getItem(key))


export {addToLocalStorage, getFromLocalStorage}