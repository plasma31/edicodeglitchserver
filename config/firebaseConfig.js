var firebase = require("firebase");
// const {Storage} = require('@google-cloud/storage');

// const gstorage = new Storage();


const firebaseconfig = {
    apiKey: "AIzaSyARka6EBPoWroAaexuCEZoFNxTl6-KbBww",
    authDomain: "edicodetor.firebaseapp.com",
    databaseURL: "https://edicodetor.firebaseio.com",
    projectId: "edicodetor",
    storageBucket: "edicodetor.appspot.com",
    messagingSenderId: "995035375636",
    appId: "1:995035375636:web:5b3d632046e059746edf01",
    measurementId: "G-KS4VF31NFX"
};

//   var serviceAccount = require("../masters/service.json");
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconfig);
 }
 
// firebase.initializeApp();
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     storageBucket: "wayzook-9ef82.appspot.com"
// });
// var db = firebase.database();
// var storage = firebase.storage();

var fbobj = {
  db: firebase.database(),
  auth: firebase.auth()
};
module.exports = fbobj;