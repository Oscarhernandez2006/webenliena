const cargarMensajes = () => {
    axios.get("http://127.0.0.1:8090/mensajes")
        .then(response => {
            if (response.data.mensajes.length > 0) {
                let html = `
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                    <th>Mensaje</th>
                                </tr>
                            </thead>
                            <tbody>
                `;

                response.data.mensajes.forEach((msg, index) => {
                    html += `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${msg.nombre}</td>
                            <td>${msg.apellido}</td>
                            <td>${msg.email}</td>
                            <td>${msg.mensaje}</td>
                        </tr>
                    `;
                });

                html += "</tbody></table></div>";
                contenedorMensajes.innerHTML = html;
            } else {
                contenedorMensajes.innerHTML = `
                    <div class="alert alert-warning text-center">No hay mensajes aún.</div>
                `;
            }
        })
        .catch(error => {
            console.error("Error al obtener los mensajes:", error);
            contenedorMensajes.innerHTML = `
                <div class="alert alert-danger text-center">Error al cargar los mensajes.</div>
            `;
        });
};


cargarMensajes();


setInterval(cargarMensajes, 5000);

