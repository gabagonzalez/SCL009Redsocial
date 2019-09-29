// function init 
export const initiationFirebase = () => {

    // Your web app's Firebase configuration
    let firebaseConfig = {
        apiKey: "AIzaSyBvoom8hD61pERzrj9U0A_JG-Wv_SV4NK0",
        authDomain: "scl009-social-network.firebaseapp.com",
        databaseURL: "https://scl009-social-network.firebaseio.com",
        projectId: "scl009-social-network",
        storageBucket: "scl009-social-network.appspot.com",
        messagingSenderId: "235312761586",
        appId: "1:235312761586:web:f21da5690203c765"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    return firebase.firestore();

}