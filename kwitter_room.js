
var firebaseConfig = {
  apiKey: "AIzaSyCsCN4sV5K90ggxIMmJWIDTvD9ZZWou-DU",
  authDomain: "kwitter-2-3a059.firebaseapp.com",
  databaseURL: "https://kwitter-2-3a059-default-rtdb.firebaseio.com",
  projectId: "kwitter-2-3a059",
  storageBucket: "kwitter-2-3a059.appspot.com",
  messagingSenderId: "30687787133",
  appId: "1:30687787133:web:54ca7fd09e7db3b8cb9914"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    console.log(firebase);
   var addit=0;
   var addroom=0;
   function add(){
    addit=document.getElementById("addit").value;
    firebase.database().ref("/").child("addit").update({
          purpose="adding room name"
    });
    localStorage.setItem("addit",addit);