const content = document.getElementById('content');

export default function addToDOM() {
    addMenu();

}

// append all elements to menuContainer 
function addMenu() {
    const menuContainer = document.createElement('div');
//    menuContainer.classList.add('menu', 'tabcontent');
    menuContainer.classList.add('menu', 'tabcontent', 'active');
    menuContainer.textContent += 'menu placeholder';
    content.appendChild(menuContainer);

    title();
    
    // Menu Categories
    const appetizers = createCategory('Appetizers');
    menuContainer.appendChild(appetizers);

    // Appetizers
    const coke = createMenuItem('Coke', '$1.00');
    const coffee = createMenuItem('Coffee', '$3.50');
    const orangeJuice = createMenuItem('Orange Juice', '2.00');
    
    appetizers.append(coke, coffee, orangeJuice);

    function title() {
        const title = document.createElement('h1');
        title.textContent = 'Menu';
        menuContainer.appendChild(title);
    }
}


/**
 * createCategory.
 *
 * @param {string} name of category
 * @return div element of category
 */
function createCategory(name) {
    const div = document.createElement('div');
    
    const categoryName = document.createElement('h2');
    categoryName.textContent = name;
    div.appendChild(categoryName);
    return div;
}

/**
 * createMenuItem.
 *
 * @param {string} name of item
 * @param {string} price of item
 * @return div element of item
 */
function createMenuItem(name, price) {
    const div = document.createElement('div');
    const itemName = document.createElement('h3');
    itemName.textContent = name;
    div.appendChild(itemName);
    const itemPrice = document.createElement('p');
    itemPrice.textContent = price;
    div.appendChild(itemPrice);

    return div;
}
