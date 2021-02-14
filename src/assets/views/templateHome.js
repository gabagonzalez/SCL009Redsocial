import { loginGoogle } from "../js/firebase_auth.js";

export const templateHome = () => {

  document.getElementById("root").innerHTML = `
  <div class="flexbox-item">
  <div class="demo-header">
    <img src="./img/logoPano.png" class="img-fluid" alt="logo aplication">
  </div>
  <div class="paragraph-home">
    <p class="welcome-home">Bienvenido</p>
  </div> 

  


   <form >

 
     <div class="container-button-red">
        <button class="btn-red" id="btn-registre-home">Registrar</button>
     </div>

    <div class="container-button-red"> 
      <button class="btn-red" id="btn-login-home">Entrar</button>
    </div>

    <div class="container-button-blue">
      <button class="btn-blue" type="button" id="button-google-home">Google</button>
    </div>

   </form>


 </div>`;

  // initRealTime ();
  //<div id="app" class="title"></div>

  // function DOM in template Home
 

    // 1. En home click en btn  registrar
    document.getElementById("btn-registre-home").addEventListener("click", () => {
  
      window.location.hash = "#/registre";
    });
  
    // 2. En home click en btn google
    document.getElementById("button-google-home").addEventListener("click", () => {
      console.log("presionaste boton google en Home!");
      loginGoogle();
  
    });
  
    //3. En home click en btn login
  
    document.getElementById("btn-login-home").addEventListener("click", () => {
      window.location.hash = "#/login";
    });
  
};