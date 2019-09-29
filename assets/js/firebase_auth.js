import { validationFormSignLogin } from '../controller/validation.js'
import { saveRegistryData } from './firebase_data.js'
import { templateMuro } from './../views/templateMuro.js'


//HU1 registro con cuenta Google
// Function loginGoogle
export const loginGoogle = () => {
  console.log("click en LOGINGOOGLE hacemos correr su funcion? sii!! ");
  // 1. Crea una instancia del objeto del proveedor de Google:
  var provider = new firebase.auth.GoogleAuthProvider();
  
  // 2.3.4 opcionales
  // 5. Autenticar con Firebase a través del objeto del proveedor de Google.
  // Para ofrecer acceso con una ventana emergente, invoca signInWithPopup:
  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      //var name = result.user.displayName;
      // ...
      
      
      
    })
    .then(function changeMuro() {
      
      window.location.hash = "#/muro";
      
      
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

//HU2 registro con Correo 
export const createUser = (user, age, email, password) => {
  console.log(user);
  console.log(age);
  console.log(email);
  console.log(password);

  firebase.auth().createUserWithEmailAndPassword(email, password)
    
    .then(function () {
      console.log("se creo usuario en firebase");
      saveRegistryData();
      
      verificationEmail();
      
      
      window.location.hash = "#/login";
    })


    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      
    });

};




//HU3 Inicio de Sesion 
export const signLogin = (email, password) => {
  console.log("antes de realizar signLogin ");
  // let user = firebase.auth().currentUser;
  // var emailVerifiedReturn = user.emailVerified;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      function () {
        validationFormSignLogin();
       
        observer();
        
     
        //si user.verified es true entonces se va al muro
      }

      // se desarrolla la funcon de login
      // se desarrolla function de validacion email
      // si user.verified es positivo
      // entonces
    )
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
};

// Observer
export const observer = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

     
      console.log(user);
      console.log("existe usuario activo");
      console.log("*****************");
      console.log(user.emailVerified);
      console.log("*****************");
        

      var email = user.email;
      
      var displayName = user.displayName;
      //var userPhoto = user.photoURL;
      // userName.textContent = displayName;
      // userImage.style.backgroundImage= "url("+userPhoto+")";
      console.log("displayName = " + displayName);
      console.log("email = " + email);

      aparece(user);

      // if(!user.displayName && user.email){
      //   getName(user.email);
      // }      
      // let photoURL = "assets/img/iconuser.jpg";
      // if(user.photoURL){
      //   photoURL= user.photoURL;
      // }       
     return true;

      //var photoURL = user.photoURL;
      //var isAnonymous = user.isAnonymous;
      //var uid = user.uid;
      //var providerData = user.providerData;
      // return true;
      // User is signed in.
    }
    
    if(!user) {
      console.log("  NO    existe usuario Activo   ");
      
      // User is signed out.
      // ...
   
  

      return false;
    }

    

  });
  
};


//Funcion Aparece
function aparece(user) {
  
  var user = user;
  if (user.emailVerified) {
    
     templateMuro();
     
   return true 
  }
  if (!user.emailVerified) {
   
      console.log("el correo no ha sido verificado");
      
      window.location.hash = "#/login";
    }

}

//Función VerificacionCorreo
export const verificationEmail = () => {
  // para enviar un mensaje de direccion a un usuario ...
  var user = firebase.auth().currentUser;

  user.sendEmailVerification()

    .then(function () {
      console.log("se envia mje de verificacion ");
      
    })

    .catch(function (error) {
      console.log("no se envia correo de verificacion");
      // Ha ocurrido un error.
    });
};

//Función Cerrar Sesión
export const signOutRedSocial = () => {
  
  firebase.auth().signOut()
    .then(function () {
      // aqui no va al login aqui se cierra la sesion hacer un cuadro de salida
      console.log("La sesion ha sido cerrada...");
      window.location.hash = "#/home";
      // Sign-out successful.
    })
    .catch(function (error) {
      // An error happened.
    });
};

