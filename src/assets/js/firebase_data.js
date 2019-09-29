//Inicializar con Cloud firestore 

//HU4 Comenzando a Guardar Data
//agregando a la collection Users
//Datos input template registry 
export let saveRegistryData = ()=> {

    let db = firebase.firestore();
    let user = document.getElementById('signup-user').value;
    let age = document.getElementById('signup-age').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;

    db.collection("users").add({
        user: user,
        
        age: age,
        email: email,
        password: password
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
}

// HU4 Guardando Data
//agregando a la collection Posts
export let savePostData = () => {

    let dbPost = firebase.firestore();
    let event = document.getElementById('event').value;
    let address = document.getElementById('address').value;
    let subway = document.getElementById('subway').value;
    let date = document.getElementById('date').value;
    let message = document.getElementById('message').value;

        dbPost.collection("post").add({
          
            event: event,
            address: address,
            subway: subway,
            date: date,
            message: message       
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            // document.getElementById("textpost").value=''; 
            document.getElementById('event').value=''; 
            document.getElementById('address').value=''; 
            document.getElementById('subway').value=''; 
            document.getElementById('date').value=''; 
            document.getElementById('message').value=''; 
            window.location.hash="#/muro";
            
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });


}

// ----------------------------------------------------------------------------------------------------
// Read Data documents
export let getName = () =>{
    // let usuario 
  
     let db = firebase.firestore();
  
    //  let paraghaphName = document.getElementById('paraghaphName');
   
     db.collection('users').onSnapshot((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {

            document.getElementById('publications-users').innerHTML+=`<p class="paraghaphName" >${doc.data().user}</p>`;
            console.log(doc.data().user);
            
     })

     });
 }

// Read Data documents
export let getDataPost = () =>{
   // let usuario 
    let db = firebase.firestore();
    let tabla = document.getElementById('tabla');
  
    db.collection("post").onSnapshot((querySnapshot) => {
       // tabla.innerHTML = '';
        // usar parametro user
        querySnapshot.forEach((doc) => {

            console.log(`${doc.id} => ${doc.data().user}`); // dato nombre usuario con id 
            console.log( doc.data());// json con los valores ingresados para publicar el evento

            tabla.innerHTML += `
            <div>
            <tr>
            <!--<th scope="row">${doc.data().user}</th>-->
            <td>${doc.data().event}</td>
            <!--<td>${doc.data().address}</td>-->
            <td>${doc.data().subway}</td>
            <td>${doc.data().date}</td>
            <td>${doc.data().message}</td>
            </tr>
            </div>
          `
          
        });
    });
}