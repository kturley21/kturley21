// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-analytics.js";



const firebaseConfig = {
    apiKey: "AIzaSyAv8k__ZQY-THKIoA74T92bQsIm2J0wlX4",
    authDomain: "chroma-bd8d0.firebaseapp.com",
    databaseURL: "https://chroma-bd8d0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chroma-bd8d0",
    storageBucket: "chroma-bd8d0.appspot.com",
    messagingSenderId: "463187228237",
    appId: "1:463187228237:web:42d9ab4287c0a4dfb54e04",
    measurementId: "G-V3KJ07RPWY"
  };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialise firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('residentInfo');

// Listen for form submit
document.getElementById('resForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    var room = getInputVal('room');
    var age = getInputVal('age');
    var gender = getInputVal('gender');
    var weight = getInputVal('weight');
    var type = getInputVal('type');
    var state = getInputVal('state');
    var time = getInputVal('time');
    var drugs = getInputVal('drugs');
    var message = getInputVal('message');

    console.log(room, age, gender, weight, type, state, time, drugs, message);

    // Save message
    saveMessage(room, age, gender, weight, type, state, time, drugs, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';
    
    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
    
    // Clear form
    document.getElementById('residentForm').reset();
    
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;

}

// Save message to firebase
function saveMessage(room, age, gender, weight, type, state, time, drugs, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        room : room,
        age: age,
        gender: gender,
        weight: weight,
        type: type
        state : state,
        time: time,
        drugs: drugs,
        message: message
    });
}
