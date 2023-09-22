document.addEventListener("DOMContentLoaded", function () {
    // Handle filtering by category
    const categorySelect = document.getElementById("category");
    categorySelect.addEventListener("change", function () {
        const selectedCategory = categorySelect.value;
        const products = document.querySelectorAll(".product");

        products.forEach((product) => {
            const productCategory = product.getAttribute("data-category");
            if (selectedCategory === "all" || selectedCategory === productCategory) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });

    // Handle sorting
    const sortSelect = document.getElementById("sort");
    sortSelect.addEventListener("change", function () {
        const selectedSort = sortSelect.value;
        const products = Array.from(document.querySelectorAll(".product"));

        products.sort((a, b) => {
            if (selectedSort === "price-asc") {
                return parseFloat(a.getAttribute("data-price")) - parseFloat(b.getAttribute("data-price"));
            } else if (selectedSort === "price-desc") {
                return parseFloat(b.getAttribute("data-price")) - parseFloat(a.getAttribute("data-price"));
            } else if (selectedSort === "name-asc") {
                return a.querySelector("h3").textContent.localeCompare(b.querySelector("h3").textContent);
            } else {
                return b.querySelector("h3").textContent.localeCompare(a.querySelector("h3").textContent);
            }
        });

        const productContainer = document.querySelector(".products");
        productContainer.innerHTML = "";

        products.forEach((product) => {
            productContainer.appendChild(product);
        });
    });
});
