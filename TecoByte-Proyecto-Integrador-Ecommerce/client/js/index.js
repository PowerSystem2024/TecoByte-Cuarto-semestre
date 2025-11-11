// Contenedor de productos
const shopContent = document.getElementById("shopContent");

// Botones de filtro
const filterButtons = document.querySelectorAll(".filter-btn");

// Carrito (sigue siendo global para que cart.js pueda acceder a él)
const cart = []; 

/**
 * --- NUEVA FUNCIÓN ---
 * Esta función se encarga de renderizar los productos.
 * Acepta un array de productos (los filtrados) para mostrar.
 */
function renderProductos(productosAMostrar) {
    
    // 1. Limpiamos el contenedor
    shopContent.innerHTML = "";

    // 2. Recorremos solo los productos que queremos mostrar
    productosAMostrar.forEach((producto) => {
        const content = document.createElement("div");
        // Tu CSS en style.css (.cart-products > div) aplica los estilos
        // a este 'div' sin necesidad de una clase específica.

        content.innerHTML = `
        <img src="${producto.img}">
        <h3>${producto.productName}</h3>
        <p class="price">${producto.price} $</p>
        `;
        shopContent.append(content);

        const buyButton = document.createElement("button");
        buyButton.innerText = "Comprar";
        content.append(buyButton);

        // --- Lógica del botón "Comprar" (idéntica a la que tenías) ---
        buyButton.addEventListener("click", () => {
            const repeat = cart.some((repeatProduct) => repeatProduct.id === producto.id);
            
            if (repeat) {
                cart.map((prod) => {
                    if (prod.id === producto.id) {
                        prod.quanty++;
                        displayCartCounter(); // Llama a la función de cart.js
                    }
                });
            } else {
                cart.push({
                    id: producto.id,
                    productName: producto.productName,
                    price: producto.price,
                    quanty: producto.quanty,
                    img: producto.img,
                });
                displayCartCounter(); // Llama a la función de cart.js
            }
        });
    });
}

/**
 * --- NUEVA LÓGICA DE FILTRADO ---
 * Añadimos un listener a cada botón de filtro.
 */
filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        
        // Obtenemos la categoría del data-filter (ej: "all", "skin", "textura")
        const category = e.target.dataset.filter;

        // 1. Actualizar la clase "active" en los botones
        filterButtons.forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");

        // 2. Filtramos los productos
        let productosFiltrados;
        if (category === "all") {
            productosFiltrados = productos; // El array completo de products.js
        } else {
            productosFiltrados = productos.filter(p => p.category === category);
        }

        // 3. Volvemos a renderizar la tienda solo con los productos filtrados
        renderProductos(productosFiltrados);
    });
});

// --- CARGA INICIAL ---
// Al cargar la página por primera vez, mostramos TODOS los productos.
renderProductos(productos);