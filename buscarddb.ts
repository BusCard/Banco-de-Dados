//Import das variaveis usadas para pegar os valores do input do usuario

const firebase = require("firebase");

require("firebase/firestore");

//Inicializa a api do firebase
firebase.initializeApp({
    apiKey: "AIzaSyDcZPDUN6ddbywZYBpF_rDKojTrbVOokX8",
    authDomain: "buscarddbserver-54114.firebaseapp.com",
    databaseURL: "https://buscarddbserver-54114.firebaseio.com",
    projectId: "buscarddbserver-54114",
    storageBucket: "buscarddbserver-54114.appspot.com",
    messagingSenderId: "512882775679"
});

//Declaração do banco de dados
var db = firebase.firestore();

var userData = db.collection("userData");

userData.doc().set({
    name: "Gustavo",
    lastname: "Carneiro Fleck",
    mail: "gustavocfleck@gmail.com",
});
userData.doc("03638033007").get().then(function(doc) {
    if (doc.exists) {
        var dados = doc.data();
        var arr1 = Object.keys(dados);
        var arr2 = arr1.map(function (k) {
            return dados[k];
        });
        if (arr2[0] == "03638033007"){
            console.log(arr1[0],arr2[0]);
        } else {
            console.log("Diferentes");
        }
    } else {
        console.log("Cadastro não enccontrado.");
    }
}).catch(function(error) {
    console.log(error);
});


