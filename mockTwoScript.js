// // Ask user to enter list name
// var listName = prompt("Please enter a name for your list");

// // Changing first char of user input to uppercase.
// listName = listName.charAt(0).toUpperCase() + listName.slice(1);

// // If user input is not empty, update html
// if (listName != null) {
//     document.getElementById('listTitle').innerHTML = '<b>' + listName + '</b>';
// }

var preLst =["Frosted Flakes","Hamburger Meat","Milk","Yogurt"]

// Initialize an empty list
var lst = [];

// Initializing an empty list that will store duplicate items
var duplicateList = [];

// Get access to elements in HTML file
// Get access to groceries container
const groceries = document.getElementsByClassName('groceries')[0];

// Get access to lastEdited
const lastEdited = document.getElementById('lastEdited');

// Get access to refresh icon
const refresh = document.getElementById('refresh');

// Get access to the confirm button
const button = document.getElementById('confirmInput');

// Get access to all of the items
const allItems = document.getElementById('allItems');

// Get access to input box
const userInput = document.getElementById('userInput');

/* 
Hash Map (Dictionary/Object) will track item and its occurrences.
KEY: item  VALUE: occurrence
*/
const hashMap = {};

// Add an event listener when user clicks the on the 'refresh' icon 
refresh.addEventListener('click', function () {
    allItems.innerHTML = '';
})

// Add an event listener when the user clicks on the 'Add Item' button
button.addEventListener('click', function () {
    addItem();
    lastEdited.innerHTML = 'Last edited: ' + document.lastModified;
})

// Add an event listener when the user presses the 'enter' button
userInput.addEventListener('keydown', function (event) {
    if (event.key == "Enter") {
        addItem();
        lastEdited.innerHTML = 'Last edited: ' + document.lastModified;
    }
})

//Loops through each preloaded value to print out onto html page 
for(let i =0; i < preLst.length; i++){
    addPreloadedItem(preLst[i])
}

// Function that handles adding items onto our display
function addItem() {
    // Make first char in string uppercase
    userInput.value = userInput.value.charAt(0).toUpperCase() + userInput.value.slice(1);

    // Create an H2 element
    var h2 = document.createElement("H2");
    // Adding items to list
    lst.push(userInput.value);
    // Logging for testing purposes. Use Chrome/Safari dev tools' console to view changes.
    console.log(lst);

    // Using the HashMap (Object in JS) data structure to Keep track of occurrences for each user input.
    // Key: word    Value: occurrences
    if (!(hashMap.hasOwnProperty(userInput.value))) {
        hashMap[userInput.value] = 1;
    } else {
        hashMap[userInput.value] += 1;
    }

    // Logging for testing purposes. Use Chrome/Safari dev tools' console to view changes data structure.
    console.log(hashMap);

    // Populate listOfDuplicates if the value (count) is greater than 1.
    var listOfDuplicateKeys = [];
    for (var key in hashMap) {
        if (hashMap[key] > 1) {
            listOfDuplicateKeys.push(key);
        }
    }

    // Handling if an item already exists in shopping list. Will throw an alert if the item exists.
    if (listOfDuplicateKeys.includes(userInput.value)) {
        alert('uh oh, you already have this item in your list');
    } else {
        h2.innerHTML = '- ' + userInput.value;
    }

    // Adds a line through element decorator when item is tapped or clicked
    h2.addEventListener("click", function () {
        if (h2.style.textDecoration != "line-through") {
            h2.style.textDecoration = 'line-through';
        } else {
            h2.style.textDecoration = 'none';
        }
    })

    allItems.insertAdjacentElement('beforeend', h2);
    // Resets text box after input
    userInput.value = '';
}

//Pre-load function
function addPreloadedItem(preloaded) {
    // Make first char in string uppercase
    preloaded = preloaded.charAt(0).toUpperCase() + preloaded.slice(1);

    // Create an H2 element
    var h2 = document.createElement("H2");
    // Adding items to list
    lst.push(preloaded);
    // Logging for testing purposes. Use Chrome/Safari dev tools' console to view changes.
    console.log(lst);

   
    h2.innerHTML = '- ' + preloaded;
    

    // Adds a line through element decorator when item is tapped or clicked
    h2.addEventListener("click", function () {
        if (h2.style.textDecoration != "line-through") {
            h2.style.textDecoration = 'line-through';
        } else {
            h2.style.textDecoration = 'none';
        }
    })

    allItems.insertAdjacentElement('beforeend', h2);
    // Resets text box after input
    userInput.value = '';
}