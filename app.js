//--------------------------------Arrays---------------------------------------//
let Monitores = []
let Carrito = []


//--------------------------------Constructor----------------------------------//
class Monitor {
    constructor(id,marca, pulgadas, definicion, precio,nombre,img) {
      this.id = id
      this.marca = marca
      this.pulgadas = pulgadas
      this.definicion = definicion
      this.precio = precio
      this.nombre = nombre
      this.img = img
    }
  }

//--------------------------------------Objetos del Array-------------------------//
const monitor1 = new Monitor(1,"COMSTAR", 27, 720, 8000,"Monitor Comstar 220","./Multimedia/Monitor1.jpg")
Monitores.push(monitor1)

const monitor2 = new Monitor(2,"ACER", 27, 1080, 13000, "Monitor Acer V246hql","./Multimedia/Monitor2.jpg")
Monitores.push(monitor2)

const monitor3 = new Monitor(3,"SAMSUNG", 32, 1444, 15000, "Monitor Samsung LF27T","./Multimedia/Monitor3.jpg")
Monitores.push(monitor3)

const monitor4 = new Monitor(4,"VIEWSONIC", 27, 1444, 13000,"Monitor Viewsonic VX2468-PC" ,"./Multimedia/Monitor4.jpg")
Monitores.push(monitor4)

const monitor5 = new Monitor(5,"GIGABYTE", 24, 720, 5000, "Monitor Gigabyte G24F","./Multimedia/Monitor5.jpg")
Monitores.push(monitor5)

const monitor6 = new Monitor(6,"ASUS", 27, 1444, 15000, "Monitor ASUS TUF ","./Multimedia/Monitor6.jpg")
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

const confirmarCompra = document.getElementById('confirmarCompra')


document.addEventListener('DOMContentLoaded' , () => {
  if (localStorage.getItem('carrito')){
    Carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizarCarrito()
  }
})

confirmarCompra.addEventListener(`click` , () => {
  
  Swal.fire(
    {
      title: '¿Terminaste de agregar tus productos?',
      text: 'Al confirmar se te llevara a otra seccion para finalizar la compra',
      icon: 'sucefull',
      showCancelButton: true,
      confirmButtonText: '<a href="./formulario.html" class="confirmar"> Confirmar </a>',
      cancelButtonText: 'Cancelar'
    }
  ).then( (result) => {
    if(result.isConfirmed){
      Carrito.length = 0
      localStorage.setItem('carrito' , JSON.stringify(Carrito))
    }
  })
})

botonVaciar.addEventListener(`click` , () => {

  Swal.fire(
    {
        title: '¿Está seguro que quiere vaciar el carrito?',
        text: 'Su compra no se a realizado aun!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, vaciar',
        cancelButtonText: 'No, cancelar'
    }
).then( (result) => {
    if (result.isConfirmed) {
    Carrito.length = 0
    localStorage.setItem('carrito' , JSON.stringify(Carrito))
  Toastify({
    text: 'Se vació el carrito',
    time: 3000
}).showToast()

actualizarCarrito()
}
} )
  
})

abrirModal.addEventListener(`click` , () => {
containerModal.classList.add('container-modal-active')
})

cerrarModal.addEventListener(`click` , () => {
  containerModal.classList.remove('container-modal-active')
})



Monitores.forEach(producto => {
    const div = document.createElement('div')
    div.className =('claseProducto')
    div.innerHTML = `<h4 class="text-danger">${producto.nombre}</h4>
                    <img class="im" src=${producto.img}>
                    <p class="clasePrecio">$${producto.precio}</p>
                    <div class ="botonesDeLosProductos">
                     <button class="btn btn-outline-success">+</button>
                     <button class="btn btn-outline-danger">-</button>
                     <p>xxxx</p>
                    </div>
                    <button id="agregar${producto.id}" class="agregar">Agregar</button> `

        productos.appendChild(div)

        
    
    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener(`click` , () => {
      agregarAlCarrito(producto.id)
    })
})
const agregarAlCarrito = (prodId) => {
  const existe = Carrito.find( (prod) => prod.id === prodId)

  if(existe){
        existe.cantidad += 1
  }else{
    const item = Monitores.find ((prod) => prod.id === prodId)
    Carrito.push({
      ...item,cantidad: 1})
    console.log(Carrito)
  }
    localStorage.setItem('carrito', JSON.stringify(Carrito))
    toastAgregar()
    actualizarCarrito()
  }
const eliminarDelCarrito = (prodId) => {
  const item = Carrito.find((prod) => prod.id === prodId)

  item.cantidad -= 1

  if(item.cantidad === 0){
  const indice = Carrito.indexOf(item)
  Carrito.splice(indice,1)
  }
  localStorage.setItem('carrito', JSON.stringify(Carrito))
  toastEliminar()
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
      <button id="eliminarProducto${prod.id}" onclick="eliminarDelCarrito(${prod.id })" class="boton-eliminar"<i class="fas fa-trash-alt">Eliminar</button>
      `
      contenedorCarrito.prepend(div)
  
    })
    contadorCarrito.innerText = Carrito.reduce((acc, prod) => acc + prod.cantidad ,0)
    precioTotal.innerText = Carrito.reduce((acc,prod) => acc + prod.precio * prod.cantidad,0 )
  }

  
  const toastAgregar = () => {
    Toastify({
        text: 'Producto agregado al carrito',
        time: 3000,
        gravity: 'bottom',
        position: 'right'
    }).showToast()
}
const toastEliminar = () => {
    Toastify({
        text: 'Producto eliminado',
        time: 3000,
        gravity: 'bottom'
    }).showToast()
}
const clasePrecio = document.querySelector (".clasePrecio")

botonDark.addEventListener(`click` , () => {
  header.classList.toggle('headerActive')
  body.classList.toggle('bodyActive')
  footer.classList.toggle('footerActive')
  clasePrecio.classList.toggle('clasePrecioActive')
})
actualizarCarrito()
  