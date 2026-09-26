import { DBProductos } from './db.js'

const contenedor = document.querySelector('.productoscontenedor')

function MostrarProductos(parametro) {
    contenedor.innerHTML = ''

    if (parametro.lenght === 0) {
        contenedor.innerHTML = `<p> Producto No Encontrado </p>`
    }
    parametro.forEach(i => {
        let div = document.createElement('div')
        div.className = 'Cards'
        div.innerHTML=
        `
            <div class="Cards">
                <div class="Cards__img">
                    <img src="${i.Imagen}" alt="">
                </div>
                <div class="Cards__body">
                    <span class="Cards__tag">Codigo:${i.Codigo}</span>
                    <h2 class="Cards__titulo">${i.Nombre}</h2>
                    <p class="Cards__precio">$${i.Precio}</p>
                    <div class="Cards__pie">
                        <span class="Cards__stock">Stock:${i.Stock}</span>
                        <span class="Cards__ver">Ver Producto</span>
                    </div>
                </div>
            </div>
        `
        contenedor.appendChild(div)

    });

}

MostrarProductos(DBProductos)

const nombre= document.getElementById('Nombre').value.toLowerCase()
function Filtrar(parametro){

}