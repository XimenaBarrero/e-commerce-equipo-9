import products  from '../database/index.js';

//nodo
const cardContent = document.querySelector('.content-cards');
console.log(cardContent)

function showProducts () {

    let html = ''
    
    for (const { id, name, image, price, quantity } of products) {
      html += `
        <article >
            <div>
                <nav class="img-article">
                    <button class="center" data-id="${id}">+</button>
                <img src="${image}" alt="product">
                </nav>
                <nav>
                    <nav>
                        <h3>$ ${price}</h3>
                        <p>| Stock: ${quantity}</p>
                    </nav>
                    <h4>${name}</h4>
                </nav>
            </div>
        </article>
      `
    }
    cardContent.innerHTML = html
  }
  
  export default showProducts