/* STEP 3: Declare Global Variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* STEP 4: Function - displayTemples */
const displayTemples = (templeArray) => {
    templeArray.forEach((temple) => {
        const articleElement = document.createElement('article');

        const h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;

        const imgElement = document.createElement('img');
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        templesElement.appendChild(articleElement);
    });
};

/* STEP 5: Function - getTemples */
const getTemples = async () => {
    try {
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
        templeList = await response.json();
        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
};

/* Call the function to test */
getTemples();

/* STEP 6: Function - reset */
const reset = () => {
    templesElement.innerHTML = '';
};

/* STEP 7: Function - filterTemples */
const filterTemples = (temples) => {
    reset();
    const filter = document.getElementById('filtered').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            console.error('Invalid filter value');
    }
};

/* STEP 8: Event Listener - filterTemples Element change */
document.getElementById('filtered').addEventListener('change', () => {
    filterTemples(templeList);
});