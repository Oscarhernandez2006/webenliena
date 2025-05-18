const validardatos = () => {
  const usuario = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  if (usuario == "" && password == "") {
    alert("Campos vacíos! Por favor, completa todos los campos antes de continuar");
  } else if (usuario == "admin" && password == "1234") {
    alert("Bienvenido Admin");
    window.location.href = "./admin.html";
  } else if (usuario == "user" && password == "1234") {
    alert("Bienvenido User");
    window.location.href = "./empleado.html";
  } else {
    alert("Usuario o contraseña incorrecto");
    window.location.href = "./login.html";
  }
};
