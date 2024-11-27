const apiUrl = 'http://localhost:3001/products';


async function fetchCategories() {
    const response = await axios.get(apiUrl);
    const categories = response.data;
    renderCategories(categories);
}


function renderCategories(categories) {
    const container = document.getElementById('category-list');
    container.innerHTML = '';

    categories.forEach((data) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-start';
        listItem.innerHTML = `
            <div class="ms-2 me-auto">
                <div class="fw-bold">${data.name}</div>
                ${data.description}
            </div>
            <button class="btn btn-warning" data-id="${data.id}" data-name="${data.name}" data-description="${data.description}">Edit</button>
            <button class="btn btn-primary" data-id="${data.id}" data-name="${data.name}" data-description="${data.description}">Details</button>
            <button class="btn btn-danger" data-id="${data.id}">Delete</button>
        `;
        container.appendChild(listItem);
    });

  
    document.querySelectorAll('.btn-warning').forEach((btn) => {
        btn.addEventListener('click', async (e) => {
            const id = e.target.getAttribute('data-id');
            const currentName = e.target.getAttribute('data-name');
            const currentDescription = e.target.getAttribute('data-description');

            const newName = prompt('Yeni ad:', currentName);
            const newDescription = prompt('yeni desc yazin:', currentDescription);

            if (newName && newDescription) {
                await axios.patch(`${apiUrl}/${id}`, { name: newName, description: newDescription });
                fetchCategories();
            }
        });
    });

    document.querySelectorAll('.btn-primary').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            const name = e.target.getAttribute('data-name');
            const description = e.target.getAttribute('data-description');

            localStorage.setItem('categoryDetails', JSON.stringify({ id, name, description }));
            window.location.href = './details.html';
        });
    });

    document.querySelectorAll('.btn-danger').forEach((btn) => {
        btn.addEventListener('click', async (e) => {
            const id = e.target.getAttribute('data-id');
            const confirmDelete = confirm('data silinecek!ok?');
            if (confirmDelete) {
                await axios.delete(`${apiUrl}/${id}`);
                fetchCategories();
            }
        });
    });
}


async function addCategory(name, description) {
    await axios.post(apiUrl, { name, description });
    fetchCategories();
}

document.getElementById('category-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const descriptionInput = document.getElementById('description');

    const name = nameInput.value.trim();
    const description = descriptionInput.value.trim();

    if (name && description) {
        addCategory(name, description);
        nameInput.value = '';
        descriptionInput.value = '';
    } else {
        alert('name ve desc elave edin');
    }
});

fetchCategories();