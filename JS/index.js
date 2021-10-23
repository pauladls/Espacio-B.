// MENU DESPLEGABLE
document.querySelector(".itemmenu").innerHTML = `
<a name="arriba"></a>
<div class = "containermenu">
<div id="mySidenav" class="sidenav">
<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
<a href="index.html">HOME</a>
<a href="proyectos.html">PROYECTOS</a>
<a href="quienessomos.html">QUIENES SOMOS</a>
<a href="contacto.html">CONTACTO</a>
</div>

<span style="font-size:30px;cursor:pointer" onclick="openNav()"> 
<div class="barramenu"></div>
<div class="barramenu"></div>
<div class="barramenu"></div></span>

<div class="iconos">
                <a id="icono" href="https://twitter.com/?lang=es"><i class="fab fa-twitter"></i></a> 
                    <a id="icono" href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a> 
                        <a id="icono" href="https://www.instagram.com/espaciob.arq/?hl=es"><i class="fab fa-instagram-square"></i></a> 
                            <a id="icono" href="mailto:espaciob.arq@gmail.com"><i class="fas fa-envelope"></i></a> 
                            <a id="icono" href="phone:3364544417"><i class="fab fa-whatsapp"></i></a>
            
            
            
            </div></div>
`

// HEADER
document.querySelector(".header1").innerHTML = `
<header>
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
// NAV LINKS
document.querySelector(".nav").innerHTML = `

<div class="containernav">

<a href="index.html">HOME</a> /
               <a href="proyectos.html">PROYECTOS</a>  / 
               <a href="contacto.html">CONTACTO</a> / 
               <span id="spanquienes"> 
               <a href="quienessomos.html">QUIENES SOMOS</a> </span>
                
            </div>`
// FOOTER
document.querySelector(".footer").innerHTML = `
            <div class="containerfooter">

            
            <div class="footerbox">
            <h5>CONTACTO</h5> 
            <i class="fas fa-map-marker-alt"></i> San Luis 2021 <br>
            <i class="fas fa-map-marker-alt"></i> Rosario, Santa Fe, Argentina.<br>
            <i class="fab fa-whatsapp"></i> +543364544417<br>
            <i class="fas fa-envelope"></i> espaciob.arq@gmail.com<br>
                         </div>

            <div class="footerbox">
            <h5>REDES SOCIALES</h5> 
                <a id="icono" href="https://twitter.com/?lang=es"><i class="fab fa-twitter"></i></a> Twitter <br>
                    <a id="icono" href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a> Facebook <br>
                        <a id="icono" href="https://www.instagram.com/espaciob.arq/?hl=es"><i class="fab fa-instagram-square"></i></a> Instagram
                           
            </div>
            </div>`
// FOOTER ANCLA ARRIBA
document.querySelector(".footer2").innerHTML=`
<footer id="foot2">
<div><a href="#arriba">Ir arriba</a></div>
</footer>
`
// SIDENAV
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// FORMULARIO
function validar() {
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("lastname");
    var email = document.getElementById("email");

    checkInput(nombre);
    checkInput(apellido);
    checkInput(email);
}

function checkInput(elemento) {
    if (elemento.value == "") {
        elemento.style.border = "solid red 2px";
    }
}

