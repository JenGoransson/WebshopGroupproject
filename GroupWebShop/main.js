document.getElementById("order-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const modal = new bootstrap.Modal(document.getElementById("orderModal"));
    modal.show();
});

