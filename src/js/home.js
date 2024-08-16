export function home() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear the content

    // Hero section
    const heroSection = document.createElement('section');
    heroSection.className = 'hero-section';

    // Hero content div
    const heroContent = document.createElement('div');
    heroContent.className = 'hero-content';

    // Hero heading
    const heroHeading = document.createElement('h1');
    heroHeading.textContent = 'Welcome to Mediterranean Muse';

    // Hero paragraph
    const heroParagraph = document.createElement('p');
    heroParagraph.textContent = 'Experience the true flavors of the Mediterranean.';

    // CTA button
    const ctaButton = document.createElement('a');
    ctaButton.href = '#table';
    ctaButton.className = 'cta-button';
    ctaButton.textContent = 'Reserve a Table';

    // Append heading, paragraph, and button to hero content
    heroContent.appendChild(heroHeading);
    heroContent.appendChild(heroParagraph);
    heroContent.appendChild(ctaButton);

    // Hero image div
    const heroImageDiv = document.createElement('div');
    heroImageDiv.id = 'hero-img';

    // Hero image
    const heroImage = document.createElement('img');
    heroImage.src = './food.png';
    heroImage.alt = 'food';

    // Append the image to the hero image div
    heroImageDiv.appendChild(heroImage);

    // Append hero content and hero image div to hero section
    heroSection.appendChild(heroContent);
    heroSection.appendChild(heroImageDiv);

    // Append the hero section to the content div
    contentDiv.appendChild(heroSection);
}
