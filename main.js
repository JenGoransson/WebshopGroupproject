//Updaterade koden för att göra det enklare och säkrare när man ska placera en order
//genom att lägga logiken i en if statement.

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