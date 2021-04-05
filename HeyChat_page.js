//YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyAfCCO-DiB4_yu0vPhMhK1z-uVz_kemGL8",
    authDomain: "kwitter-a3390.firebaseapp.com",
    databaseURL: "https://kwitter-a3390-default-rtdb.firebaseio.com",
    projectId: "kwitter-a3390",
    storageBucket: "kwitter-a3390.appspot.com",
    messagingSenderId: "1036707766721",
    appId: "1:1036707766721:web:1f812f75eceda253aacf40"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
roomname = localStorage.getItem("Roomname");

function send(){
    mesg= document.getElementById("mesg").value;
    firebase.database().ref(roomname).push({
          name:username,
          message:mesg,
          like:0
    });
    document.getElementById("mesg").value="";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();


function logout(){
    localStorage.removeItem("Roomname");
    localStorage.removeItem("username")
    window.location="index.html";
}