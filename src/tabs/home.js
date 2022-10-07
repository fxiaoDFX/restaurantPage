const content = document.getElementById("content");

export default function addToDOM() {
    const h1 = document.createElement("h1");

    // call functions
    addTab();
}

// create tabs
function addTab() {
    const tab = document.createElement("div");
    content.appendChild(tab);
    tab.className += "tab";

    const button1 = document.createElement("button");
    tab.appendChild(button1);
    button1.className = "home";
    button1.innerHTML = "Home";

    const list = addElements("button", 3, ["home", "Menu", "Contact"]);
    list.forEach((index) => console.log(index.innerText));
}

/**
 * addElements
 *
 * @param {string} type of element
 * @param {number} number of elements to make
 * @param {array} arr optional array of strings
 * @return list of elements
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
