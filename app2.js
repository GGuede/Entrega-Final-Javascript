//--------------------------------------------------Local Storage del precio final en cuotas--------------------------//

const cuotas = document.getElementById('cuotas')

let mensaje = localStorage.getItem('precioFinal');

const div = document.createElement('div')
div.className = ('')
div.innerHTML = `
<label class="nombresDeForm" for="cuotas">Cantidad de Cuotas</label>
<select class="form-control"  placeholder="Cuotas">
  <option value="">1 Pagos de $${Math.round(mensaje)}</option>
  <option value="">3 Pagos de $${Math.round(mensaje / 3)}</option>
  <option value="">6 Pagos de $${Math.round(mensaje / 6)}</option>
  <option value="">12 Pagos de $${Math.round(mensaje / 12)}</option>`
cuotas.append(div)

console.log(mensaje)

//----------------------Variables-------------------//

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

const botonCerrarSesion = document.getElementById('botonCerrarSesion')

const divDiscordia = document.getElementById('divDiscordia')

const botonEnviar = document.getElementById('botonEnviar')

const formulario = document.getElementById('formulario')
//----------------------------------------------------------------Modo oscuro--------------------------------------------------------//
const check =document.getElementById("check")

    
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
  header.classList.toggle('headerActive')
  document.body.classList.toggle('bodyActive')
  footer.classList.toggle('footerActive')
  botonDark.classList.toggle('active')  
})

const compruebaDark = () => {

if(localStorage.getItem('darkMode') === 'true'){

  header.classList.add('headerActive')
  body.classList.add('bodyActive')
  footer.classList.add('footerActive')
  botonDark.classList.add('active')
 
}else{
  header.classList.remove('headerActive')
  body.classList.remove('bodyActive')
  footer.classList.remove('footerActive')
  botonDark.classList.remove('active')
 
}
}
compruebaDark()
//-------------------------------------Validacion de nombre y correo------------------------//
formulario.addEventListener(`submit` , (evento) => {
  evento.preventDefault()
  let nom = document.querySelector('#input-nombre').value;
  let nombre = document.querySelector('#input-nombre')
  let rellenaCampo = document.querySelector('#rellenaCampoNombre')
  let rellenaCampoEmail = document.querySelector('#rellenaCampoEmail')
  let valorEmail = document.querySelector('#input-email').value;
  let email = document.querySelector('#input-email')

function confirmarNombre (){
  if(nom === null || nom.length <= 2){
    nombre.classList.add('activarBordeFormulario')
    rellenaCampo.classList.add('rellenaCampoActive')
    nombreValido = false;
  confirmarNombre()
  }else{nombreValido = true}}
  function confirmarEmail(){
  if(valorEmail === null || valorEmail.length <= 8){
    email.classList.add('activarBordeFormulario')
    rellenaCampoEmail.classList.add('rellenaCampoActive')
    emailValido = false;
    confirmarEmail()
    console.log(emailValido, nombreValido)
  }else{emailValido = true}
}

confirmarNombre()
confirmarEmail()
  if(nombreValido === true && emailValido === true){
{Swal.fire(
  {
    title: 'Tu Formulario se a enviado Correctamente!',
    icon: 'success',
    confirmButtonText: '<a href="./index.html" class="confirmar"> Confirmar </a>',
  }
).then( (result) => {
  if(result.isConfirmed){
    window.location = "index.html"
  }
})
} 
}
}
)

