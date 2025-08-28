// Part 1: Variables and Conditionals

// Variable declarations
var myVar = "Hello";
let myLet = 42;
const myConst = true;

// DOM elements for Part 1
const tempButton = document.getElementById('tempButton');
const tempInput = document.getElementById('tempInput');
const tempOutput = document.getElementById('tempOutput');

// Conditional function
function checkTemperature() {
    const temperature = parseInt(tempInput.value);
    
    if (isNaN(temperature)) {
        tempOutput.textContent = "Please enter a valid number!";
        return;
    }
    
    if (temperature > 30) {
        tempOutput.textContent = `It's hot outside! (${temperature}°C)`;
    } else if (temperature > 20) {
        tempOutput.textContent = `The weather is pleasant. (${temperature}°C)`;
    } else {
        tempOutput.textContent = `It's cold outside! (${temperature}°C)`;
    }
}

// Event listener for temperature button
tempButton.addEventListener('click', checkTemperature);

// Part 2: Functions

// Custom function 1: Greeting
function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// DOM elements for greeting function
const greetButton = document.getElementById('greetButton');
const nameInput = document.getElementById('nameInput');
const greetingOutput = document.getElementById('greetingOutput');

function showGreeting() {
    const name = nameInput.value || 'Guest';
    greetingOutput.textContent = greet(name);
}

// Event listener for greeting button
greetButton.addEventListener('click', showGreeting);

// Custom function 2: Area calculation
const calculateArea = function() {
    const widthInput = document.getElementById('widthInput');
    const heightInput = document.getElementById('heightInput');
    const areaOutput = document.getElementById('areaOutput');
    
    const width = parseFloat(widthInput.value);
    const height = parseFloat(heightInput.value);
    
    if (isNaN(width) || isNaN(height)) {
        areaOutput.textContent = "Please enter valid numbers for width and height!";
        return;
    }
    
    const area = width * height;
    areaOutput.textContent = `The area is: ${area}`;
};

// DOM elements for area calculation
const areaButton = document.getElementById('areaButton');
areaButton.addEventListener('click', calculateArea);

// Part 3: Loops

// Loop example 1: For loop
const forLoopButton = document.getElementById('forLoopButton');
const forLoopOutput = document.getElementById('forLoopOutput');

function runForLoop() {
    forLoopOutput.innerHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        forLoopOutput.innerHTML += `Iteration ${i}<br>`;
    }
}

forLoopButton.addEventListener('click', runForLoop);

// Loop example 2: Array iteration
const arrayButton = document.getElementById('arrayButton');
const arrayOutput = document.getElementById('arrayOutput');

function iterateFruits() {
    arrayOutput.innerHTML = '';
    
    const fruits = ["Apple", "Banana", "Orange", "Grape", "Mango"];
    
    for (let i = 0; i < fruits.length; i++) {
        arrayOutput.innerHTML += `Fruit ${i+1}: ${fruits[i]}<br>`;
    }
}

arrayButton.addEventListener('click', iterateFruits);

// Part 4: DOM Interactions

// DOM interaction 1: Change text content
const changeTextButton = document.getElementById('changeTextButton');
const textElement = document.getElementById('textToChange');

function changeText() {
    textElement.textContent = "The text has been changed successfully!";
    textElement.style.color = "#2575fc";
    textElement.style.fontWeight = "bold";
}

changeTextButton.addEventListener('click', changeText);

// DOM interaction 2: Toggle background color
const colorButton = document.getElementById('colorButton');
const colorCard = colorButton.parentNode;

function toggleColor() {
    if (colorCard.style.backgroundColor === 'lightcyan') {
        colorCard.style.backgroundColor = '';
    } else {
        colorCard.style.backgroundColor = 'lightcyan';
    }
}

colorButton.addEventListener('click', toggleColor);

// DOM interaction 3: Add new item
const addItemButton = document.getElementById('addItemButton');
const newItemInput = document.getElementById('newItemInput');
const itemList = document.getElementById('itemList');

function addNewItem() {
    if (newItemInput.value.trim() === '') {
        alert('Please enter an item!');
        return;
    }
    
    const newItem = document.createElement('li');
    newItem.textContent = newItemInput.value;
    itemList.appendChild(newItem);
    
    newItemInput.value = '';
}

addItemButton.addEventListener('click', addNewItem);