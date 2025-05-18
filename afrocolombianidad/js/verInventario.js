const apiUrl = "http://127.0.0.1:8090/productos";
const contenedor = document.getElementById("contenedor");
const modalEditar = new bootstrap.Modal(document.getElementById("modalEditarProducto"));

const obtenerProductos = () => {
    axios.get(apiUrl)
        .then(response => {
            contenedor.innerHTML = response.data.message
                ? `<p class="text-center">${response.data.message}</p>`
                : response.data.map(producto => `
                    <div class="list-group-item d-flex justify-content-between align-items-center">
                        <span><strong>ID:</strong> ${producto.codigo} | <strong>Nombre:</strong> ${producto.nombre} | <strong>Precio:</strong> $${producto.precio} | <strong>Cantidad:</strong> ${producto.cantidad}</span>
                        <div>
                            <a href="javascript:eliminarProducto('${producto.codigo}')" class="btn btn-danger btn-sm me-2">Eliminar</a>
                            <a href="javascript:abrirFormularioEdicion('${producto.codigo}', '${producto.nombre}', ${producto.precio}, ${producto.cantidad}')" class="btn btn-primary btn-sm">Editar</a>
                        </div>
                    </div>
                `).join("");
        })
        .catch(error => console.error("Error al obtener productos:", error));
};

const eliminarProducto = (codigo) => {
    axios.delete(`http://127.0.0.1:8090/delete_producto/${codigo}`)
        .then(response => {
            alert(response.data.message);
            obtenerProductos();
        })
        .catch(error => console.error("Error al eliminar producto:", error));
};

const abrirFormularioEdicion = (codigo, nombre, precio, cantidad) => {
    document.getElementById("editCodigo").value = codigo;
    document.getElementById("editNombre").value = nombre;
    document.getElementById("editPrecio").value = precio;
    document.getElementById("editCantidad").value = cantidad;
    modalEditar.show();
};

const actualizarProducto = () => {
    const codigo = document.getElementById("editCodigo").value;
    const nuevoNombre = document.getElementById("editNombre").value.trim();
    const nuevoPrecio = parseFloat(document.getElementById("editPrecio").value);
    const nuevaCantidad = parseInt(document.getElementById("editCantidad").value);

    axios.put(`http://127.0.0.1:8090/editar_producto/${codigo}`, 
        { nombre: nuevoNombre, precio: nuevoPrecio, cantidad: nuevaCantidad },
        { headers: { "Content-Type": "application/json" } }
    )
    .then(response => {
        alert(response.data.message);
        modalEditar.hide();
        obtenerProductos();
    })
    .catch(error => console.error("Error al actualizar producto:", error));
};

obtenerProductos();
setInterval(obtenerProductos, 5000); // Actualiza la lista cada 5 segundos
