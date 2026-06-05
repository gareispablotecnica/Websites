import {Productos} from './db.js'

Productos.forEach((i) =>{
    let contenedor=document.querySelector('.productoscontenedor')
    contenedor.innerHTML=""

    let divs=document.createElement('div')
    divs.className="Cards"

    divs.innerHTML=
    `
        <h1>Codigo:${i.Codigo}</h1>
        <h2>${i.Nombre}</h2>
        <h3>$ ${i.Precio}</h3>
        <h4>${i.Stock}</h4>
        <img src="${i.img}" alt="">
    `
   contenedor.appendChild(divs)

})