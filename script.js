 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
 //   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
    apiKey: "AIzaSyAtrsQetcbcBvoIWu-588Id4PhETHquudw",
    authDomain: "karna-d5654.firebaseapp.com",
    databaseURL: "https://karna-d5654-default-rtdb.firebaseio.com",
    projectId: "karna-d5654",
    storageBucket: "karna-d5654.appspot.com",
    messagingSenderId: "276059428712",
    appId: "1:276059428712:web:bbb6c750e08528603c28dd",
    measurementId: "G-Y8YNE6ZRDE"
  };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
 //   const analytics = getAnalytics(app);
 
   import {getDatabase, ref, get, set, child, update, remove}
         from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js"
     const db= getDatabase();
 
         var enterID = document.querySelector("#enterID");
         var enterName = document.querySelector("#enterName");
         var enterAge = document.querySelector("#enterAge");
         var enterPno = document.querySelector("#enterPno");
         var enterEmail = document.querySelector("#enterEmail");
         var findID = document.querySelector("#findID");
         var findName = document.querySelector("#findName");
         var findAge = document.querySelector("#findAge");
         var findEmail = document.querySelector("#findEmail");
         var findPno = document.querySelector("#findPno");
       
 
         var insertBtn = document.querySelector("#insert");
        //  var updateBtn = document.querySelector("#update");
        //  var removeBtn = document.querySelector("#remove");
        //  var findBtn = document.querySelector("#find");
 
         function InsertData() {
             set(ref(db, "People/"+ enterID.value),{
                 Name: enterName.value,
                 ID: enterID.value,
                 Age: enterAge.value,
                 Email: enterEmail.value,
                 Pno: enterPno.value
             })
             .then(()=>{
                 alert("Data added successfully");
                 window.open("pic.html");
             })
             .catch((error)=>{
                 alert(error);
             });
         }
         function FindData() {
             const dbref = ref(db);
 
             get(child(dbref, "People/" + findID.value))
             .then((snapshot)=>{
                 if(snapshot.exists()){
                     findName.innerHTML = "Name: " + snapshot.val().Name;
                     findAge.innerHTML = "Result: " + snapshot.val().Age;
                     console.log("yes");
                 } else {
                     alert("No data found");
                 }
             })
             .catch((error)=>{
                 alert(error)
             })
             
         }
         function UpdateData(){
            update(ref(db, "People/"+ enterID.value),{
                Name: enterName.value,
                Age: enterAge.value
            })
            .then(()=>{
                alert("Data updated successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }

        function RemoveData(){
            remove(ref(db, "People/"+ enterID.value))
            .then(()=>{
                alert("Data deleted successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }
 
 
 
 
 
 
         insertBtn.addEventListener('click', InsertData);
        //  updateBtn.addEventListener('click', UpdateData);
        //  removeBtn.addEventListener('click', RemoveData);
        //  findBtn.addEventListener('click', FindData);
 