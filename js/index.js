const enlaces = document.querySelectorAll('.enlaces a');

enlaces.forEach((enlace) => {
  enlace.addEventListener('click', function (event) {

    const elementoActivo = document.querySelector('.enlaces .active');
    elementoActivo.classList.remove('active');

    enlace.classList.add('active');
  });
});