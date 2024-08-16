export function contact() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear the content

    // Create the contact section
    const contactSection = document.createElement('section');
    contactSection.className = 'contact-section';

    // Create and append the main heading
    const contactHeading = document.createElement('h1');
    contactHeading.textContent = 'Contact Us';
    contactSection.appendChild(contactHeading);

    // Create the contact form
    const contactForm = document.createElement('form');
    contactForm.className = 'contact-form';

    // Name field
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.required = true;

    // Email field
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.required = true;

    // Message field
    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message:';
    const messageTextarea = document.createElement('textarea');
    messageTextarea.name = 'message';
    messageTextarea.required = true;

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Send Message';

    // Append form fields to the form
    contactForm.appendChild(nameLabel);
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(messageLabel);
    contactForm.appendChild(messageTextarea);
    contactForm.appendChild(submitButton);

    // Append the form to the contact section
    contactSection.appendChild(contactForm);

    // Optionally, add contact information
    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';
    contactInfo.innerHTML = `
        <h2>Our Location</h2>
        <p>123 Mediterranean St, Flavor Town, FT 56789</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@mediterraneanmuse.com</p>
    `;

    contactSection.appendChild(contactInfo);

    contentDiv.appendChild(contactSection);
}
