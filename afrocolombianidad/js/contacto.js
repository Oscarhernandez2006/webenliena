let infoForm = {}; 
let tabla = document.getElementById("tablacontacs"); 


const enviarmensaje = () => {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    axios({
        method: 'POST',
        url: 'http://127.0.0.1:8090/add_mensaje',  
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            email: email,
            mensaje: mensaje
        }),
    })
    .then(function (response) {
        alert("Mensaje Enviando");
        window.location.href = './contacto.html';
    })
    .catch(err => console.log('Error: ', err));
}



const subirproducto = () => {
    const nombre = document.getElementById('nombre_product').value;
    const cod = document.getElementById('cod').value;
    const precio = document.getElementById('precio').value;
    const cantidad = document.getElementById('cantidad').value;

    axios({
        method: 'POST',
        url: 'http://127.0.0.1:8090/add_producto',  
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
            nombre: nombre,
            codigo: cod,
            precio: precio,
            cantidad: cantidad
        }),
    })
    .then(function (response) {
        alert("Producto Agregado con Exito");
        window.location.href = './agregarproducto.html';
    })
    .catch(err => console.log('Error: ', err));
}

const ventanaproducto = () => {
    window.location.href = './agregarproducto.html';
}
const ventanainventario = () => {
    window.location.href = './verInventario.html';
}
const ventanamensaje = () => {
    window.location.href = './verMensaje.html';
}