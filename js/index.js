function handleLogin() {

    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;
    
    // Validación básica
    if (usuario.trim() === '' || contraseña.trim() === '') {
        alert('Debes de rellenar todos los campos');
        return false;
    }
    
    const datosLogin = {
        usuario: usuario,
        contraseña: contraseña,
        fecha: new Date().toLocaleString()
    };
    
    console.log('Datos del Login:', datosLogin);
    alert('Bienvenido ' + usuario);
    window.location.href = 'main-containt/index.html';
}


function handleRegister() {
    const usuario = document.getElementById('usuarioReg').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseñaReg').value;
    const confirmar = document.getElementById('confirmarContraseña').value;
    
    if (usuario.trim() === '' || email.trim() === '' || contraseña.trim() === '' || confirmar.trim() === '') {
        alert('Por favor completa todos los campos');
        return false;
    }
    
    if (contraseña !== confirmar) {
        alert('Las contraseñas no coinciden');
        return false;
    }
    
    const datosRegistro = {
        usuario: usuario,
        email: email,
        contraseña: contraseña,
        fecha: new Date().toLocaleString()
    };
    
    console.log('Datos del Registro:', datosRegistro);
    
    // Redirigir después del registro
    alert('Registro exitoso! Bienvenido ' + usuario);
    window.location.href = 'main-containt/index.html';
}
