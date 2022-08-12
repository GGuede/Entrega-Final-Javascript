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
const monitor1 = new Monitor(1,"LG", 27, 720, 8000,"Monitor Comstar 220","./Multimedia/Monitor1.jpg")
Monitores.push(monitor1)

const monitor2 = new Monitor(2,"SAMSUNG", 27, 1080, 13000, "Monitor Acer V246hql","./Multimedia/Monitor2.jpg")
Monitores.push(monitor2)

const monitor3 = new Monitor(3,"ACER", 32, 1444, 15000, "Monitor Samsung LF27T","./Multimedia/Monitor3.jpg")
Monitores.push(monitor3)

const monitor4 = new Monitor(4,"VIEWSONIC", 27, 1444, 13000,"Monitor Viewsonic VX2468-PC" ,"./Multimedia/Monitor4.jpg")
Monitores.push(monitor4)

const monitor5 = new Monitor(5,"SAMSUNG", 24, 720, 5000, "Monitor Gigabyte G24F","./Multimedia/Monitor5.jpg")
Monitores.push(monitor5)

const monitor6 = new Monitor(6,"LG", 27, 1444, 15000, "Monitor ASUS TUF ","./Multimedia/Monitor6.jpg")
Monitores.push(monitor6)

//--------------------------------------Eventos------------------------------//
const productos = document.querySelector('#imagenesPC')

const  contenedorCarrito = document.getElementById('container-modal')

const interiorDelCarro = document.getElementById('modal')

const botonVaciar = document.getElementById('botonVaciar')

const contadorCarrito = document.getElementById('contadorCarrito')

const precioTotal = document.getElementById('precioTotal')

const abrirModal = document.getElementById('abrirModal')

const cerrarModal = document.getElementById('cerrarModal')


botonVaciar.addEventListener(`click` , () => {
  Carrito.length = 0
  actualizarCarrito()
})

abrirModal.addEventListener(`click` , () => {
contenedorCarrito.classList.add('container-modal-active')
})

cerrarModal.addEventListener(`click` , () => {
  contenedorCarrito.classList.remove('container-modal-active')
})



Monitores.forEach(producto => {
    const div = document.createElement('div')
    div.innerHTML = `<h4 class="text-danger">${producto.nombre}</h4>
                    <img class="im" src=${producto.img}>
                     <button id="agregar${producto.id}" class="agregar">Agregar</button> <p>$${producto.precio}</p>`

        productos.appendChild(div)
    
    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener(`click` , () => {
      agregarAlCarrito(producto.id)
    })
})
const agregarAlCarrito =(prodId) => {
  const item = Monitores.find ((prod) => prod.id === prodId)
  Carrito.push(item)
  actualizarCarrito()
  console.log(Carrito)
}

const actualizarCarrito = () => {
  
  
    Carrito.forEach((prod) => {
      const div = document.createElement('div')
      div.className = ('productoEnCarrito')
      div.innerHTML = `
      <p>${prod.nombre}</p>
      <p>Precio: $${prod.precio}</p>
      `
  
      interiorDelCarro.appendChild(div)
  
      localStorage.setItem('carrito' , JSON.stringify(Carrito))
    })
  }

  