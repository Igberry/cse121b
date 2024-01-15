function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    // Get values from HTML form controls and convert them to numbers
    const number1 = parseFloat(document.getElementById('add1').value);
    const number2 = parseFloat(document.getElementById('add2').value);
  
    // Call the 'add' function using the obtained values
    const sum = add(number1, number2);
  
    // Assign the return value to an HTML form element with an ID of 'sum'
    document.getElementById('sum').value = sum;
}

// Add a "click" event listener to the HTML button with an ID of 'addNumbers'
document.getElementById('addNumbers').addEventListener('click', addNumbers);



// Function Expression - subtract
const subtract = function(number1, number2) {
    return number1 - number2;
};
  
// Function Expression - subtractNumbers
const subtractNumbers = function() {
    // Get values from HTML form controls and convert them to numbers
    const number1 = parseFloat(document.getElementById('subtract1').value);
    const number2 = parseFloat(document.getElementById('subtract2').value);
  
    // Call the 'subtract' function using the obtained values
    const difference = subtract(number1, number2);
  
    // Assign the return value to an HTML form element with an ID of 'difference'
    document.getElementById('difference').value = difference;
};
  
// Add a "click" event listener to the HTML button with an ID of 'subtractNumbers'
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);



// Arrow Function - multiply
const multiply = (number1, number2) => number1 * number2;

// Arrow Function - multiplyNumbers
const multiplyNumbers = () => {
  // Get values from HTML form controls and convert them to numbers
  const number1 = parseFloat(document.getElementById('factor1').value);
  const number2 = parseFloat(document.getElementById('factor2').value);

  // Call the 'multiply' arrow function using the obtained values
  const product = multiply(number1, number2);

  // Assign the return value to an HTML form element with an ID of 'product'
  document.getElementById('product').value = product;
};

// Add a "click" event listener to the HTML button with an ID of 'multiplyNumbers'
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);



// Function Declaration - divide
function divide(dividend, divisor) {
    return dividend / divisor;
}

// Function Declaration - divideNumbers
function divideNumbers() {
    // Get values from HTML form controls and convert them to numbers
    const dividend = parseFloat(document.getElementById('dividend').value);
    const divisor = parseFloat(document.getElementById('divisor').value);

    // Call the 'divide' function using the obtained values
    const quotient = divide(dividend, divisor);

    // Assign the return value to an HTML form element with an ID of 'quotient'
    document.getElementById('quotient').value = quotient;
}

// Add a "click" event listener to the HTML button with an ID of 'divideNumbers'
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);



// Event listener for the Get Total Due button
document.getElementById('getTotal').addEventListener('click', function() {
    // Declare and instantiate a variable that stores the numeric value entered by the user in the subtotal field
    const subtotalValue = parseFloat(document.getElementById('subtotal').value);

    // User input validation (optional stretch goal)
    // Check IF the membership checkbox has been checked by the user to apply a 15% discount
    const membershipCheckbox = document.getElementById('member');
    const discount = membershipCheckbox.checked ? 0.15 : 0;

    // Calculate the total with or without discount
    const total = subtotalValue - subtotalValue * discount;

    // Output the total to the total span in the format shown with two decimals using a template string
    document.getElementById('total').textContent = `Total Due: $${total.toFixed(2)}`;
});



// Declare and instantiate an array variable to hold the numbers 1 through 13.
const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);

// Assign the value of the array variable to the HTML element with an ID of 'array'.
document.getElementById('array').innerText = numbersArray.join(', ');

// Use the filter() array method to find all odd numbers.
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);

// Assign the result to the HTML element with an ID of 'odds'.
document.getElementById('odds').innerText = oddNumbers.join(', ');

// Use the filter() array method to find all even numbers.
const evenNumbers = numbersArray.filter(number => number % 2 === 0);

// Assign the result to the HTML element with an ID of 'evens'.
document.getElementById('evens').innerText = evenNumbers.join(', ');

// Use the reduce() array method to sum the array elements.
const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Assign the result to the HTML element with an ID of 'sumOfArray'.
document.getElementById('sumOfArray').innerText = sumOfArray;

// Use the map() array method to multiply each element by 2.
const multipliedArray = numbersArray.map(number => number * 2);

// Assign the result to the HTML element with an ID of 'multiplied'.
document.getElementById('multiplied').innerText = multipliedArray.join(', ');

// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two.
const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Assign the result to the HTML element with an ID of 'sumOfMultiplied'.
document.getElementById('sumOfMultiplied').innerText = sumOfMultiplied;
