//--------------------------------Arrays---------------------------------------//
let Productos = []
let Carrito = []


//--------------------------------Constructor----------------------------------//

class Producto {
  constructor(id, descripcion, precio,nombre,img) {
    this.id = id
    this.descripcion = descripcion
    this.precio = precio
    this.nombre = nombre
    this.img = img
  }
}

//--------------------------------------Objetos del Array-------------------------//
const monitor1 = new Producto(1,"COMSTAR pulgadas 27 Resolucion 720", 8000,"Monitor Comstar 220","./Multimedia/Monitor1.jpg")
Productos.push(monitor1)

const monitor2 = new Producto(2,"ACER pulgadas 27, Resolucion 1080", 13000, "Monitor Acer V246hql","./Multimedia/Monitor2.jpg")
Productos.push(monitor2)

const monitor3 = new Producto(3,"SAMSUNG pulgadas 32 Resolucion 1444", 15000, "Monitor Samsung LF27T","./Multimedia/Monitor3.jpg")
Productos.push(monitor3)

const monitor4 = new Producto(4,"VIEWSONIC pulgadas 27 Resolucion 1444", 13000,"Monitor Viewsonic VX2468-PC" ,"./Multimedia/Monitor4.jpg")
Productos.push(monitor4)

const monitor5 = new Producto(5,"GIGABYTEpulgadas 24,Resolucion 720", 5000, "Monitor Gigabyte G24F","./Multimedia/Monitor5.jpg")
Productos.push(monitor5)

const monitor6 = new Producto(6,"ASUS pulgadas 27 Resolucion 1444", 15000, "Monitor ASUS TUF ","./Multimedia/Monitor6.jpg")
Productos.push(monitor6)

const monitor7 = new Producto(7,"VIEWSONIC pulgadas 32 Resolucion 2160", 20000, "Monitor Viewsonic XG3220 32 ","./Multimedia/Monitor7.jpg")
Productos.push(monitor7)

const monitor8 = new Producto(8,"ASUS pulgadas 24,Resolucion 1080", 10000, "Monitor ASUS ROG SWIFT ","./Multimedia/Monitor8.jpg")
Productos.push(monitor8)

const memoriaRam1 = new Producto(9,"Memoria Patriot Signature Premium 8GB DDR4 3200mhz", 10000, "Memoria Patriot Signature ","./Multimedia/MemoriasRam2.jpeg")
Productos.push(memoriaRam1)

const memoriaRam2 = new Producto(10,"Memoria Kingston Fury Beast 8GB DDR4 2666Mhz", 10000, "Memoria Kingston Fury","./Multimedia/MemoriasRam3.jpg")
Productos.push(memoriaRam2)

const memoriaRam3 = new Producto(11,"Memoria Patriot Viper Steel 8GB DDR4 3000mhz", 10000, "Memoria Patriot Viper ","./Multimedia/MemoriasRam4.jpg")
Productos.push(memoriaRam3)

const memoriaRam4 = new Producto(12,"Memoria Kingston Fury Beast RGB 16GB DDR4 3200Mhz", 10000, "Memoria Kingston Fury RGB ","./Multimedia/MemoriasRam5.jpg")
Productos.push(memoriaRam4)

const tarjetaDeVideo1 = new Producto(13,"GPU Biostar GeForce G210 1Gb GDDR3", 10000, "GPU Biostar GeForce G210 ","./Multimedia/TarjetasDeVideo1.jpg")
Productos.push(tarjetaDeVideo1)

const tarjetaDeVideo2 = new Producto(14,"GPU Palit GeForce RTX3060 Dual 12GB DDR6", 10000, "GPU Palit GeForce RTX3060","./Multimedia/TarjetasDeVideo2.jpg")
Productos.push(tarjetaDeVideo2)

const tarjetaDeVideo3 = new Producto(15,"GPU ZOTAC GeForce RTX3050 Twin Edge", 10000, "GPU ZOTAC GeForce RTX3050","./Multimedia/TarjetasDeVideo3.jpg")
Productos.push(tarjetaDeVideo3)

const tarjetaDeVideo4 = new Producto(16,"GPU Asus GeForce GTX 1650 Phoenix OC 4GB DDR6", 10000, "GPU Asus GeForce GTX 1650 ","./Multimedia/TarjetasDeVideo4.jpg")
Productos.push(tarjetaDeVideo4)

//----------------------Variables-------------------//

const productos = document.querySelector('#imagenesPC')

const  containerModal = document.getElementById('container-modal')

const containerModalCerrarSesion = document.getElementById('container-modalCerrarSesion')

const botonCancelarCerrarSesion = document.getElementById('cancelarCerrarSesion')

const botonConfirmarCerrarSesion = document.getElementById('confirmarCerrarSesion')

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

let mensaje = localStorage.getItem('precioFinal');

const cuotas = document.getElementById('cuotas')

const botonCerrarSesion = document.getElementById('botonCerrarSesion')

const divDiscordia = document.getElementById('divDiscordia')

const modalSwal = document.querySelectorAll(".swal2-modal")

const usuario = document.getElementById('usuario')

const bienvenido = document.getElementById('bienvenido')
//--------------------------------------Eventos------------------------------//
    document.addEventListener('DOMContentLoaded' , () => {
      if (localStorage.getItem('carrito')){
        Carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
        desactivaVaciar()
        desactivaConfirmar()
        
      }
    })
//----------------------------------------------------------agregando productos al dom----------------------------------------------------------------------//
    Productos.forEach(producto => {
      const div = document.createElement('div')
      div.className =('claseProducto claseProductoSeleccionar')
      div.innerHTML = `<h4 class="titulosProductos">${producto.nombre}</h4>
                      <img class="im" src=${producto.img}>
                      <p class="clasePrecio">$${producto.precio}</p>
                      <div class ="botonesDeLosProductos">
                      </div>
                      <button id="agregar${producto.id}" class="agregar">Agregar</button> `
  
          productos.appendChild(div)
  
          
      
      const boton = document.getElementById(`agregar${producto.id}`)
  
      boton.addEventListener(`click` , () => {
        agregarAlCarrito(producto.id)
      })
  })
//--------------------------------------------------------------------------Agregar al Carrito---------------------------------------//
  const agregarAlCarrito = (prodId) => {
    const existe = Carrito.find( (prod) => prod.id === prodId)
  
    if(existe){
          existe.cantidad += 1
    }else{
      const item = Productos.find ((prod) => prod.id === prodId)
      Carrito.push({
        ...item,cantidad: 1})
      console.log(Carrito)
    }
      localStorage.setItem('carrito', JSON.stringify(Carrito))
      toastAgregar()
      actualizarCarrito()
      desactivaVaciar()
      desactivaConfirmar()
    }
//------------------------------------------------------------------Confirmar Compra------------------------------------------//
    confirmarCompra.addEventListener(`click` , () => {
  
      Swal.fire(
        {
          title: '¿Terminaste de agregar tus productos?',
          text: 'Al confirmar se te llevara a otra seccion para finalizar la compra',
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: '<a href="./formulario.html" class="confirmar"> Confirmar </a>',
          cancelButtonText: 'Cancelar'
        }
      ).then( (result) => {
        if(result.isConfirmed){
          console.log(precioTotal.innerText)
          localStorage.setItem('precioFinal',precioTotal.innerText)
          Carrito.length = 0
          localStorage.setItem('carrito' , JSON.stringify(Carrito))
        }
      })
    })
    const desactivaConfirmar = () => {

  
      if(Carrito.length === 0){
        confirmarCompra.disabled = true
   
      }else{
        confirmarCompra.disabled = false
      }
    }
    //--------------------------------------------------------------Cerrar sesion------------------------------------------//
    botonCerrarSesion.addEventListener(`click` , () => {

        containerModalCerrarSesion.classList.add('container-modal-active') 
  })
    botonCancelarCerrarSesion.addEventListener(`click` , () => {
    containerModalCerrarSesion.classList.remove('container-modal-active')
  })
    botonConfirmarCerrarSesion.addEventListener(`click` , () => {

    window.location = "login.html"
  })
  //-----------------------------------------------Vaciar carrito--------------------------//
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
        time: 3000 ,
        gravity: 'bottom',
        position: 'left',
        style: {
          background: 'linear-gradient(to right, #9f0000, #000000)'
      }
        
    }).showToast()
    
    actualizarCarrito()
    desactivaVaciar()
    desactivaConfirmar()
    }
    } ) 
    })
    //-----------------------------------------------------------------------Eventos del Modal-------------------------------------------//
    abrirModal.addEventListener(`click` , () => {
    containerModal.classList.add('container-modal-active')
    })
    
    cerrarModal.addEventListener(`click` , () => {
      containerModal.classList.remove('container-modal-active')
    })
  const desactivaVaciar = () => {

  
    if(Carrito.length === 0){
      botonVaciar.disabled = true
 
    }else{
      botonVaciar.disabled = false
    }
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
      desactivaVaciar()
      desactivaConfirmar()
    }
    //-----------------------------------------Funcion actualizar Carrito--------------------------------//
    const actualizarCarrito = () => {
      contenedorCarrito.innerHTML = ""
      
      
        Carrito.forEach((prod) => {
          const div = document.createElement('div')
          div.className = ('productoEnCarrito')
          div.innerHTML = `
          <img class="imagenesProductos" src=${prod.img}>
          <p class="nombreProductos">${prod.nombre}</p>
          <p class="precioProductos">Precio: $${prod.precio}</p>
          <p class="cantidadProductos">Cantidad: <span id ="cantidad">${prod.cantidad}</span></p>
          
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
            position: 'right',
            className: 'notificacion my-toast',
            style: {
              background: 'linear-gradient(to right, #000000, #009f1b)'
          }
  
        }).showToast()
    }
    const toastEliminar = () => {
        Toastify({
            text: 'Producto eliminado',
            time: 3000,
            gravity: 'bottom',
            style: {
              background: 'linear-gradient(to right, #9f0000, #000000)'
          }
        }).showToast()
    }

  //----------------------------------------------------------------Modo oscuro--------------------------------------------------------//
    const check = document.getElementById("check")

    
    if (localStorage.getItem('darkMode')===null){
        localStorage.setItem('darkMode', "false");
    }
    checkStatus()
    
    function checkStatus(){
        if (localStorage.getItem('darkMode')==="true"){
            botonDark.checked = true;                                       
                        
        }else{
            botonDark.checked = false;
           
        }
    }
    
    function changeStatus(){                                           
        if (localStorage.getItem('darkMode')==="true"){                 
            localStorage.setItem('darkMode', "false");                   
        } else{
            localStorage.setItem('darkMode', "true");                  
        }
    }
    
    botonDark.addEventListener(`click` , () => {
      abrirModal.classList.toggle('myBotonActive')
      header.classList.toggle('headerActive')
      document.body.classList.toggle('bodyActive')
      footer.classList.toggle('footerActive')
      botonDark.classList.toggle('active')
      document.querySelectorAll(".clasePrecio").forEach(articulos =>{
    
          articulos.classList.toggle("clasePrecioActive")
      })    
})
    
const compruebaDark = () => {

  if(localStorage.getItem('darkMode') === 'true'){
    abrirModal.classList.add('myBotonActive')
      header.classList.add('headerActive')
      body.classList.add('bodyActive')
      footer.classList.add('footerActive')
      botonDark.classList.add('active')
      document.querySelectorAll(".clasePrecio").forEach(articulos =>{
    
          articulos.classList.add("clasePrecioActive")
      })
  }else{
    abrirModal.classList.remove('myBotonActive')
      header.classList.remove('headerActive')
      body.classList.remove('bodyActive')
      footer.classList.remove('footerActive')
      botonDark.classList.remove('active')
      document.querySelectorAll(".clasePrecio").forEach(articulos =>{
    
          articulos.classList.remove("clasePrecioActive")
      })
  }
}
compruebaDark()
  actualizarCarrito()    
  //-----------------------------------------------------------------Buscador---------------------------------------------------------------//
    document.addEventListener("keyup", buscar=>{

      if (buscar.target.matches("#buscador")){
        console.log(buscar.target.value)
          
        if (buscar.key ==="Escape")buscar.target.value = ""

          document.querySelectorAll(".claseProductoSeleccionar").forEach(articulos =>{
    
              articulos.textContent.toLowerCase().includes(buscar.target.value.toLowerCase())
                ?articulos.classList.remove("filtro")
                :articulos.classList.add("filtro")

                articulos.textContent.toLowerCase().includes(buscar.target.value.toLowerCase())
                ?articulos.classList.add("claseProducto")
                :articulos.classList.remove("claseProducto")
          })
      }
    })
    
    desactivaVaciar()
   compruebaDark()

//----------------------------------------------------------------------------Fetch del clima-------------------------------------------------------------//
  let lon;
  let lat;
  let temperature = document.querySelector(".temp")
  let summary = document.querySelector(".summary")
  let loc = document.querySelector(".location")
  let icon = document.querySelector(".icon")
  const kelvin = 273.15

  window.addEventListener("load",() => {
  
  if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition((position) =>{

      lon = position.coords.longitude;
      lat = position.coords.latitude;



    const api_id = "4e150ea0ef00829a859f6b6f4b9bce59";

    const url_base = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_id}` ;


    fetch(url_base)
    .then((response) =>{

      return response.json();
    })
    .then((data) => {

      temperature.textContent =
      Math.floor(data.main.temp - kelvin) + "°C";
      summary.textContent=data.weather[0].description
      loc.textContent = data.name + "," + data.sys.country;

      palabra = data.weather[0].description

if(palabra === "clear sky"){
  summary.textContent = "cielo despejado"
  }else if (palabra === "few clouds"){
    summary.textContent = "Poco Nublado"
  }else if (palabra === "broken clouds"){
    summary.textContent = "Nubes cargadas"
  }else if(palabra === "light rain"){
    summary.textContent = "Lluvia ligera"
  }else if(palabra === "rain"){
    summary.textContent = "Lluvia"
  }else if(palabra === "sunny"){
    summary.textContent = "Soleado"
  }else if(palabra === "partly sunny"){
    summary.textContent = "Parcialmente  soleado"
  }else if(palabra === "partly cloudy"){
    summary.textContent = "Parcialmente nublado"
  }else if(palabra === "cloudy"){
    summary.textContent = "Nublado"
  }else if(palabra === "electric storm"){
    summary.textContent = "Tormenta eléctrica"
  }else if(palabra === "snowing"){
    summary.textContent = "Nevando"
  }else if(palabra === "very cloudy"){
    summary.textContent = "Muy nublado"
  }else if(palabra === "very sunny"){
    summary.textContent = "Muy soleado"
  }
  
    })
  })

  }
})

localStorage.getItem('usuario')
const div = document.createElement('div')
div.className = ('bienvenido')
div.innerHTML = `
<p class="pBienvenido">Bienvenido ${localStorage.usuario}!</p>`

bienvenido.append(div)

