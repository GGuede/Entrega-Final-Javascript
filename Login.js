//-------------------------------------------------------------------------Login con 3 Usuarios----------------------------------------------//
baseDeDatosLogin = JSON.parse(localStorage.getItem("sistema-de-login"));

const usuario = document.getElementById('usuario')



    let usuarioLogueado
    
    
    if (!baseDeDatosLogin) {
      cargarDatosInicialesDeLaBaseDeDatosLogin();
    }
    
    function guardarDatosDeLaBaseDeDatosLogin() {
      localStorage.setItem("sistema-de-login", JSON.stringify(baseDeDatosLogin));
    }
    
    function cargarDatosInicialesDeLaBaseDeDatosLogin() {
      baseDeDatosLogin = {
        "Juan": {
          contraseña: "abc",
        },
        "Gaston": {
          contraseña: "def",
        },
        "Alberto": {
          contraseña: "ghi",
        },
      };
    }

     function login() {
      swal.fire({
        title: "Inicio de sesion",
        confirmButtonText: "Login",
        
        
        html: `
            <div style="margin:5px">
                <input class="swal2-input" placeholder="Usuario" id="usuario">
                <input type="password" class="swal2-input" placeholder="Contraseña" id="contraseña">
            </div>
            `,
        preConfirm: () => {
          let usuario = document.getElementById("usuario").value;
          let contraseña = document.getElementById("contraseña").value;
          if (!usuario) {
            Swal.showValidationMessage("No hay usuario");
            return false;
          }
          if (!contraseña) {
            Swal.showValidationMessage("No hay contraseña");
            return false;
          }
          let datos = baseDeDatosLogin[usuario];
          if (!datos) {
            Swal.showValidationMessage("El usuario no existe");
            return false;
          }
          if (datos.contraseña != contraseña) {
            Swal.showValidationMessage("Contraseña incorrecta");
            return false;
          }
          usuarioLogueado = datos
          
          console.log('usuario')
          function guardarEnLocalStorage(){
          let txt_user = document.getElementById("usuario").value;
          let txt_password = document.getElementById("contraseña").value;

          localStorage.setItem('usuario', txt_user);
          localStorage.setItem('password', txt_password);

          if(txt_user != null && txt_user !='undefined')
          window.location = "index.html";
        }
        guardarEnLocalStorage()
        window.location = "index.html"
          return true;
          
        },
        
      });
    }
    
    login()

    