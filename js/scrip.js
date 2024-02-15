function login() {
  const user = "andresD";
  const password = "12345";

  let userCurrent = document.getElementById("user").value;
  let passwordCurrent = document.getElementById("password").value;

  if (userCurrent == user && passwordCurrent == password) {
    window.location = "/html/customers.html";
  } else {
    alert("Datos incorrectos");
  }
}
