// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}

//create a variable to store the status of the box (true or false)
let clicked = false;

//select HTML link that will be clicked
const aboutBtn = document.querySelector("#about");
//select box
const box = document.querySelector("#box");

//add event listener to the link to listen for click
aboutBtn.addEventListener("click", function() {
  //if clicked = false hide the box with CSS display:none and change clicked to true
  if(!clicked) {
    box.style.display = "none";
    clicked = true;
  } else {
      //if clicked = true show the box with CSS display:block and change clicked to false
    box.style.display = "block";
    clicked = false;
  }
  
})






// john Work



var config = {
    apiKey: "AIzaSyDHJ6F6qAtzhcwQ1RxB6koiOEEmGvQGmh8",
    authDomain: "demoday-222ed.firebaseapp.com",
    databaseURL: "https://demoday-222ed.firebaseio.com",
    projectId: "demoday-222ed",
    storageBucket: "demoday-222ed.appspot.com",
    messagingSenderId: "470147529572"
    };


firebase.initializeApp(config);

const txtEmail = document.getElementById('txtEmail');
const txtPass = document.getElementById('txtPass');
const txtName = document.getElementById('txtName');
const btnLogin = document.getElementById('buttonLogin');
const btnSignup = document.getElementById('buttonSignUp');
const btnLogout = document.getElementById('buttonLogout');
const fileInput = document.querySelector('#file');
const email = document.getElementById('txtEmail');

function clearInput() {
 txtEmail.value = "";
 txtPass.value = "";
 txtName.value = "";
}

btnLogin.addEventListener('click', e => {//Log in users
 const email = txtEmail.value;
 const pass = txtPass.value;
 const auth = firebase.auth();

 const promise = auth.signInWithEmailAndPassword(email,pass);
 promise.catch(e => console.log(e.message));

 clearInput();
})

btnSignup.addEventListener('click', e => {//Sign up new account
 const email = txtEmail.value;
 const pass = txtPass.value;
 const name = txtName.value;
 const auth = firebase.auth();

 // writeUserData(email, name);
 const promise = auth.createUserWithEmailAndPassword(email,pass);
 promise.then(u => {
   firebase.database().ref('users/' + auth.currentUser.uid).set({
     email: email,
     username: name
   });



   const file = fileInput.files[0];
   
   firebase.storage().ref().child('users/' + auth.currentUser.uid).put(file).then(function(result) {
      console.log('success');
   }).catch(function(error) {
      console.log('error', error);
   });

   clearInput();
 });

 promise.catch(function() { console.log(e.message)});
})

btnLogout.addEventListener('click', e => {//Logs out user
 firebase.auth().signOut();
 clearInput();
})

firebase.auth().onAuthStateChanged(firebaseUser => {//if logged in or logged out, clear or make visible the logut
 if(firebaseUser) {
   btnLogout.style.display = "inline";
   fileInput.style.display = 'inline'
 }
 else {
   btnLogout.style.display = "none";
   fileInput.style.display = 'none'
 }
})

function writeUserData(email, name) {//adds user data to the database
 firebase.database().ref('users/' + firebase.auth.currentUser.uid).set({
   email: email,
   name: name
 });
}





//JUSTINS DRAFT



// const usernameElement = document.getElementById("username");
// const messageElement = document.getElementById("message");
// const button = document.getElementById("submitButton");
// button.addEventListener("click",updateDB);

// //Set database object here
// const database = firebase.database().ref();

// /**
//  * Updates the database with the username and message.
//  */
// function updateDB(event){
//     event.preventDefault();
//     const username        = usernameElement.value;
//     const message         = messageElement.value;

//     usernameElement.value = "";
//     messageElement.value  = "";

//     console.log(username + " : " + message);

//     //Update database here
//     const data = {  //newMessage
//         USERNAME: username,
//         MESSAGE: message
//     }
//     database.push(data);
// }
// function updateUI(data){         //message
//     const allMessagesDiv = document.getElementById('allMessages')
//     const messageDiv = document.createElement('p');
//     messageDiv.innerText = data.username + ':' + data.message;
//     allMessagesDiv.appendChild(messageDiv); 


// }
// // Set database "child_added" event listener here
// database.on("child_added", function (dataRef){
//     const data = dataRef.val();  
//     updateUI(data);
// })
// const auth = firebase.auth();
// auth.signIWithEmailandPassword(email,pass);
// auth.createUserWithEmailAndPassword(email,pass);
// auth.onAuthStateChanged(firebaseUser =>{});