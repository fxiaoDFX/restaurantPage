import addMenu from "./menu.js"
import addContact from "./contact.js"
// images
import burgerAndFries from "../assests/images/burger-and-fries.jpg"
import burger from "../assests/images/burger-with-spinach.jpg"

const content = document.getElementById("content")

export default function addToDOM() {
    // call functions
    addTab()
    addHome()
    addMenu()
    addContact()
    addFooter()
}

// create tab links
function addTab() {
    const tabContainer = document.createElement("div")
    content.appendChild(tabContainer)
    tabContainer.className += "tab"

    const list = addElements("button", 3, ["Home", "Menu", "Contact"])

    appendElements(list, tabContainer)
    // set home tab as default
    // change this back to list[0] when done testing tab pages
    list[0].classList.add("active")
    addClass(list, "tablinks")
    addId(list, ["home", "menu", "contact"])
    handleClick()

    // add and remove active class so current content shows up when tab clicked
    function handleClick() {
        list.forEach((button) => {
            button.addEventListener("click", (button) => {
                list.forEach((button) => button.classList.remove("active"))
                button.target.classList.add("active")

                // remove active from all tabcontents
                const tabcontents = document.querySelectorAll(".tabcontent")
                tabcontents.forEach((element) =>
                    element.classList.remove("active")
                )

                // add active to tabcontent matching button id
                const id = button.target.id
                const target = document.querySelector(`.${id}`)
                target.classList.add("active")
            })
        })
    }
}

// create home body
function addHome() {
    const home = document.createElement("div")
    home.textContent += "Main Content Goes Here"
    home.classList.add("home", "tabcontent", "active")
    home.classList.add("home", "tabcontent")

    content.append(home)
    restaurantInfo()

    // create header and description for restaurant
    function restaurantInfo() {
        const div = document.createElement("div")
        const nameElement = document.createElement("h1")
        const descriptionElement = document.createElement("p")

        div.append(nameElement, descriptionElement)
        div.classList.add("description")
        descriptionElement.textContent += description
        nameElement.textContent += name
        home.append(div)
    }
}

// create footer
function addFooter() {
    const footer = document.createElement("div")
    footer.textContent += "Footer"
    footer.className += "footer"
    content.appendChild(footer)
}

/**
 * addImage.
 * returns an image element
 * @param {string} source is the path to image
 * #param {string} className is the optional class for element
 */
function addImage(source, className) {
    const img = document.createElement("img")
    img.src = source
    if (className !== "") img.classList.add(className)
    return img
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
    const list = []

    for (let i = 0; i < number; i++) {
        const element = document.createElement(type)

        if (arr != undefined) {
            element.textContent += arr[i]
        }
        list.push(element)
    }
    return list
}

/**
 * appendElements.
 *
 * @param {array} list of elements
 * @param {Object} parent to append to
 */
function appendElements(list, parent) {
    list.forEach((element) => parent.appendChild(element))
}

/**
 * addClass.
 *
 * @param {array} list of elements
 * @param {string} name of class
 */
function addClass(list, name) {
    list.forEach((element) => element.classList.add("tablinks"))
}

function addId(list, nameList) {
    if (list.length != nameList.length)
        console.log("Error: list are not the same size.")
    for (let i = 0; i < list.length; i++) {
        list[i].setAttribute("id", nameList[i])
    }
}

const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut tortor imperdiet, porttitor arcu a, fermentum nisl. Fusce eu odio a dolor accumsan tincidunt vel ac nibh. Phasellus interdum luctus nisi, a venenatis nibh iaculis et. Maecenas imperdiet mi sit amet molestie convallis. Proin sed suscipit enim, in posuere tellus. Morbi pharetra mauris quis dolor iaculis tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas non finibus urna, ornare ultrices nunc. Suspendisse diam lectus, eleifend nec luctus eu, convallis eu ligula."

const name = "Lorem Ipsum"
