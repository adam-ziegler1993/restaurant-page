export function menu() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear the content

    // Create the menu section
    const menuSection = document.createElement('section');
    menuSection.className = 'menu-section';

    // Create and append the main heading
    const menuHeading = document.createElement('h1');
    menuHeading.textContent = 'Menu';
    menuSection.appendChild(menuHeading);

    // Create the menu categories
    const categories = [
        {
            title: 'Appetizers',
            items: [
                {
                    name: 'Hummus',
                    description: 'A smooth blend of chickpeas, tahini, and lemon juice served with pita bread.',
                    imgSrc: 'appetizer1.jpg',
                    imgAlt: 'Hummus',
                },
                {
                    name: 'Stuffed Grape Leaves',
                    description: 'Tender grape leaves stuffed with a flavorful mixture of rice, herbs, and spices.',
                    imgSrc: 'appetizer2.jpg',
                    imgAlt: 'Stuffed Grape Leaves',
                },
                {
                    name: 'Spanakopita',
                    description: 'A savory pastry filled with spinach, feta cheese, and fresh herbs, wrapped in crispy filo dough.',
                    imgSrc: 'appetizer3.jpg',
                    imgAlt: 'Spanakopita',
                },
            ],
        },
        {
            title: 'Entrées',
            items: [
                {
                    name: 'Grilled Lamb Chops',
                    description: 'Tender lamb chops marinated with Mediterranean spices and grilled to perfection.',
                    imgSrc: 'entree1.jpg',
                    imgAlt: 'Grilled Lamb Chops',
                },
                {
                    name: 'Chicken Souvlaki',
                    description: 'Skewers of marinated chicken, grilled to perfection, served with tzatziki sauce and pita bread.',
                    imgSrc: 'entree2.jpg',
                    imgAlt: 'Chicken Souvlaki',
                },
                {
                    name: 'Moussaka',
                    description: 'A classic Mediterranean casserole layered with eggplant, ground beef, and béchamel sauce.',
                    imgSrc: 'entree3.jpg',
                    imgAlt: 'Moussaka',
                },
            ],
        },
        {
            title: 'Desserts',
            items: [
                {
                    name: 'Baklava',
                    description: 'A rich, sweet pastry made of layers of filo filled with chopped nuts and honey.',
                    imgSrc: 'dessert1.jpg',
                    imgAlt: 'Baklava',
                },
                {
                    name: 'Galaktoboureko',
                    description: 'A rich custard dessert encased in layers of crispy filo pastry, soaked in a light citrus syrup.',
                    imgSrc: 'dessert2.jpg',
                    imgAlt: 'Galaktoboureko',
                },
                {
                    name: 'Kataifi',
                    description: 'Shredded filo dough rolled with a nut filling and drizzled with sweet honey syrup.',
                    imgSrc: 'dessert3.jpg',
                    imgAlt: 'Kataifi',
                },
            ],
        },
    ];

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'menu-category';

        const categoryHeading = document.createElement('h2');
        categoryHeading.textContent = category.title;
        categoryDiv.appendChild(categoryHeading);

        const itemsDiv = document.createElement('div');
        itemsDiv.className = 'menu-items';

        category.items.forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.className = 'menu-item';

            const img = document.createElement('img');
            img.src = item.imgSrc;
            img.alt = item.imgAlt;
            menuItemDiv.appendChild(img);

            const itemInfoDiv = document.createElement('div');
            itemInfoDiv.className = 'menu-item-info';

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
            itemInfoDiv.appendChild(itemName);

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            itemInfoDiv.appendChild(itemDescription);

            menuItemDiv.appendChild(itemInfoDiv);
            itemsDiv.appendChild(menuItemDiv);
        });

        categoryDiv.appendChild(itemsDiv);
        menuSection.appendChild(categoryDiv);
    });

    contentDiv.appendChild(menuSection);
}
