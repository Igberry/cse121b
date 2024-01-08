const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// Create a new section element
const newSection = document.createElement('section');

// Create an h2 element with content "CSE 121b"
const heading = document.createElement('h2');
heading.textContent = 'CSE 121b';

// Create a paragraph element with content
const paragraph = document.createElement('p');
paragraph.textContent = 'Welcome to Javascript Language';

// Append the heading and paragraph to the section
newSection.appendChild(heading);
newSection.appendChild(paragraph);

// Append the section to the body
document.body.appendChild(newSection);