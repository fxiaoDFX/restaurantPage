const content = document.getElementById('content');

export default function addToDOM() {
    addContact();
}

function addContact() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact', 'tabcontent');
    contactContainer.textContent += 'contact placeholder';
    content.appendChild(contactContainer);
}
