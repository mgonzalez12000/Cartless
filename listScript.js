// Ask user to enter list name
var listName = prompt("Please enter a name for your list");
// If user input is not empty, update html
if (listName != null) {
    document.getElementById('listTitle').innerHTML = '<b>' + listName + '</b>';
}

// Get access to elements in HTML file
// Get access to groceries container
const groceries = document.getElementsByClassName('groceries')[0];
// Get access to refresh icon
const pencil = document.getElementById('refresh');
// Get access to the confirm button
const button = document.getElementById('confirmInput');
// Get access to all of the items
const allItems = document.getElementById('allItems');
// Get access to input box
const userInput = document.getElementById('userInput');
// Cerate an empty list to add items to check duplicate inputs
var lst = [];
// This is the list that will check for duplicates
const hashMap = {};

// Add an event listener when they click the on the pencil icon 
pencil.addEventListener('click', function () {
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
    // Create an H2 element
    var h2 = document.createElement("H2");
    // Add to html
    h2.innerHTML = '- ' + userInput.value;
    // Pushing user input items to list define in line 20
    lst.push(userInput.value);
    // Logging for testing purposes. Use Chrome/Safari dev tools' console to view changes.
    console.log(lst);
    // Check for duplicates of items by iterating through object (Hashmap implementation)
    // Key: word    Value: occurrences
    if (!(hashMap.hasOwnProperty(userInput.value))) {
        hashMap[userInput.value] = 1;
    } else {
        hashMap[userInput.value] += 1;
    }
    // Logging for testing purposes. Use Chrome/Safari dev tools' console to view changes.
    console.log(hashMap);


    /* Would like to show an alert when items already exist in hashmap. This is done by checking if the value is greater than 1. This was tried below (lines 67-76).
    
    Algorithm issues: Once the duplicate is found, and the alert is thrown, when inputting a non-duplicate input, the alert still pop ups. MINOR feature.
    */


    // for (var key in hashMap) {
    //     var booleanVal = false
    //     if (hashMap[key] > 1) {
    //         alert('Uh oh!');
    //         alert = function () {};

    //     } else {
    //         h2.innerHTML = '- ' + userInput.value;
    //     }
    // }


    h2.addEventListener("click", function () {
        h2.style.textDecoration = 'line-through';
    })

    allItems.insertAdjacentElement('beforeend', h2);

    userInput.value = '';
}