let baseURL = "http://localhost:3001"
let baseData;

let row = document.querySelector(".row");

async function getData() {
    let data = await axios.get(`${baseURL}/products`);
    console.log(data)
    baseData = data.data;
    console.log(baseData);
    showProducts(); 
}

function showProducts() {
    row.innerHTML = ''; 
    baseData.forEach(({ brand, model, operatingSystem, year, price }) => {
        row.innerHTML += `
            <div class="card" style="width: 18rem; m-3">
                <img src="https://irshad.az/cdn-cgi/image/width=540,height=550/storage/products/91631/xiaomi-redmi-note-13-pro-3.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${brand} ${model}</h5> <!-- Corrected this part -->
                    <p class="card-text">Operating System: ${operatingSystem}, Year: ${year}, Price: $${price}</p>
                    <a href="#" class="btn btn-primary">Details</a>
                    <a href="#" class="btn btn-danger" ><i class="fa-solid fa-heart"></i></a>
                    <a href="#" class="btn btn-warning" "><i class="fa-solid fa-basket-shopping"></i></a>
                </div>
            </div>
        `;
    });
}

// function getDetails(){

// }


getData(); 
