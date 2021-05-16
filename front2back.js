var firebase_db = firebase.database();
// NIC = National Indetification Card
// user_path改成用google帳戶


function write_info_cus(){
    var user_path = document.getElementById("name").value
    firebase_db.ref(`/Cus/${user_path}`).set({
        name: document.getElementById("name").value,
        phone_number: document.getElementById("phone_number").value,
        NIC: document.getElementById("nic").value
    });
}

function write_info_store(){
    var store_path = document.getElementById("name").value
    firebase_db.ref(`/Store/${store_path}`).set({
        st_name: document.getElementById("").value
    });
}

function modify_user(){
    var user_path = document.getElementById("").value
    var mod = {
        name: document.getElementById("").value,
        phone_number: document.getElementById("").value,
        NIC: document.getElementById("").value
    }

    firebase_db.ref(`/Cus/${user_path}`).update(mod)
}

function modify_store(){
    var store_path = document.getElementById("").value
    var mod = {
        name: document.getElementById("").value,
        phone_number: document.getElementById("").value,
        NIC: document.getElementById("").value
    }

    firebase_db.ref(`/Store/${store_path}`).update(mod)
}

// pop up
const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });