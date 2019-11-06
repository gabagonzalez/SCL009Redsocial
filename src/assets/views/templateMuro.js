
  import { signOutRedSocial } from '../js/firebase_auth.js';
  import { savePostData } from '../js/firebase_data.js';
  import { getDataPost } from '../js/firebase_data.js';

export const templateMuro = () => {
  
  // getNameData();
  document.getElementById('root').innerHTML = ` 
  <header class="header">
      <div class="demo-header">
         <img src="https://i.ibb.co/M7ssZ9x/logoPano.png" class="img-fluid">
       </div>
      <div class="columna" >
       <h3 class="welcome-muro">Hola!! Publica tu Evento Aquí. </h3>
      </div>

      <div class="items">

        <div class="item">
         <button class="btn-create2" id="button-sign-out"  type="button">Salir </button>
        </div>

        <div class="item">
        <button class="back" id="back" type="button"></button>
        </div>

      </div>

      <h4 id="userName"></h4>

  
  </header>

  <!-- SECTION USERS WRITING EVENT WHITH DATES  -->
  <section class="aside aside-1">
   <div class="modal" id="modal-post" >
       
      <form class="event-list" id="event-list">

          <!-- input event -->
           <div class="input-field2">
                <p class="welcome-home">Tipo de Actividad o Evento:</p>
                <input type="text" placeholder="Danza,Teatro,Música, etc." class ="inputevent" id="event" />
                <label for="event"></label>
           </div>
       
          <!-- input coordenadas  -->
          <div class=" input-field2">
                <p class="welcome-home"> Coodenadas </p>
                <input type="text" placeholder="Dirección" class ="inputadrees" id="address"/>
                <label for="address"></label>
          </div>
 
           <!-- input metro de referencia -->
          <div class=" input-field2">
               <p class="welcome-home">Metro de Referencia</p>
               <input type="text" placeholder="Baquedano, Salvador, etc." class ="inputsubway" id="subway"/>
               <label for="subway"></label>
          </div>
   
           <!-- input fecha -->
          <div class=" input-field2">
                <p class="welcome-home"> Fecha del Evento</p>
                <input type="text" placeholder="01-06" class ="inputdate" id="date"/>
                <label for="date"></label>
          </div>
   
          <!-- input comentarios  -->
          <div class=" input-field2">
               <p class="welcome-home"> Comentarios </p>
               <input type="text" placeholder="Descripcion del evento" class ="inputmessage" id="message" />
               <label for="message"></label>
          </div>
         <!-- -------------------------------------------- -->
         <!-- button create post in wall -->
         <div class = "row" >
               <button class="btn-create2" id="btn-post" >Publicar</button>
        </div>
      
      </form>
    </div>
  </section>


 <!-- SECTION USERS PUBLICATIONS -->
 <section class="main">

  <article >
   <div>
    <h3  class="welcome-muro">El Muro con lo Publicado...</h3>
    </div>
   <div>
   <div class="container">
   <aside class="aside aside-2">
  <!--Eventos en el muro de la aplicacion -->
    <table class="resp">
      <thead>
        <tr>
          <h3>
          <!--<th scope="col">USUARIO</th>-->
          <th scope="col">EVENTO</th>
          <!--<th scope="col">COORDENADAS</th>-->
          <th scope="col">METRO</th>
          <th scope="col">FECHA</th>
          <th scope="col">COMENTARIOS</th>
          <!--<th scope="col">ME GUSTA</th>-->
          </h3>
        </tr>
      </thead>
      <tbody id="tabla">
      </tbody>
    </table>
    </aside>
   </div>
  <div class = "row" >
      <!--<button class="btn-create2" id="btn-edit" >Editar</button>-->
  </div>
    <!-- button create delete in wall -->
    <div class = "row" >
        <!--<button class="btn-create2" id="btn-delete" >Borrar</button>-->
     </div>
 </section>
 <footer class="footer">
    <div class = "row" >
      <div class = "col" >
           <button id="back" type="button"></button>
      </div>
    </div>
  </footer>
  </div>`;
  getDataPost();
  // <!--<form id="add-event">
  //<ul id="event-list></ul>
  //</form>-->




    document.getElementById("btn-post").addEventListener("click", (e) => {
        e.preventDefault();
        savePostData();
        getDataPost();
        console.log("click en boton publicar");
        let event = document.getElementById("event").value;
        let adrees = document.getElementById("adrees").value;
        let subway = document.getElementById("subway").value;
        let date = document.getElementById("date").value;
        let message = document.getElementById("message").value;
    
        let resPublication = validationFormPublication(event, date, adrees, subway, message);
        if (resPublication) {
          console.log(" se ejecutara postCreate");
          postCreate(userPost);
    
          console.log("postCreate ejecutando ");
        } else {
          console.log("NO corre postCreates / parametros no validos");
        }
      })
    
      document.getElementById('back').addEventListener('click', () => {
        templateLogin();
      });
    
      
      document.getElementById('button-sign-out').addEventListener('click', () => {
    
        signOutRedSocial();
      });
    
}