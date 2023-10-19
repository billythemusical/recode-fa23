// first, check if there is an item
// we do this because this storage is persistent
// so if we are running this sketch again, we may have already 
// stored an item called 'myItem' and we will get errors if we
// try to store another identical item
if (getStoredItem()) removeStoredItem()

// then let's save an item
saveItem()

const findButton = document.getElementById('find-all')
    .addEventListener('click', findAllItems)
const save = document.getElementById('save')
    .addEventListener('click', saveItem)
const get = document.getElementById('get')
    .addEventListener('click', getItem)
const remove = document.getElementById('remove')
    .addEventListener('click', removeItem)
const clear = document.getElementById('clear')
    .addEventListener('click', clearStorage)

function findAllItems() {
    // using Spread Syntax - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    const items = { ...localStorage }
    console.log(items)
}

function saveItem() {
    const keyInput = document.getElementById('key').value
    const valueInput = document.getElementById('value').value
    if (keyInput && valueInput) {
        localStorage.setItem(keyInput, valueInput)
        console.log(`Saved this item: {"${keyInput}":"${localStorage.getItem(keyInput)}"}`)
    }
}

function removeItem() {
    console.log('Removing stored item')
    localStorage.removeItem("myItem")
    console.log("My item =", localStorage.getItem("myItem"))
}

function getItem() {
    return localStorage.getItem('myItem')
}

function clearStorage() {
    let answer = confirm('Are you sure you want to clear the localStorage?')
    if (answer === true) {
        localStorage.clear()
        console.log('localStorage cleared!')
    }
}




