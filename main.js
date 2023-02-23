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
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    console.log(name, company, email, phone, message);

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;

}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name : name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}
