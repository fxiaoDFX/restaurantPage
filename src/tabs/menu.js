const content = document.getElementById('content');

export default function addToDOM() {
    addMenu();
}

function addMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu', 'tabcontent');
    menuContainer.textContent += 'menu placeholder';
    content.appendChild(menuContainer);
}
