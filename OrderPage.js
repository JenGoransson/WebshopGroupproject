const productId = new URLSearchParams(window.location.search).get("id");

const productName = document.getElementById("product-name");
const productImg = document.getElementById("product-img");
const productDescription = document.getElementById("product-description");
const productPrice = document.getElementById("product-price");

async function loadProduct() {
    if(!productId){
        productName.textContent = "Product not found.";
        return;
    }
    try{
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        if(!response.ok)throw new Error("API error");

        const product = await response.json();

        productImg.src = product.thumbnail;
        productName.textContent = product.title;
        productDescription.textContent = product.description;
        productPrice.textContent = `Price: ${product.price} $`;
    }catch (error){
        productName.textContent = "Error loading product";
        console.error(error);
    }
}
loadProduct();
const form = document.getElementById("order-form");

function setInvalid(input, condition){
    if(condition){
        input.classList.add("is-invalid");
        return false
    }
    input.classList.remove("is-invalid");
    return true;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstname");
    const lastName = document.getElementById("lastname");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const postal = document.getElementById("postal");
    const city = document.getElementById("city");
    const phone = document.getElementById("phone");

    let isValid = true;

    isValid = setInvalid(firstName, firstName.value.trim().length < 2 || firstName.value.length > 50) && isValid;
    isValid = setInvalid(lastName, lastName.value.trim().length < 2 || lastName.value.length > 50) && isValid;
    isValid = setInvalid(address, address.value.trim().length < 2 || address.value.length > 50) && isValid;
    isValid = setInvalid(city, city.value.trim().length < 2 || city.value.length > 20) && isValid;

    isValid = setInvalid(postal, !/^\d{5}$/.test(postal.value)) && isValid;
    isValid = setInvalid(email, !email.value.includes("@") || email.value.length > 50) && isValid;

    const phoneRegex = /^[0-9()\-\s]+$/;
    isValid = setInvalid(phone, !phoneRegex.test(phone.value) || phone.value.length > 20) && isValid;

    if (isValid) {
        const modal = new bootstrap.Modal(document.getElementById("orderModal"));
        modal.show();
        form.reset();
        form.querySelectorAll(".is-invalid").forEach(el =>el.classList.remove("is-invalid"));

    }
});



