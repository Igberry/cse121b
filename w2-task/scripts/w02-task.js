/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */



/* Step 3 - Element Variables */





/* Step 4 - Adding Content */






/* Step 5 - Array */

// Declare and instantiate variables
let fullName = 'David Chukwudi Igberi';
const currentYear = new Date().getFullYear();
let profilePicture = 'images/image.me.jpg';

// Set HTML Element Variables
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('year');
const imageElement = document.getElementById('home');

// Adding Content to the Document
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('images/image.me.jpg', profilePicture);
imageElement.setAttribute('Image of Me', `Profile image of ${fullName}`);

// Arrays
let favoriteFoods = ['Fried Rice', 'Chicken', 'Fried Plantain'];
let anotherFavoriteFood = 'Boiled rice & Turkey Stew';

// Append anotherFavoriteFood to favoriteFoods array
favoriteFoods.push(anotherFavoriteFood);

// Update HTML with favorite foods array
foodElement.innerHTML = favoriteFoods.join('<br>');

// Remove the first element
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

// Remove the last element
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;




