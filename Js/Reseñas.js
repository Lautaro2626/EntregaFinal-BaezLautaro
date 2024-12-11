document.addEventListener("DOMContentLoaded", () => {
    const reviews = [
        { name: "María García", text: "Encontré los mejores libros para mi Kindle a precios increíbles. La variedad es impresionante, desde los últimos lanzamientos hasta clásicos que siempre quise leer. Además, el proceso de compra es muy sencillo y rápido. Pude descargar mi e-book en cuestión de minutos, sin complicaciones. Definitivamente, recomiendo la plataforma a todos los que disfrutan de la lectura digital." },
        { name: "Carlos Pérez", text: "Una plataforma ideal para los amantes de los e-books. No solo tienen una enorme variedad de títulos, sino que los precios son muy competitivos. Me gusta mucho que ofrezcan descuentos y promociones constantemente. Sin duda seguiré comprando mis libros digitales aquí." },
        { name: "Laura Fernández", text: "Soy una lectora ávida y siempre estoy buscando nuevos títulos para añadir a mi colección digital. Aquí encontré las últimas novedades y también descubrí algunas joyas que no conocía. El formato e-book es ideal para llevar mis lecturas a todas partes, ya sea en mi tablet o smartphone. Me encanta la facilidad con la que puedo acceder a mis libros y lo rápido que los recibo después de la compra." },
        { name: "José Martín", text: "Lo que más me gusta de E-Books Online es la inmediatez. Además, siempre encuentro los géneros que me interesan, desde ciencia ficción hasta libros técnicos. La interfaz de la página es muy intuitiva, lo que hace que el proceso de búsqueda y compra sea rápido y sin complicaciones." },
        { name: "Sofía López", text: "He probado varias plataformas de venta de e-books, pero E-Books Online se destaca por su gran selección y excelente servicio. No solo tienen libros de autores conocidos, sino también de escritores emergentes que me han sorprendido gratamente." },
        { name: "Andrés Torres", text: "E-Books Online me ha facilitado la vida como lector digital. Su catálogo es muy completo, abarcando desde novelas hasta libros académicos que necesito para mi carrera. Me gusta mucho el sistema de recomendaciones, ya que siempre descubro títulos interesantes. La descarga es inmediata y en formatos compatibles con todos mis dispositivos. Es una excelente opción para quienes valoran la comodidad y el acceso inmediato a sus libros." },
        { name: "Luisa Morales", text: "El sistema de recomendaciones me ayudó a descubrir autores fascinantes. Nunca pensé que encontraría títulos tan únicos y enriquecedores. Estoy muy satisfecha con la experiencia y definitivamente seguiré explorando más libros aquí." },
        { name: "Miguel Rojas", text: "La plataforma tiene un catálogo increíble de libros técnicos. Como estudiante de ingeniería, siempre estoy buscando recursos actualizados, y E-Books Online tiene exactamente lo que necesito. El formato e-book es perfecto para estudiar desde cualquier lugar." },
        { name: "Ana Beltrán", text: "Siempre encuentro ofertas que se ajustan a mi presupuesto. Además, las reseñas de otros lectores me han ayudado a elegir títulos que realmente disfruto. Es una de mis plataformas favoritas para comprar libros digitales." },
        { name: "Pedro Herrera", text: "La interfaz es tan intuitiva que hasta mi abuelo pudo usarla. Es fácil buscar, comparar y comprar libros. Lo mejor es que el proceso de descarga es inmediato y no requiere ningún conocimiento técnico." },
        { name: "Gabriela Ruiz", text: "Como profesora, siempre estoy buscando material académico y libros de referencia. En E-Books Online encontré títulos que no estaban disponibles en otras plataformas. Es mi nueva fuente de confianza." },
        { name: "Fernando Castro", text: "Me encanta leer, pero no siempre tengo tiempo para ir a una librería. Con E-Books Online, puedo encontrar lo que necesito en minutos. Además, la calidad de los archivos es impecable." },
        { name: "Valeria Domínguez", text: "La posibilidad de leer libros antes de que salgan en formato físico es genial. Las preventas digitales son una excelente idea y siempre están bien organizadas." },
        { name: "Rodrigo Sánchez", text: "Descubrí esta plataforma por recomendación de un amigo y me sorprendió gratamente. Los libros de autores independientes que ofrecen son increíbles. ¡Un 10 de 10!" },
        { name: "Estela Jiménez", text: "La plataforma tiene todo lo que un lector digital necesita. Me gusta mucho que ofrecen múltiples formatos para descargar los libros. Siempre tengo mis lecturas listas en cualquier dispositivo." },
        { name: "Javier Morales", text: "El servicio al cliente es excelente. Tuve un problema con mi compra y lo resolvieron en cuestión de minutos. Además, siempre responden con amabilidad." },
        { name: "Natalia Ortega", text: "La calidad del contenido y los precios accesibles hacen que esta plataforma sea mi favorita. Siempre estoy esperando sus promociones y descuentos." },
        { name: "Rubén Álvarez", text: "El catálogo de E-Books Online es único. He encontrado libros que no están disponibles en otras tiendas digitales. Me encanta explorar las secciones de recomendaciones." },
        { name: "Claudia Vega", text: "Como lectora nocturna, aprecio mucho la opción de comprar e-books a cualquier hora. La disponibilidad inmediata de los libros hace que pueda comenzar a leer en el momento que quiera." },
        { name: "Diego Silva", text: "No solo encontré los libros que buscaba, sino que también descubrí una comunidad de lectores apasionados. Sus reseñas y recomendaciones son un gran plus." }
    ];
    

    const reviewsPerPage = 6;
    const grid = document.getElementById("reviewGrid");
    const pagination = document.getElementById("pagination");

    function renderReviews(page) {
        grid.innerHTML = "";
        const start = (page - 1) * reviewsPerPage;
        const end = start + reviewsPerPage;
        const paginatedReviews = reviews.slice(start, end);

        paginatedReviews.forEach(review => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
                <h3>${review.name}</h3>
                <p>${review.text}</p>
            `;
            grid.appendChild(div);
        });
    }

    function renderPagination() {
        pagination.innerHTML = "";
        const totalPages = Math.ceil(reviews.length / reviewsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement("li");
            li.classList.add("page-item");
            li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            li.addEventListener("click", () => {
                renderReviews(i);
                document.querySelectorAll(".page-item").forEach(item => item.classList.remove("active"));
                li.classList.add("active");
            });
            if (i === 1) li.classList.add("active");
            pagination.appendChild(li);
        }
    }

    renderReviews(1);
    renderPagination();
});
