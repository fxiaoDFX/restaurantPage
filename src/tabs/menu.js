const content = document.getElementById("content")

export default function addToDOM() {
    addMenu()
}

// append all elements to menuContainer
// Add menu items here
function addMenu() {
    const menuContainer = document.createElement("div")
    //    menuContainer.classList.add('menu', 'tabcontent');
    menuContainer.classList.add("menu", "tabcontent", "active")
    menuContainer.textContent += "menu placeholder"
    content.appendChild(menuContainer)

    title()

    /* Menu Categories */

    // Appetizers
    const appetizers = createCategory("Appetizers")
    const wings = createMenuItem("Wings", "$4,20")
    const nachos = createMenuItem("Nachos", "$4.00")
    const calamari = createMenuItem("Calamari", "$5.00")
    appetizers.append(wings, nachos, calamari)

    // Main
    const main = createCategory("Entrees")
    const ribeye = createMenuItem("16oz Ribeye", "$35")
    const salmon = createMenuItem("Sesame Ginger Salmon", "$25")
    const burger = createMenuItem("Double Stack House", "$14.00")
    main.append(ribeye, salmon, burger)

    // Sides

    // Beverages
    const beverages = createCategory("Beverages")
    const coke = createMenuItem("Coke", "$1.00")
    const coffee = createMenuItem("Coffee", "$3.50")
    const orangeJuice = createMenuItem("Orange Juice", "2.00")
    beverages.append(coke, coffee, orangeJuice)

    /* Add Categories to menu here */
    menuContainer.append(appetizers, main, beverages)
    function title() {
        const title = document.createElement("h1")
        title.textContent = "Menu"
        menuContainer.appendChild(title)
    }
}

/**
 * createCategory.
 * Creates a div with name as heading
 * @param {string} name of category
 * @return div element of category
 */
function createCategory(name) {
    const div = document.createElement("div")

    const categoryName = document.createElement("h2")
    categoryName.textContent = name
    div.appendChild(categoryName)
    return div
}

/**
 * createMenuItem.
 * Creates a div with name as heading to represent food item
 * @param {string} name of item
 * @param {string} price of item
 * @return div element of item
 */
function createMenuItem(name, price) {
    const div = document.createElement("div")
    const itemName = document.createElement("h3")
    itemName.textContent = name
    div.appendChild(itemName)
    const itemPrice = document.createElement("p")
    itemPrice.textContent = price
    div.appendChild(itemPrice)

    return div
}

// factory function with unknown purpose
function Item(name, price) {
    const getName = () => name
    const getPrice = () => price

    return { getName, getPrice }
}
