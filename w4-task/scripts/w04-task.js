/* LESSON 3 - Programming Tasks */

/* Profile Object  */




/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


let myProfile = {
    name: "David Chukwudi Igberi",
    photo: "images/image.me.jpg",
};
 // Adding a property named favoriteFoods with an array of favorite foods
myProfile.favoriteFoods = ["Rice", "Turkey Stew", "Bananas", "Shawarma"];
myProfile.hobbies = ["Singing", "Playing Piano", "Movies"];
myProfile.placesLived = [];

// Adding items to placesLived array
myProfile.placesLived.push({
  place: "Ghana",
  length: "2 years"
});

myProfile.placesLived.push({
  place: "Osogbo, Nigeria",
  length: "16 years"
});

myProfile.placesLived.push({
  place: "Yenagoa, Nigeria",
  length: "6 years"
});

// Displaying myProfile object in the console
console.log(myProfile);

// Assign the value of the name property to the HTML element with an ID of 'name'
document.getElementById("name").textContent = myProfile.name;

// Assign the value of the photo property as the src attribute of the HTML <img> with an ID of 'photo'
document.getElementById("photo").src = myProfile.photo;

// Assign the value of the name property as the alt attribute of the HTML <img> with an ID of 'photo'
document.getElementById("photo").alt = myProfile.name;

// For each favorite food, create an HTML <li> element and append it to the <ul> with an ID of 'favorite-foods'
myProfile.favoriteFoods.forEach(function(food) {
  let ul = document.createElement('ul');
  ul.textContent = food;
  document.getElementById("favorite-foods").appendChild(ul);
});

// For each hobby, create an HTML <li> element and append it to the <ul> with an ID of 'hobbies'
myProfile.hobbies.forEach(function(hobby) {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.getElementById("hobbies").appendChild(li);
});

// For each place lived, create an HTML <dt> and <dd> element and append them to the <dl> with an ID of 'places-lived'
myProfile.placesLived.forEach(function(place) {
  let dt = document.createElement('dt');
  dt.textContent = place.place;

  let dd = document.createElement('dd');
  dd.textContent = place.length;

  document.getElementById("places-lived").appendChild(dt);
  document.getElementById("places-lived").appendChild(dd);
});
