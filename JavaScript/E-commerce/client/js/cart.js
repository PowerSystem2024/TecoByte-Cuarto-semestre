const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("cart-counter");

const displayCart = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";
    // modal header
    
    const modalHeader = document.createElement("div");
  

    const modalClouse = document.createElement("div");
    modalClouse.innerText = "❌";
    modalClouse.className = "modal-close";
    modalHeader.append(modalClouse);

    modalClouse.addEventListener ("click", ()=>{
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    })

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Carrito.";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);


    modalContainer.append(modalHeader);
    // modal body
    if (cart.length >0){


    cart.forEach((producto) => {
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.innerHTML = `
        <div class="product">
            <img class="producto-img" src="${producto.img}"/>
            <div class="product-info">
                <h4>${producto.productName}</h4>
            </div>
            <div class="quantity">
            <span class="quantity-btn-decrease">-</span>
            <span class="quantity-input">${producto.quanty}</span>
            <span class="quantity-btn-increase">+</span>
            </div>
            <div class="price">${producto.price* producto.quanty}</div>
            <div class="delete-product">❌</div>
        </div>
        `;

        modalContainer.append(modalBody);

        const decrease = modalBody.querySelector(".quantity-btn-decrease");
        decrease.addEventListener("click", () => {
            if(producto.quanty !== 1){
            producto.quanty--;
            displayCart();
            displayCartCounter();
            }
        });
        const increase = modalBody.querySelector(".quantity-btn-increase");
        increase.addEventListener("click", () => {
            producto.quanty++;
            displayCart();
            displayCartCounter();
        });

        // delete
        const deleteBtn = modalBody.querySelector(".delete-product");

        deleteBtn.addEventListener("click", () => {
            deleteProduct(producto.id);
            
        });
    });
    // modal footer
    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);
    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
    <div class="total-price">Total: $ ${total}</div>
        <button class="btn-purchase">Comprar</button>
    `;
    modalContainer.append(modalFooter);
    }else {
        const modalText = document.createElement("h2");
        modalText.innerText = "El carrito esta vacio";
        modalText.className = "modal-body";
        modalContainer.append(modalText);

    }
    };

  cartBtn.addEventListener("click", displayCart);

  const deleteProduct = (id) => {
    const foundId = cart.findIndex((element) => element.id === id);
    console.log(foundId);
    cart.splice(foundId, 1); 
    displayCart();
    displayCartCounter();
   
    };

const displayCartCounter = () => {
  const cartLength = cart.reduce((acc, el) => acc + el.quanty, 0);
  if (cartLength > 0) {
    cartCounter.style.display = "block";
    cartCounter.innerText = cartLength;
  } else {
    cartCounter.style.display = "none";
  }
};