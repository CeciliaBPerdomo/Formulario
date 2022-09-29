// eslint-disable
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload --> ejecuta el codigo cuando se carga la pagina
window.onload = function envioFormulario(event) {
  //write your code here
  event.preventDefault();

  // Missing
  let mising = document.getElementById("missing");
  mising.style.display = "none";

  //boton de submit
  let envio = document.getElementById("envio");
  envio.addEventListener("click", chequeo);

  // chequeo
  function chequeo() {
    // Chequeo numero tarjeta
    let tarjeta = document.getElementById("tarjeta").value;
    let largotarj = tarjeta.length;
    //console.log(largotarj);
    if (tarjeta == "") {
      mising.style.display = "block";
      document.getElementById("card").className = "mb-5 alert alert-danger";
    } else if (largotarj !== 16) {
      //Chequea longitud tarjeta
      mising.style.display = "block";
      document.getElementById("card").className = "mb-5 alert alert-danger";
    }

    // Chequeo CVC
    let cvc = document.getElementById("CVC").value;
    let largocvc = cvc.length;
    //console.log("Largo cvc: " + largocvc);
    if (cvc == "") {
      mising.style.display = "block";
      document.getElementById("cvcalert").className = "mb-5 alert alert-danger";
    } else if (largocvc !== 3) {
      //chequea longitud cvc
      mising.style.display = "block";
      document.getElementById("cvcalert").className = "mb-5 alert alert-danger";
    }

    //Chequeo amount
    let amount = document.getElementById("amount").value;
    if (amount == "") {
      //alert("Campo Amount vacio");
      mising.style.display = "block";
      document.getElementById("amountalert").className =
        "mb-5 alert alert-danger";
    }

    //Chequeo First name
    let firstName = document.getElementById("firstName").value;
    if (firstName == "") {
      //alert("Campo First Name vacio");
      mising.style.display = "block";
      document.getElementById("firstAlert").className =
        "mb-5 alert alert-danger";
    }

    //Chequeo Last Name
    let lastName = document.getElementById("lastName").value;
    if (lastName == "") {
      //alert("Campo de Last Name vacio");
      mising.style.display = "block";
      document.getElementById("LastAlert").className =
        "mb-5 alert alert-danger";
    }

    // Chequeo city
    let city = document.getElementById("city").value;
    if (city == "") {
      //alert("Campo de ciudad vacio");
      mising.style.display = "block";
      document.getElementById("cityAlert").className =
        "mb-5 alert alert-danger";
    }

    //Chequeo departamento
    let select = document.getElementById("state");
    if (select.value == "Choose....") {
      mising.style.display = "block";
      document.getElementById("stateAlert").className =
        "mb-5 alert alert-danger";
    }

    // Chequeo codigo postal
    let postal = document.getElementById("postal").value;
    if (postal == "") {
      mising.style.display = "block";
      document.getElementById("postalAlert").className =
        "mb-5 alert alert-danger";
    }

    // Tipo de tarjeta de credito
    let elementoActivo = document.querySelector(
      'input[name="inlineRadioOptions"]:checked'
    );

    if (!elementoActivo) {
      mising.style.display = "block";
      document.getElementById("tarjetaAlert").className =
        "mb-5 alert alert-danger";
    }

    // Chequeo comentarios
    let comentarios = document.getElementById("comentarios").value;
    if (comentarios == "") {
      mising.style.display = "block";
      document.getElementById("comentarioAlert").className =
        "mb-5 alert alert-danger";
    }
  }
};
