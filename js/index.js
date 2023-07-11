
const enlaces = document.querySelectorAll('.enlaces a');

enlaces.forEach((enlace) => {
  enlace.addEventListener('click', function (event) {

  const elementoActivo = document.querySelector('.enlaces .active');
    elementoActivo.classList.remove('active');

    enlace.classList.add('active');
  });
});


function cambiarDisplayForm(tipoDisplay) {

  const elemento = document.getElementById("section-consultas");

  elemento.style.display = tipoDisplay;

}


function validarLongitudTextArea(){

  var texto= document.getElementById("mensaje").value;

  var tamanioMaximo = 1500;

  if (texto.length > tamanioMaximo) {

    alert("La longitud del mensaje debe ser menor a " + tamanioMaximo + " caracteres.");

    return false;

  }

  return true;
}


function validarCamposObligatorios(){
  
  const nombreApellido = document.getElementById("nombre-apellido").value;

  const email = document.getElementById("email").value;

  const mensaje = document.getElementById("mensaje").value;

  if (nombreApellido === "" || email === "" || mensaje === "") {

    alert("Por favor complete todos los campos");
    return false;

  }

  return true;
}


function validarConsulta() {

  if(validarLongitudTextArea() && validarCamposObligatorios()) {

    alert("Su mensaje fue enviado correctamente a Brisabed");

    cambiarDisplayForm('none');

  }

}