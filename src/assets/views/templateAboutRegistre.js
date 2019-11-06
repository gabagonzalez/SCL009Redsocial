  import { validationFormRegistreDates } from "../controller/validation_dates.js";
  import { createUser } from "../js/firebase_auth.js";
  import { loginGoogle } from "../js/firebase_auth.js";
  import { templateHome } from "./templateHome.js";



  
export const templateRegistre = () => {
  let containerRegistre = document.getElementById("root");

  let contenidoRegistre = ` <div class="demo-header">
                             <img src="https://i.ibb.co/M7ssZ9x/logoPano.png" class="img-fluid" alt="logo aplications">
                            </div>

  <h3 class="paragraph-registre">Crea tu cuenta</h3>

      <form class= "form-registre" id="signup-form">

          <input type="text" placeholder=" Nombre" class ="input-field inputUser" id="signup-user" />
          <label for="signup-user"></label>

          <input type="number" placeholder=" Edad" class ="input-field inputAge" id="signup-age"/>
          <label for="signup-age"></label>
   
  
          <input type="email" placeholder=" Correo" class ="input-field inputEmail" id="signup-email"/>
          <label for="signup-email"></label>
   
           <input type="password" placeholder=" Contraseña" class ="input-field inputPassword" id="signup-password"/>
           <label for="signup-password"></label>
  

       

         <button class="btn-red" id="btn-registre" >Crear</button>
         <button class="btn-blue" type="button" id="button-google">Google</button>


         <button class="back" id="back" type="button"></button>
      </form>

  
`;
  containerRegistre.innerHTML = contenidoRegistre;


  // 1. En registre click en btn registre
  document.getElementById("btn-registre").addEventListener("click", (e) => {
    e.preventDefault();
    
    console.log("click en boton registrar");
    let user = document.getElementById("signup-user").value;
    let age = document.getElementById("signup-age").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    let resRegistre = validationFormRegistreDates(user, age, email, password);

    console.log("la funcion validationFormRegistredates  retorna = " + resRegistre);

    if (resRegistre) {
      console.log("al retornar true, se ejecutara createUser");
      createUser(user, age, email, password);
      
      console.log("createUser  ejecutando ");
      

    } else {

     
      console.log("NO     createUser / parametros validos");
    }
    
  });

  document.getElementById('back').addEventListener('click', () => {
    templateHome();
  });

  // 2. En registre click en btn google
  document.getElementById("button-google").addEventListener("click", () => {
    console.log("presionaste boton google en Home!");

    loginGoogle();


  });



};