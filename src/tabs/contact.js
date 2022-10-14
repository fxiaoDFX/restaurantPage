const content = document.getElementById('content');

export default function addToDOM() {
    addContact();
}

function addContact() {
    const contactContainer = document.createElement('div');
   // contactContainer.classList.add('contact', 'tabcontent');
    contactContainer.classList.add('contact', 'tabcontent', 'active');
    contactContainer.textContent += 'contact placeholder';
    content.appendChild(contactContainer);
    title();
    address();
    phone();

    function title() {
        const title = document.createElement('h1');
        title.textContent = 'Contact Us';
        contactContainer.appendChild(title);
    }

    function address() {
        const address = document.createElement('p');
        address.classList.add('address');
        address.innerHTML = `RestaurantName<br>
                            123 Mood St<br>
                            Callisto, JP 60606`;
        contactContainer.appendChild(address);
    }

    function phone() {
        const phone = document.createElement('p');
        phone.classList.add('phone');
        phone.textContent = '111-222-3333'
        contactContainer.appendChild(phone);
    }
}


