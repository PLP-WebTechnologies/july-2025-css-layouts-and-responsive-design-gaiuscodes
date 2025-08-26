// script.js - JavaScript Fundamentals Project

// ==============================
// PART 1: Variables and Conditionals
// ==============================

// Variable declarations with different data types
const projectName = "JavaScript Fundamentals Project";
let currentDate = new Date();
let userCount = 0;
var isProjectComplete = false;
const colors = ["red", "green", "blue", "yellow", "purple"];
const userInfo = {
    name: "User",
    level: "Beginner",
    skills: ["HTML", "CSS", "JavaScript"]
};

// Display variables in the output area
function displayVariables() {
    const output = document.getElementById('variables-output');
    output.innerHTML = `
        <p><strong>Project Name:</strong> ${projectName} (string)</p>
        <p><strong>Current Date:</strong> ${currentDate.toDateString()} (Date object)</p>
        <p><strong>User Count:</strong> ${userCount} (number)</p>
        <p><strong>Project Complete:</strong> ${isProjectComplete} (boolean)</p>
        <p><strong>Colors Array:</strong> ${colors.join(', ')} (array)</p>
        <p><strong>User Info:</strong> ${userInfo.name}, ${userInfo.level} level with skills in ${userInfo.skills.join(', ')} (object)</p>
    `;
}

// Conditional function to check age group
function checkAgeGroup() {
    const ageInput = document.getElementById('age-input');
    const output = document.getElementById('conditionals-output');
    const age = parseInt(ageInput.value);
    
    if (isNaN(age)) {
        output.innerHTML = '<p style="color: red;">Please enter a valid age!</p>';
        return;
    }
    
    let ageGroup;
    if (age < 13) {
        ageGroup = "child";
    } else if (age < 20) {
        ageGroup = "teenager";
    } else if (age < 65) {
        ageGroup = "adult";
    } else {
        ageGroup = "senior";
    }
    
    output.innerHTML = `<p>You are an <strong>${ageGroup}</strong> (${age} years old).</p>`;
}

// ==============================
// PART 2: Custom Functions
// ==============================

// Function 1: Calculate total price with tax
function calculateTotalPrice(price, quantity, taxRate = 0.1) {
    // Input validation
    if (typeof price !== 'number' || typeof quantity !== 'number' || price < 0 || quantity < 0) {
        return "Invalid input: Price and quantity must be non-negative numbers";
    }
    
    const subtotal = price * quantity;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    
    return {
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
    };
}

// Function to handle the calculate total button click
function handleCalculateTotal() {
    const price = parseFloat(document.getElementById('price-input').value);
    const quantity = parseInt(document.getElementById('quantity-input').value);
    const output = document.getElementById('function1-output');
    
    const result = calculateTotalPrice(price, quantity);
    
    if (typeof result === 'string') {
        output.innerHTML = `<p style="color: red;">${result}</p>`;
    } else {
        output.innerHTML = `
            <p><strong>Subtotal:</strong> $${result.subtotal}</p>
            <p><strong>Tax (10%):</strong> $${result.tax}</p>
            <p><strong>Total:</strong> $${result.total}</p>
        `;
    }
}

// Function 2: Format string with various options
function formatString(text, options = {}) {
    // Input validation
    if (typeof text !== 'string') {
        return "Invalid input: Text must be a string";
    }
    
    const {
        toUpperCase = false,
        toLowerCase = false,
        capitalize = false,
        addPrefix = "",
        addSuffix = ""
    } = options;
    
    let formattedText = text;
    
    // Apply formatting options
    if (toUpperCase) {
        formattedText = formattedText.toUpperCase();
    } else if (toLowerCase) {
        formattedText = formattedText.toLowerCase();
    } else if (capitalize) {
        formattedText = formattedText.charAt(0).toUpperCase() + formattedText.slice(1).toLowerCase();
    }
    
    // Add prefix and suffix
    formattedText = addPrefix + formattedText + addSuffix;
    
    return formattedText;
}

// Function to handle the format text button click
function handleFormatText() {
    const text = document.getElementById('text-input').value;
    const output = document.getElementById('function2-output');
    
    if (!text.trim()) {
        output.innerHTML = '<p style="color: red;">Please enter some text to format!</p>';
        return;
    }
    
    // Example 1: Uppercase with prefix
    const upperText = formatString(text, { toUpperCase: true, addPrefix: "[UPPERCASE] " });
    
    // Example 2: Capitalized with suffix
    const capText = formatString(text, { capitalize: true, addSuffix: " [FORMATTED]" });
    
    output.innerHTML = `
        <p><strong>Uppercase:</strong> ${upperText}</p>
        <p><strong>Capitalized:</strong> ${capText}</p>
    `;
}

// ==============================
// PART 3: Loops
// ==============================

// For loop example: Generate a list of numbers
function generateNumberList(count) {
    if (count <= 0 || count > 100) {
        return "Please enter a number between 1 and 100";
    }
    
    let numbers = [];
    for (let i = 1; i <= count; i++) {
        numbers.push(i);
    }
    
    return numbers;
}

// Function to handle the for loop button click
function handleForLoop() {
    const count = parseInt(document.getElementById('count-input').value);
    const output = document.getElementById('for-loop-output');
    
    const result = generateNumberList(count);
    
    if (typeof result === 'string') {
        output.innerHTML = `<p style="color: red;">${result}</p>`;
    } else {
        output.innerHTML = `<p>Numbers: ${result.join(', ')}</p>`;
    }
}

// While loop example: Countdown timer simulation
function countdownTimer(start) {
    if (start <= 0 || start > 10) {
        return "Please enter a number between 1 and 10";
    }
    
    let countdown = [];
    let i = start;
    
    while (i >= 0) {
        countdown.push(i);
        i--;
    }
    
    return countdown;
}

// Function to handle the while loop button click
function handleWhileLoop() {
    const start = parseInt(document.getElementById('countdown-input').value);
    const output = document.getElementById('while-loop-output');
    
    const result = countdownTimer(start);
    
    if (typeof result === 'string') {
        output.innerHTML = `<p style="color: red;">${result}</p>`;
    } else {
        // Simulate countdown with delays
        output.innerHTML = '<p>Countdown starting...</p>';
        
        let i = 0;
        const interval = setInterval(() => {
            if (i < result.length) {
                output.innerHTML = `<p>Countdown: <strong>${result[i]}</strong></p>`;
                i++;
            } else {
                output.innerHTML = '<p>Countdown finished! 🎉</p>';
                clearInterval(interval);
            }
        }, 500);
    }
}

// ForEach loop example: Process shopping list
function processShoppingList() {
    const shoppingList = [
        { name: "Apples", price: 2.99, quantity: 5 },
        { name: "Bread", price: 3.49, quantity: 1 },
        { name: "Milk", price: 4.99, quantity: 2 },
        { name: "Eggs", price: 3.99, quantity: 1 },
        { name: "Cheese", price: 6.99, quantity: 1 }
    ];
    
    let processedItems = [];
    
    shoppingList.forEach((item, index) => {
        const total = (item.price * item.quantity).toFixed(2);
        processedItems.push(`${index + 1}. ${item.name}: $${item.price} x ${item.quantity} = $${total}`);
    });
    
    return processedItems;
}

// Function to handle the forEach button click
function handleForEach() {
    const output = document.getElementById('foreach-output');
    const items = processShoppingList();
    
    output.innerHTML = `
        <p><strong>Shopping List Processing:</strong></p>
        <ul>
            ${items.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
}

// ==============================
// PART 4: DOM Manipulation
// ==============================

// DOM Interaction 1: Dynamic content creation
function addItemToList() {
    const itemInput = document.getElementById('item-input');
    const itemText = itemInput.value.trim();
    const list = document.getElementById('dynamic-list');
    
    if (!itemText) {
        alert("Please enter an item!");
        return;
    }
    
    // Create new list item
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    
    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        list.removeChild(listItem);
    };
    
    // Add button to list item
    listItem.appendChild(removeButton);
    
    // Add item to list
    list.appendChild(listItem);
    
    // Clear input
    itemInput.value = '';
    
    console.log(`Added item to list: ${itemText}`);
}

// DOM Interaction 2: Toggle content visibility
function toggleContent() {
    const content = document.getElementById('toggle-content');
    const button = document.getElementById('toggle-content-btn');
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        button.textContent = 'Hide Content';
    } else {
        content.style.display = 'none';
        button.textContent = 'Show Content';
    }
    
    console.log('Toggled content visibility');
}

// DOM Interaction 3: Change element styles
function changeBackgroundColor() {
    const element = document.getElementById('style-demo');
    element.classList.toggle('changed');
    
    const isChanged = element.classList.contains('changed');
    const button = document.getElementById('change-style-btn');
    
    if (isChanged) {
        button.textContent = 'Revert Background Color';
        console.log('Changed background color');
    } else {
        button.textContent = 'Change Background Color';
        console.log('Reverted background color');
    }
}

// ==============================
// Event Listeners
// ==============================

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Display initial variables
    displayVariables();
    
    // Part 1: Conditionals event listener
    document.getElementById('check-age-btn').addEventListener('click', checkAgeGroup);
    
    // Part 2: Custom functions event listeners
    document.getElementById('calculate-total-btn').addEventListener('click', handleCalculateTotal);
    document.getElementById('format-text-btn').addEventListener('click', handleFormatText);
    
    // Part 3: Loops event listeners
    document.getElementById('for-loop-btn').addEventListener('click', handleForLoop);
    document.getElementById('while-loop-btn').addEventListener('click', handleWhileLoop);
    document.getElementById('foreach-btn').addEventListener('click', handleForEach);
    
    // Part 4: DOM manipulation event listeners
    document.getElementById('add-item-btn').addEventListener('click', addItemToList);
    document.getElementById('toggle-content-btn').addEventListener('click', toggleContent);
    document.getElementById('change-style-btn').addEventListener('click', changeBackgroundColor);
    
    // Allow Enter key to trigger buttons
    document.getElementById('age-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') checkAgeGroup();
    });
    
    document.getElementById('price-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleCalculateTotal();
    });
    
    document.getElementById('text-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleFormatText();
    });
    
    document.getElementById('count-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleForLoop();
    });
    
    document.getElementById('countdown-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleWhileLoop();
    });
    
    document.getElementById('item-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addItemToList();
    });
    
    console.log("JavaScript Fundamentals Project loaded successfully!");
});