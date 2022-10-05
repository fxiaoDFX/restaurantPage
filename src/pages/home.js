const content = document.getElementById("content");

function addElement() {
    const h1 = document.createElement("h1");

    // name the heading
    h1.textContent = "Name of Restaurant";

    // add to dom
    content.appendChild(h1);
}

export default addElement;
