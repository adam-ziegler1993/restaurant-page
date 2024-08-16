export function table (){
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear the content

    const tableSection = document.createElement('section');
    tableSection.className = 'table-section';

    const tableHeading = document.createElement('h1');
    tableHeading.textContent = 'Reserve a table';

    tableSection.appendChild(tableHeading);

    // Add categories and items as needed, similar to the previous examples
    // ...

    contentDiv.appendChild(tableSection);
}