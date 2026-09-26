# Websites

Sitio web estático de una sola página con carrusel de banners, catálogo de productos en tarjetas y footer informativo.

El catálogo se genera dinámicamente a partir de los datos definidos en `scripts/db.js`: no hay productos escritos a mano en el HTML ni en los componentes.

## Características

- **Carrusel de banners** con Bootstrap (3 slides).
- **Catálogo de productos en tarjetas** generado con JavaScript a partir de `db.js`.
- **Diseño responsive** para computadora, tablet y celular.
- **Efectos hover** en tarjetas y enlaces.
- **Footer** con marca, descripción, navegación, contacto y copyright.
- **Sin build step**: HTML, CSS y JavaScript nativo.

## Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de la página |
| CSS3 | Estilos, Grid, Flexbox, transiciones y media queries |
| JavaScript (ES Modules) | Renderizado dinámico del catálogo |
| Bootstrap 5.3.8 | Carrusel, vía CDN |

## Estructura del proyecto

```
.
├── index.html            # Estructura de la página
├── css/
│   └── style.css         # Estilos del sitio
├── scripts/
│   ├── db.js             # Datos de los productos
│   └── main.js           # Renderizado de las tarjetas
└── src/
    ├── Logo.png          # Logotipo
    ├── a.jpg             # Imagen del logo en el encabezado
    ├── b.jpg
    ├── Intermedio/       # Banners del carrusel
    │   ├── Banner1.webp
    │   ├── Banner2.webp
    │   └── Banner3.jpg
    └── Productos/        # Imágenes de los productos
        ├── a.jpg
        ├── b.jpg
        ├── c.jpg
        ├── d.jpg
        └── e.jpg
```


## Datos de los productos

`scripts/db.js` exporta el array `Productos`. Cada objeto tiene esta estructura:

```js
{
    Codigo: 1,
    Nombre: "Pantalon",
    Precio: 25.000,
    Stock: 10,
    img: "../src/Productos/a.jpg"
}
```

Para **agregar o modificar productos**, editá únicamente ese archivo. `scripts/main.js` recorre el array y genera una tarjeta por cada elemento, sin filtros ni campos hardcodeados.

> Las rutas de `img` se escriben con el prefijo `../` porque el archivo está en `scripts/`; el renderizado las normaliza a rutas relativas de la raíz del sitio.

## Personalización

### Productos

Todo el catálogo se define en `scripts/db.js`.

### Colores

La paleta se maneja por variables de uso directo en `css/style.css`:

| Uso | Color |
|---|---|
| Azul principal (fondo del footer, botones) | `#2C3947` |
| Bordes y detalles secundarios | `#4A6076` |
| Texto secundario claro | `#B8C6D4` |
| Texto terciario | `#8FA3B8` |
| Texto principal | `#ffffff` |
| Fondo de tarjetas | `#ffffff` |
| Fondo suave (píldoras, placeholders) | `#f1f3f6` |

> El botón `Contactos` del encabezado mantiene su animación histórica en tonos cálidos; el footer y las tarjetas usan la paleta blanco/azul.

### Imágenes de las tarjetas

Las imágenes se muestran con `object-fit: cover` y `object-position: center` dentro de un contenedor de altura fija, por lo que:

- Todas las tarjetas tienen la misma altura, sin importar la proporción de la foto.
- Las imágenes nunca se deforman.
- Se adaptan al ancho del contenedor sin desbordarse.

La altura se define en `.Cards__img` (`300px` en escritorio, `260px` en celular). Se recomienda usar imágenes verticales y de proporción similar para minimizar el recorte.

### Secciones de navegación

Los enlaces del encabezado y del footer comparten los destinos: `Nosotros`, `Galeria`, `Productos` y `Contactos`.

## Compatibilidad

Navegadores modernos con soporte de ES Modules, CSS Grid, Flexbox y `aspect-ratio` / media queries. Probado en Chrome, Edge y Firefox.
