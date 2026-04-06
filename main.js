async function loadProducts() {
    const container = document.getElementById("productContainer");

    try {
        const response = await fetch("https://dummyjson.com/products")
        const data = await response.json();
        const products = data.products;


        products.forEach(product => {
            const col = document.createElement("div");
            col.className = "col-6 col-sm-6 col-md-4 col-lg-3";

            col.innerHTML = `
            <div class="card h-100">
               <img src="${product.thumbnail}" class="card-img-top product-img" alt="${product.title}">
               <div class="card-body text-center">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">${product.price}$</p>
                  <a href="OrderPage.html?id=${product.id}" class="btn btn-dark">Buy</a>
                </div>
            </div>
            `;
            container.appendChild(col); //Detta lägger till korten på startsidan
        });
    } catch (error) {
        console.error("Something went wrong: ", error);
    }
}

loadProducts();


//Denna bör ligga i orderpage.js
document.addEventListener("DOMContentLoaded", () =>  {
    const form = document.getElementById("order-form");

    if (form){
        form.addEventListener("submit", function(e){
            e.preventDefault();
            const modal = new bootstrap.Modal(document.getElementById("orderModal"));
            modal.show();
        });
    }
});