//Import das variaveis usadas para pegar os valores do input do usuario

const firebase = require("firebase");

require("firebase/firestore");

//Inicializa a api do firebase
firebase.initializeApp({
    apiKey: "AIzaSyBIJDLxTwugwYso0aQpVDWtbX-nDXgQqLw",
    authDomain: "buscarddbserver.firebaseapp.com",
    databaseURL: "https://buscarddbserver.firebaseio.com",
    projectId: "buscarddbserver",
    storageBucket: "buscarddbserver.appspot.com",
    messagingSenderId: "141036418142"
});

//Declaração do banco de dados
var db = firebase.firestore();

//Cria o documento contendo os dados dentro da coleção userdata
db.collection("userData").add({
    Name: "Gustavo",
    LastName: "Carneiro Fleck",
    Mail: "gustavocfleck@gmail.com",
    CPF: "03638033007",
    CellphoneNumber: "051998597222"
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

//Id e objeto salvo no firestore
db.collection("userData").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});

