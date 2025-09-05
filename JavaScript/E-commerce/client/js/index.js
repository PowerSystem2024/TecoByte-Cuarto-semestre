const shopContent = document.getElementById("shopContent");
const cart = [];// este es nuestro carrito, un array vacio

productos.forEach((producto) => {
    const content = document.createElement("div");
    content.className = "";
    content.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.productName}</h3>
    <p class="price">${producto.price} $</p>
    `;
    shopContent.append(content);

    const buyButton = document.createElement("button");
    buyButton.innerText = "Comprar";

    content.append(buyButton);

    buyButton.addEventListener("click", () => {
        const repeat = cart.some((repeatProduct) => repeatProduct.id === producto.id);
        if(repeat){
            cart.map((prod) => {
                if(prod.id === producto.id){
                    prod.quanty++;
                    displayCartCounter();
                }
            });
        }else{cart.push({
            id: producto.id,
            productName: producto.productName,
            price: producto.price,
            quanty: producto.quanty,
            img: producto.img,
        });
        displayCartCounter();
        console.log(cart);

        }
        
        
       
    })


});