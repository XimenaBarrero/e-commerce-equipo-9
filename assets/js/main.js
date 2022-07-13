import showProducts from './components/productos.js';

//nodos
let closeButton = document.querySelector(".cart-close");
let cartButton = document.querySelector(".count");
let showCart = document.querySelector(".shopping-cart");


document.addEventListener("DOMContentLoaded", () =>{
    //función para mostrar las cards en página principal
    showProducts()

    //función para abrir y cerrar carrito
    cartButton.addEventListener("click", ()=>{
        showCart.classList.add("show")
    });
    
    closeButton.addEventListener("click", ()=>{
        showCart.classList.remove("show")
    });
    
})