const content = document.getElementById('content');

export default function addToDOM() {
    const h1 = document.createElement('h1');

    // call functions
    addTab();
    addMain();
    addFooter();
}

// create tab header
function addTab() {
    const tabContainer = document.createElement('div');
    content.appendChild(tabContainer);
    tabContainer.className += 'tab';

    const list = addElements('button', 3, ['Home', 'Menu', 'Contact']);

    appendElements(list, tabContainer);
}

// create main body
function addMain() {
    const main = document.createElement('div');
    main.textContent += 'Main Content Goes Here';
    main.className += 'main';
    content.appendChild(main);

    restaurantInfo();

    function restaurantInfo() {
        const nameElement = document.createElement('h1');
        const descriptionElement = document.createElement('p');

        descriptionElement.textContent += description;
        nameElement.textContent += name;
        main.append(nameElement, descriptionElement);
    }
}

// create footer
function addFooter() {
    const footer = document.createElement('div');
    footer.textContent += 'Footer';
    footer.className += 'footer';
    content.appendChild(footer);
}

/**
 * addElements.
 *
 * @param {string} type of element
 * @param {number} number of elements to make
 * @param {array} arr optional array of strings
 * @recontentturn list of elements
 */
function addElements(type, number, arr = undefined) {
    const list = [];

    for (let i = 0; i < number; i++) {
        const element = document.createElement(type);

        if (arr != undefined) {
            element.textContent += arr[i];
        }
        list.push(element);
    }
    return list;
}

/**
 * appendElements.
 *
 * @param {array} list of elements
 * @param {Object} parent to append to
 */
function appendElements(list, parent) {
    list.forEach((element) => parent.appendChild(element));
}

const description =  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut tortor imperdiet, porttitor arcu a, fermentum nisl. Fusce eu odio a dolor accumsan tincidunt vel ac nibh. Phasellus interdum luctus nisi, a venenatis nibh iaculis et. Maecenas imperdiet mi sit amet molestie convallis. Proin sed suscipit enim, in posuere tellus. Morbi pharetra mauris quis dolor iaculis tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas non finibus urna, ornare ultrices nunc. Suspendisse diam lectus, eleifend nec luctus eu, convallis eu ligula.'; 

const name = 'Lorem Ipsum';

