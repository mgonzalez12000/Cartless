// Ask user to enter list name
var listName = prompt("Please enter a name for your list");

// Checking the type of listName. listName is a String
// console.log(typeof listName);

// Changing first char of user input to uppercase.
listName = listName.charAt(0).toUpperCase() + listName.slice(1);

// If user input is not empty, update html
if (listName != null) {
    document.getElementById('listTitle').innerHTML = '<b>' + listName + '</b>';
}

// Get access to elements in HTML file
// Get access to groceries container
const groceries = document.getElementsByClassName('groceries')[0];

// Get access to refresh icon
const refresh = document.getElementById('refresh');

// Get access to the confirm button
const button = document.getElementById('confirmInput');

// Get access to all of the items
const allItems = document.getElementById('allItems');

// Get access to input box
const userInput = document.getElementById('userInput');

// Initialize an empty list
var lst = [];

// list of duplicates
var duplicateList = [];

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
})

// Add an event listener when the user presses the 'enter' button
userInput.addEventListener('keydown', function (event) {
    if (event.key == "Enter")
        addItem();
})

// Function that handles adding items onto our display
function addItem() {
    // Verifying if userInput.value is indeed a string. userInput.value IS a string
    // console.log(typeof userInput.value);

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
            listOfDuplicateKeys.push(key)
        }
    }

    // Logging for testing purposes. Use Chrome/Safari dev tools' console to view changes being made to data structure.
    console.log(listOfDuplicateKeys);

    // This was the previous implementation causing the blocker for duplicates/alert
    // Handling alert and adding items to the list UI.
    // for (var i = 0; i < lst.length; i++) {
    //     if (userInput.value == listOfDuplicateKeys) {
    //         alert('uh oh, you already have this item in your list');
    //     } else {
    //         h2.innerHTML = '- ' + userInput.value;
    //     }
    // }

    // New implementation
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
    userInput.value = '';
}