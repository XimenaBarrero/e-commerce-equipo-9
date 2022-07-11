
import data from "../database/index.js"

/*Buscar elemento en el DOM*/
const productosContenedor = document.getElementById
("productosContenedor")

/*Pintamos los productos en el DOM*/
function pintarProductos () {
/*creamos variable para almacenar despues los productos*/
let html = ""
/*Recorremos el array de productos*/
for (const {id, nombre, imagen, precio, cantidad} of productos)
for (let producto de productos){
   html += `
   <div>
       <img src="${producto.imagen}" alt="">
           <div>
               <h2>titulo - $ 36.00</h2>
               <p>cantidad: 20</p>
           <div>
               <button type="button" data-id="1">Agregar</button>
           </div>
   </div>
}
}

pintarProductos()