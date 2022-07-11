//data

const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: './assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: './assets/images/featured2.png', 
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: './assets/images/featured3.png',
      category: 'sweatshirts',
      quantity: 20
    },
    
]
//variables
let cart =[]
//nodos
let header= document.querySelector("header");
let closeButton = document.querySelector(".cart-close");
let cartButton = document.querySelector(".count");
let showCart = document.querySelector(".shopping-cart");
let cartProducts = document.querySelector(".cart-list");
let cartCounter = document.querySelector(".cart-count");
let contentCards = document.querySelector(".content-cards");



//listeners
document.addEventListener("DOMContentLoaded", ()=>{
    showCards();
});

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 65){
        header.classList.add("scroll-header")
    }else{
        header.classList.remove("scroll-header")
    }
});

function showCards(){
    let fragmentHTML =""

    items.map(item=>{
        fragmentHTML+=`
        <div class="cards">
            <img src=${item.image} alt="1">
            <div class="content-icon" data-id = ${item.id}>
                    <i class='bx bx-plus bx-lg'></i>
            </div>        
            <div class="content-text">
                <span>$${item.price}<span>| Stock: ${item.quantity}</span></span>
                <p>${item.name}</p>
            </div>
        </div> 
        `
    })
    contentCards.innerHTML = fragmentHTML;

    let addingButton = document.querySelector(".content-icon");
    addingButton.map(button =>{
        button.addEventListener("click", e=>{
            let id = parseInt(button.getAttribute("data-id"))
            let product = items.find(item =>{
                return item.id === id
            })
            addProduct(product);
        })
    });
};

cartButton.addEventListener("click", ()=>{
    showCart.classList.add("show")
});

closeButton.addEventListener("click", ()=>{
    showCart.classList.remove("show")
});

//funciones



function addProduct(product){
    let findProduct = cart.find( item => item.id === producto.id )
    findProduct = "actualizacion"

    if( findProduct ){
        let stock = cart[findProduct.index].quantity
        let quantitySelected = cart[findProduct.index].quantitySelected

        if( stock > quantitySelected ){
            cart[findProduct.index].quantitySelected += 1
        }else{
           console.log("no hay stock disponible") 
        }

    }else{
        product.quantitySelected = 1
        product.index = cart.length


        cart.push(product)
    }

    console.log(cart)
    //mostrarProductosCart()
}