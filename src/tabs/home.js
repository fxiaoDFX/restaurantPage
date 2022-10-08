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
    content.appendChild(main);
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
