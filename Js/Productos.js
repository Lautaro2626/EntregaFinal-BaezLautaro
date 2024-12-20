let productos = [];
const productsPerPage = 3; 
let currentPage = 1;

document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        loadProducts(currentPage);
    }
});

document.getElementById("nextPage").addEventListener("click", () => {
    if (currentPage < Math.ceil(productos.length / productsPerPage)) {
        currentPage++;
        loadProducts(currentPage);
    }
});

document.getElementById("page1").addEventListener("click", () => {
    currentPage = 1;
    loadProducts(currentPage);
});

document.getElementById("page2").addEventListener("click", () => {
    currentPage = 2;
    loadProducts(currentPage);
});

document.getElementById("page3").addEventListener("click", () => {
    currentPage = 3;
    loadProducts(currentPage);
});

fetch('./productos.json')
    .then(response => response.json())
    .then(data => {
        productos = data;
        loadProducts(currentPage);
    })
    .catch(error => console.error('Error al cargar los productos:', error));

function loadProducts(page) {
    const start = (page - 1) * productsPerPage;
    const end = page * productsPerPage;
    const productsToShow = productos.slice(start, end);

    const productosSection = document.getElementById("productosSection");
    productosSection.innerHTML = ""; 

    productsToShow.forEach(product => {
        const productCard = `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100 bg-dark">
                    <img src="${product.image}" class="card-img-top product-image" alt="${product.title}" data-title="${product.title}" data-description="${product.description}" data-price="${product.price}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p><strong>Precio: $${product.price}</strong></p>
                        <button class="btn btn-light btn-sm" 
    onclick="agregarAlCarrito('${product.title}', '${product.image}', '${product.description}', ${product.price})">
    Añadir al carrito
</button>
                    </div>
                </div>
            </div>
        `;
        productosSection.insertAdjacentHTML("beforeend", productCard);
    });

    const productImages = document.querySelectorAll(".product-image");
    productImages.forEach(img => {
        img.addEventListener("click", function () {
            const title = img.getAttribute("data-title");
            const description = img.getAttribute("data-description");
            const price = img.getAttribute("data-price");
            const image = img.getAttribute("src");

            document.getElementById("modalTitle").innerText = title;
            document.getElementById("modalDescription").innerText = description;
            document.getElementById("modalPrice").innerText = price;
            document.getElementById("modalImage").src = image;

            const productModal = new bootstrap.Modal(document.getElementById("productModal"));
            productModal.show();
        });
    });
}
