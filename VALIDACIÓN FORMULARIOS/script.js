const firebaseConfig = {
    apiKey: "AIzaSyA-lILzGh-nhvd24UixwrPPv0TbkX-drc8",
    authDomain: "datos-de-formulario-20da1.firebaseapp.com",
    projectId: "datos-de-formulario-20da1",
    storageBucket: "datos-de-formulario-20da1.appspot.com",
    messagingSenderId: "514590771027",
    appId: "1:514590771027:web:479973ace16f72513f43a6"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();


document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Validar campo Nombre
    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');

    if(entradaNombre.value.trim() === ''){
        errorNombre.textContent = 'Por favor, introduce tu nombre';
        errorNombre.classList.add('error-message');
    }else {
        errorNombre.textContent = '';
        errorNombre.classList.remove('error-message');
    }

    // Validar correo electrónico
    let emailEntrada = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(emailEntrada.value)){
        emailError.textContent = 'Por favor, introduce un email valido';
        emailError.classList.add('error-message');
    }else {
        emailError.textContent = '';
        emailError.classList.remove('error-message');
    }

    // Validar la contraseña
    let contrasenaEntrada = document.getElementById('password');
    let contrasenaError = document.getElementById('passwordError');

    if(contrasenaEntrada.value.length < 8){
        contrasenaError.textContent = 'La contraseña debe de tener al menos 8 caracteres';
        contrasenaError.classList.add('error-message');
    }else {
        contrasenaError.textContent = '';
        contrasenaError.classList.remove('error-message');
    }

    // Si todos los campos son válidos enviar formulario
    if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {
        db.collection("users").add({
          nombre: entradaNombre.value,
          email: emailEntrada.value,
          password: contrasenaEntrada.value
        })
        .then((docRef) => {
          alert('El formulario se ha enviado con éxito', docRef.id);
          document.getElementById('formulario').reset();
        })
        .catch((error) => {
          alert(error);
        });
    }


});

