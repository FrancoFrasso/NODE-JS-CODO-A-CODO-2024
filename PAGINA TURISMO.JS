//DATOS EN JSON


const datos = [
    {
        id:1,
        titulo:"CERRO OTTO",
        subtitulo: "En la cima de la diversión",
        img: "img/CERRO OTTO.png",
        enlace: "./CERRO OTTO TURISMO.html",
        texto:"Este cerro posee un camino principal y numerosos senderos de montaña para practicar mountain bike y senderismo de corto recorrido. Es posible acceder a la cima mediante un camino para vehículos o mediante un teleférico que parte desde su base. En las zonas superiores de la montaña encontrarás, durante el invierno, pistas para la práctica de esquí nórdico y otras para esquí andino."
    },

    {
        id:2,
        titulo:"ISLA VICTORIA",
        subtitulo: "Hermosa y milenaria isla",
        img: "img/ISLA VICTORIA.jpg",
        enlace: "./ISLA VICTORIA TURISMO.html",
        texto:"Cabalgatas, trekking o salidas en mountain bike son algunas de las opciones que proveen los senderos de la isla. Por otro lado, los paseos lacustres al Bosque de Arrayanes llegan a ese lugar único en el mundo tanto desde Bariloche como desde Villa La Angostura por medio de una navegación por el lago Nahuel Huapi."
    },

    {
        id:3,
        titulo:"CIRCUITO CHICO",
        subtitulo:"El bosque, el lago y las montañas unidos para recibirte",
        img: "img/CIRCUITO CHICO.png",
        enlace: "./CIRCUITO CHICO TURISMO.html",
        texto:"Un paseo atrapante en el que la ciudad, los bosques, los lagos y las montañas se integran en un solo paisaje."
    },

    {
        id:4,
        titulo:"CERRO TRONADOR",
        subtitulo:"Glaciares imponentes",
        img: "img/CERRO TRONADOR.png",
        enlace: "./CerroTronador TURISMO.html",
        texto:"Se encuentra en la zona sur de la cordillera de los Andes, en la frontera entre Argentina y Chile. Separa dos parques nacionales: el Nahuel Huapi, en las provincias de Río Negro y Neuquén, Argentina; y el Vicente Pérez Rosales en la provincia de Llanquihue, Chile."
    }
];

//selector de items

const img = document.getElementById("img-paisaje");
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const info = document.getElementById("info");

const atrasBtn = document.querySelector(".atras-btn");
const siguienteBtn = document.querySelector(".siguiente-btn")


//set item actual

let itemActual = 0;

//cargar item inicial

window.addEventListener ("DOMContentLoaded", function(){
    const item = datos [itemActual];
    img.src = item.img;
    titulo.textContent = item.titulo;
    subtitulo.textContent = item.subtitulo;
    info.textContent = item.texto;
    

    
});

//Mostrar el paisaje en base al numero de Item

function mostrarPaisaje (paisaje) {
    const item = datos [paisaje];
    img.src = item.img;
    titulo.textContent = item.titulo;
    subtitulo.textContent = item.subtitulo;
    info.textContent = item.texto;
    img.parentElement.href = item.enlace;
}

//muestro el siguiente paisaje

siguienteBtn.addEventListener("click", function(){
    itemActual++;
    if(itemActual > datos.length -1){
        itemActual =0;
    }

    mostrarPaisaje(itemActual);
   
}

)

//muestro el paisaje anterior

atrasBtn.addEventListener("click", function(){
    itemActual--;
    if(itemActual < 0){
        itemActual =datos.length -1;
    }

    mostrarPaisaje(itemActual);
}

);
//VALIDACION FORMULARIO DE CONTACTO

function guardarPersona(event){
    event.preventDefault();
  
    let formulario = document.getElementById('formulario');
    let nombre =formulario.elements['nombre'].value;
    let ciudad =formulario.elements['ciudad'].value;
    let provincia =formulario.elements['provincia'].value;
    let cp =formulario.elements['cp'].value;
    let telefono =formulario.elements['telefono'].value;
    let mail =formulario.elements['mail'].value;
    let mensaje =formulario.elements['mensaje'].value;
  
  //Si no es un nombre o una ciudad valida, retorna al formulario y no avanza al datos.html
   if (nombre.length <3){
    alert('Debe ser un nombre valido')
    return
   }
   else if (ciudad.length <3){
    alert('Debe ser una ciudad valida')
    return
   }
  
  
  let persona ={
    nombre:nombre,
    ciudad:ciudad,
    provincia:provincia,
    cp:cp,
    telefono:telefono,
    mail:mail,
    mensaje:mensaje,
  }
  
  localStorage.setItem('persona', JSON.stringify(persona));
//   window.location.href="datos.html"
//formulario
var form = document.getElementById("formulario");
debugger;
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset();
      alert("Gracias por completar el formulario");
      
    } else {
      response.json().then(data => {
          status.innerHTML = "Hubo un problema al enviar su formulario"
        }
      )
    }
  }).catch(error => {
    status.innerHTML = "Hubo un problema al enviar su formulario"
  });
}
form.addEventListener("submit", handleSubmit)
;
  }








//SlideToggle con JQUERY

$(document).ready(function(){
    var estado = false;
    $('#btn-form').on('click',function(){
        $('.FORMULARIO01').slideToggle();
    });
    if (estado == true) {
        $(this).text("Abrir");
    } else {
        $(this).text("Cerrar");
    }
});
