export function about() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear the content

    // About section
    const aboutSection = document.createElement('section');
    aboutSection.className = 'about-section';

    // Create & append main heading
    const aboutHeading = document.createElement('h1');
    aboutHeading.textContent = 'About Us';
    aboutSection.appendChild(aboutHeading);

    // About content
    const aboutContent = document.createElement('div');
    aboutContent.className = 'about-content';

    // Content
    const aboutText = document.createElement('p');
    aboutText.textContent = `Mediterranean Muse is a celebration of Mediterranean flavors, bringing 
    together the freshest ingredients and traditional recipes from across the Mediterranean region. 
    Our restaurant is dedicated to offering a unique dining experience that transports you to the sun-kissed shores of the Mediterranean.`;

    const missionText = document.createElement('p');
    missionText.textContent = `Our mission is to provide a warm and inviting atmosphere where guests can enjoy authentic 
    Mediterranean cuisine, crafted with passion and care. Whether you're here for a casual lunch or a 
    special dinner, we aim to make every visit memorable.`;

    // Image element
    const aboutImage = document.createElement('img');
    aboutImage.src = 'about.jpg'; // Replace!!
    aboutImage.alt = 'About Mediterranean Muse';

    // Append text & image to content
    aboutContent.appendChild(aboutText);
    aboutContent.appendChild(missionText);
    aboutContent.appendChild(aboutImage);

    // Append the about content to the about section
    aboutSection.appendChild(aboutContent);

    contentDiv.appendChild(aboutSection);
}
