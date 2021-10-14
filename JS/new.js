// FOOTER
document.querySelector(".footer").innerHTML=`
<div class="containerfooter">
 Derechos Reservados @2021 / Rosario, Santa Fe, Argentina

<div class="iconos">
    <a id="icono" href="twiter.com"><i class="fab fa-twitter"></i>
        <a id="icono" href="facebook.comm"><i class="fab fa-facebook-square"></i>
            <a id="icono" href="instagram/espaciob.arq"> <i class="fab fa-instagram-square"></i>
                <a id="icono" href="mailto:espaciob.arq@gmail.com"><i class="fas fa-envelope"></i></a>

                <a id="icono" href="phone:3364544417"> <i class="fab fa-whatsapp"></i></a>



</div>`

// HEADER
document.querySelector(".header").innerHTML=`
<header>
<div id="cuadroheader"></div>
<div>
    <h1>E S P A C I O B.</h1>
</div>
<div class="subheader">
    <div id="arq">ARQUITECTURA</div>
    <div id="y">Y</div>
    <div id="diseño">DISEÑO</div>
</div>
</header>
`
// NAV
document.querySelector(".nav").innerHTML=`
<div class="containernav">
               <a href="new.html">HOME</a> /
               <a href="newproyectos.html">PROYECTOS</a>  / 
               <a href="newregistro.html">REGISTRO </a> / 
               <span id="spanquienes"> 
                  <a href="newquienes.html">QUIENES SOMOS</a> </span>
                
            </div>`


// REGISTRO
function validar(){
  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("lastname");
  var email = document.getElementById("email");
  var pass = document.getElementById("password1");
  var pass2 = document.getElementById("password2");
  var date = document.getElementById("date");
  
  
  checkInput(nombre);
  checkInput(apellido);
  checkEmail(email);
  checkInput(pass);
  checkInput(pass2);
  checkInput(date);
}

function checkInput(elemento){
  if (elemento.value == ""){
      elemento.style.border = "solid red 2px";
  }
}

// function checkEmail(elemento) {
//     for (var i = 0; i < elemento.length; i++) {
//         if (elemento[i] !== "@" ){
//         alert("eso no es un mail");
// }
//     }
//   }


 function checkEmail(elemento) {
  for (var i = 0; i < elemento.length; i++) {
      if (elemento[i] != "@" ){
      alert("eso no es un mail");
}
  }
}



  /*  ASIDE2 MENU*/
  /* Set the width of the side navigation to 250px */
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
/*  ASIDE2 MENU*/


/*ASIDE1 PROYECTOS */
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
  /*ASIDE1 PROYECTOS */

  // FORMULARIO

// (function (){

//   var   formulario = document.getElementsById("id");
//         elemntos = formulario.elements;
//         boton = document.getElementById("id");

//   var validarNombre = function(e){
//     if (formulario.name.value == 0){
//       alert("Completa el campo Nombre");
//       e.preventDefault();
//     }
//   };

//   var validar = function(e){
//     validarNombre(e);
//   };

//         formulario.addEventListener("submit", validar);
// })

  // FORMULARIO


  // TEMPLATE STRING
