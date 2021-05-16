const signInWithGoogleButton = document.getElementById("signInWithGoogle");

const auth = firebase.auth();

const signInWithGoogle = () => {
    const googleProv = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(googleProv)
    .then(() => {
        window.location.assign('src/app/user-register/user-register.component.html');
    })
    .catch(error => {
        console.error(error);
    })
}

signInWithGoogleButton.addEventListener('click', signInWithGoogle);