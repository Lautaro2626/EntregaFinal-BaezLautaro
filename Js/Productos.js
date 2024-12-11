const productos = [
        { title: "The Lady Of The Lake", image: "./Imagenes/image 19.png", description: "Geralt y Ciri enfrentan magia y peligros en su búsqueda de destino.", price: 20 },
        { title: "Alice In Wonderland", image: "./Imagenes/image 20.png", description: "Alicia se adentra en un mundo surrealista lleno de personajes extravagantes.", price: 15 },
        { title: "Cinderela", image: "./Imagenes/libro (1).png", description: "Una joven maltratada encuentra la felicidad gracias a la magia.", price: 18 },
        { title: "Peter Pan", image: "./Imagenes/libro (2).png", description: "El niño que nunca crece lleva a los niños a la isla de Nunca Jamás.", price: 22 },
        { title: "Hamlet", image: "./Imagenes/libro (3).png", description: "Un príncipe busca vengar la muerte de su padre mientras enfrenta su propia desesperación.", price: 25 },
        { title: "Moby dick", image: "./Imagenes/libro (4).png", description: "El capitán Ahab persigue obsesivamente a la ballena blanca.", price: 30 },
        { title: "Macbeth", image: "./Imagenes/libro (7).png", description: "La ambición de Macbeth lo lleva a la destrucción y el caos.", price: 17 },
        { title: "Emma", image: "./Imagenes/libro (8).png", description: "Una joven malinterpreta los sentimientos de los demás en busca del amor.", price: 19 }
];

const productsPerPage = 3; 
let currentPage = 1;

document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        loadProducts(currentPage);
    }
});

document.getElementById("nextPage").addEventListener("click", () => {
    if (currentPage < 3) {
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

loadProducts(currentPage);

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

    // Agregar evento a las imágenes para mostrar el modal
    const productImages = document.querySelectorAll(".product-image");
    productImages.forEach(img => {
        img.addEventListener("click", function () {
            const title = this.getAttribute("data-title");
            const description = this.getAttribute("data-description");
            const price = this.getAttribute("data-price");
            const image = this.getAttribute("src");

            document.getElementById("modalTitle").textContent = title;
            document.getElementById("modalDescription").textContent = description;
            document.getElementById("modalPrice").textContent = price;
            document.getElementById("modalImage").setAttribute("src", image);

            const productModal = new bootstrap.Modal(document.getElementById("productModal"));
            productModal.show();
        });
    });
}
