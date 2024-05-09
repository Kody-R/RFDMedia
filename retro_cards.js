document.addEventListener("DOMContentLoaded", function() {
    loadXML('C:/Users/kodyr/OneDrive/Desktop/pictures/rookie_award.xml')
        .then(data => {
            const container = document.getElementById('cardContainer');
            parseXML(data, container);
        })
        .catch(error => console.error('Error loading the XML file:', error));
});

function loadXML(filePath) {
    return fetch(filePath)
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"));
}

function parseXML(xmlData, container) {
    const elements = xmlData.getElementsByTagName('ELEMENT');
    container.innerHTML = ''; // Clear previous contents

    Array.from(elements).forEach(el => {
        const type = el.getAttribute('type');
        const x = el.getAttribute('x');
        const y = el.getAttribute('y');
        const width = el.getAttribute('width');
        const height = el.getAttribute('height');
        const content = el.getAttribute('content');

        if (type === 'text') {
            const textElement = document.createElement('div');
            textElement.style.position = 'absolute';
            textElement.style.left = `${x}px`;
            textElement.style.top = `${y}px`;
            textElement.style.width = `${width}px`;
            textElement.style.height = `${height}px`;
            textElement.style.color = el.getAttribute('font_color'); // Assume color is an attribute
            textElement.style.font = `${el.getAttribute('font_x_size')}px ${el.getAttribute('font_name')}`;
            textElement.innerText = content;
            container.appendChild(textElement);
        } else if (type === 'image') {
            const imageElement = document.createElement('img');
            imageElement.src = content; // Ensure path is correct
            imageElement.style.position = 'absolute';
            imageElement.style.left = `${x}px`;
            imageElement.style.top = `${y}px`;
            imageElement.style.width = `${width}px`;
            imageElement.style.height = `${height}px`;
            container.appendChild(imageElement);
        }
    });
}
