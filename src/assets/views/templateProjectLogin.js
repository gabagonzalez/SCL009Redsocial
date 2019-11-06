import { loginGoogle } from "../js/firebase_auth.js";
 import { validationFormSignLoginDates } from "../controller/validation_dates.js";
 import { signLogin } from "../js/firebase_auth.js";
 import { templateHome } from "./templateHome.js";

export const templateLogin = () => {

  document.getElementById("root").innerHTML = `
  <div class="demo-header">
   <img src="https://i.ibb.co/M7ssZ9x/logoPano.png" class="img-fluid" alt="logo aplication" > 
 </div> 

 <h3 class ="paragraph-login">Inicia Sesión</h3>
     
 <form class ="form-login" id="login-form">       
   <input type="email" placeholder=" Correo" class ="input-field" id="login-email"/>
   <label for="login-email"></label>
   
   <input type="password" placeholder=" Contraseña" class ="input-field" id="login-password"/>
   <label for="login-password"></label>
  


   <button class="btn-red" id="btn-login">Ingresa</button>
           
   <button class="btn-blue" type="button" id="button-google-login">Google</button>

            
   <button class ="back" id="back" type="button"></button>  
  </form>
  
 `;

 
 
 
 
 // 1. En Login click en btn-login
   document.getElementById("btn-login").addEventListener("click", (e) => {
     e.preventDefault();
     // valores desde imput text para function signLogin
     let email = document.getElementById('login-email').value;
 
     let password = document.getElementById('login-password').value;
     
 
     let resSignLogin = validationFormSignLoginDates(email, password);
     // conditions
     // para logearse los datos ingresados por el usuario deben estar completos y pasar las validaciones 
     // y ademas el user.emailverified deben retornar true
     // asi se ejecuta la fx signLogin y se muestra el muro
 
     if (resSignLogin) {
       signLogin(email, password);
       console.log("logeado / parametros validados");
       swal.fire('Bienvenido Nuevamente!', 'Disfruta de Panoramix!','success');
     } else {
       console.log("NO    createUser / parametros validos");
     }
 
 
   });
   document.getElementById('back').addEventListener('click', () => {
     templateHome();
   });
 
 
   // 2. En login click en btn google
   document.getElementById("button-google-login").addEventListener("click", () => {
     console.log("presionaste boton google en Home!");
     loginGoogle();
 
 
   });
 
 
 
};