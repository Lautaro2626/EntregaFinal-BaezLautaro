let cartCount = 0;

function agregarAlCarrito(productName, productImage, productDescription, productPrice) {
    // Obtener el carrito actual desde localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificar si el producto ya está en el carrito
    let productoExistente = carrito.find(producto => producto.nombre === productName);

    if (productoExistente) {
        // Si el producto existe, incrementar su cantidad
        productoExistente.cantidad++;
    } else {
        // Si no existe, agregarlo con cantidad 1
        carrito.push({
            nombre: productName,
            imagen: productImage,
            descripcion: productDescription,
            precio: productPrice,
            cantidad: 1
        });
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el contador en el icono del carrito
    actualizarContadorCarrito();

    // Mostrar alerta de confirmación
    alert(`Producto "${productName}" añadido al carrito.`);

    console.log("Producto agregado:", productName);
}


function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contador = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    document.getElementById('cart-count').textContent = contador;
}



function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let productosHTML = '';

    carrito.forEach((producto, index) => {
        productosHTML += `
            <div class="card mb-3" style="max-width: 30em; ">
                <div class="row g-0 bg-success">
                    <div class="col-md-4">
                        <img src="${producto.imagen}" class="img-fluid rounded-start" alt="${producto.nombre}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <div class="d-flex align-items-center">
                                <!-- Botones para modificar cantidad -->
                                <button class="btn btn-outline-secondary btn-sm me-2" onclick="disminuirCantidad(${index})">-</button>
                                <span class="me-2">${producto.cantidad}</span>
                                <button class="btn btn-outline-secondary btn-sm" onclick="incrementarCantidad(${index})">+</button>
                            </div>
                            <p class="card-text mt-2">Precio: $${producto.precio}</p>
                            <p class="card-text">Total: $${producto.precio * producto.cantidad}</p>
                            <!-- Botón de eliminación -->
                            <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${index})">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById('productosCarrito').innerHTML = productosHTML;
}

function eliminarDelCarrito(index) {
    // Obtener el carrito actual desde localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Eliminar el producto del carrito
    carrito.splice(index, 1);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el contador en el icono del carrito
    actualizarContadorCarrito();

    // Volver a mostrar el carrito actualizado
    mostrarCarrito();
}

// Función para incrementar la cantidad de un producto
function incrementarCantidad(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito[index].cantidad++; // Incrementa la cantidad
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guarda el carrito actualizado
    mostrarCarrito(); // Actualiza la vista del carrito
    actualizarContadorCarrito(); // Actualiza el contador en el ícono
}

// Función para disminuir la cantidad de un producto
function disminuirCantidad(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--; // Disminuye la cantidad si es mayor a 1
    } else {
        carrito.splice(index, 1); // Si llega a 0, elimina el producto
    }
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guarda el carrito actualizado
    mostrarCarrito(); // Actualiza la vista del carrito
    actualizarContadorCarrito(); // Actualiza el contador en el ícono
}

// Llamadas a las funciones al cargar la página
window.onload = function() {
    mostrarCarrito();  // Muestra el carrito al cargar la página
    actualizarContadorCarrito();  // Actualiza el contador del carrito
};
