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
var messagesRef = firebase.database().ref('falls');

// Listen for form submit
document.getElementById('fallForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    var room = getInputVal('room');
    var location = getInputVal('location');
    var date = getInputVal('date');
    var time = getInputVal('time');
    var message = getInputVal('message');

    console.log(room, location, date, time, message);

    // Save message
    saveMessage(room, location, date, time, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';
    
    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
    
    // Clear form
    document.getElementById('fallForm').reset();
    
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;

}

// Save message to firebase
function saveMessage(room, location, date, time, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        room : room,
        location: location,
        date: date,
        time: time,
        message: message
    });
}
