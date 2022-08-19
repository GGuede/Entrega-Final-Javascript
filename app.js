//--------------------------------Arrays---------------------------------------//
let Monitores = []
let Carrito = []


//--------------------------------Constructor----------------------------------//
class Monitor {
    constructor(id,marca, pulgadas, definicion, precio,nombre,img,cantidad) {
      this.id = id
      this.marca = marca
      this.pulgadas = pulgadas
      this.definicion = definicion
      this.precio = precio
      this.nombre = nombre
      this.img = img
      this.cantidad = cantidad
    }
  }

//--------------------------------------Objetos del Array-------------------------//
const monitor1 = new Monitor(1,"COMSTAR", 27, 720, 8000,"Monitor Comstar 220","./Multimedia/Monitor1.jpg",1)
Monitores.push(monitor1)

const monitor2 = new Monitor(2,"ACER", 27, 1080, 13000, "Monitor Acer V246hql","./Multimedia/Monitor2.jpg",1)
Monitores.push(monitor2)

const monitor3 = new Monitor(3,"SAMSUNG", 32, 1444, 15000, "Monitor Samsung LF27T","./Multimedia/Monitor3.jpg",1)
Monitores.push(monitor3)

const monitor4 = new Monitor(4,"VIEWSONIC", 27, 1444, 13000,"Monitor Viewsonic VX2468-PC" ,"./Multimedia/Monitor4.jpg",1)
Monitores.push(monitor4)

const monitor5 = new Monitor(5,"GIGABYTE", 24, 720, 5000, "Monitor Gigabyte G24F","./Multimedia/Monitor5.jpg",1)
Monitores.push(monitor5)

const monitor6 = new Monitor(6,"ASUS", 27, 1444, 15000, "Monitor ASUS TUF ","./Multimedia/Monitor6.jpg",1)
Monitores.push(monitor6)

//--------------------------------------Eventos------------------------------//
const productos = document.querySelector('#imagenesPC')

const  containerModal = document.getElementById('container-modal')

const interiorDelCarro = document.getElementById('modal')

const contenedorCarrito = document.getElementById('contenedorCarrito')

const botonVaciar = document.getElementById('botonVaciar')

const contadorCarrito = document.getElementById('contadorCarrito')

const precioTotal = document.getElementById('precioTotal')

const abrirModal = document.getElementById('abrirModal')

const cerrarModal = document.getElementById('cerrarModal')

const header = document.getElementById('header')

const body = document.getElementById('body')

const footer = document.getElementById('footer')

const botonDark = document.getElementById('botonDark')

const eliminarProducto = document.getElementById('eliminarProducto')

document.addEventListener('DOMContentLoaded' , () => {
  if (localStorage.getItem('carrito')){
    Carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizarCarrito()
  }
})

botonVaciar.addEventListener(`click` , () => {
  Carrito.length = 0
  actualizarCarrito()
})

abrirModal.addEventListener(`click` , () => {
containerModal.classList.add('container-modal-active')
})

cerrarModal.addEventListener(`click` , () => {
  containerModal.classList.remove('container-modal-active')
})

botonDark.addEventListener(`click` , () => {
  header.classList.toggle('headerActive')
  body.classList.toggle('bodyActive')
  footer.classList.toggle('footerActive')
})

Monitores.forEach(producto => {
    const div = document.createElement('div')
    div.className =('claseProducto')
    div.innerHTML = `<h4 class="text-danger">${producto.nombre}</h4>
                    <img class="im" src=${producto.img}>
                    <p>$${producto.precio}</p>
                    <div class ="botonesDeLosProductos">
                     <button class="btn btn-outline-success">+</button>
                     <button class="btn btn-outline-danger">-</button>
                     <p id="cantidad">xxxx</p>
                    </div>
                    <button id="agregar${producto.id}" class="agregar">Agregar</button> `

        productos.appendChild(div)

        
    
    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener(`click` , () => {
      agregarAlCarrito(producto.id)
    })
})
const agregarAlCarrito = (prodId) => {
  const existe = Carrito.some (prod => prod.id === prodId)

  if(existe){
    const prod = Carrito.map(prod => {
      if(prod.id === prodId){
        prod.cantidad++
      }
    })
  }else{
    const item = Monitores.find ((prod) => prod.id === prodId)
    Carrito.push(item)
    console.log(Carrito)
  }
    
    actualizarCarrito()
  }
const eliminarDelCarrito = (prodId) => {
  const item = Carrito.find((prod) => prod.id === prodId)
  const indice = Carrito.indexOf(item)
  Carrito.splice(indice,1)
  actualizarCarrito()
}

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = ""
  
  
    Carrito.forEach((prod) => {
      const div = document.createElement('div')
      div.className = ('productoEnCarrito')
      div.innerHTML = `
      <p>${prod.nombre}</p>
      <p>Precio: $${prod.precio}</p>
      <p>Cantidad: <span id ="cantidad">${prod.cantidad}</span></p>
      <button id="eliminarProducto${prod.id}" onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"<i class="fas fa-trash-alt">Eliminar</button>
      `
      
      contenedorCarrito.prepend(div)
  
     localStorage.setItem('carrito', JSON.stringify(Carrito))

     
    })
    contadorCarrito.innerText = Carrito.reduce((acc, prod) => acc + prod.cantidad ,0)
    precioTotal.innerText = Carrito.reduce((acc,prod) => acc + prod.precio * prod.cantidad,0 )
  }

  

  