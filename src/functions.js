
const tamaño = document.querySelector("#tamaño");
const productos = document.querySelector("#gomitas");
var tamañoPedidoGrd = document.getElementById("tamañoGrd");
var tamañoPedidoChi = document.getElementById("tamañoChi");
var cantidadGomitas = 0;
var cantidadBotana = 0;
var cantidadFruta = 0;
var tamañoGrande = false;
var tamañoChico = false;
var tamañoElegido = false;
//Tamaño de pedido.
tamañoPedidoGrd.addEventListener('click', pedidoGrande, true);
tamañoPedidoChi.addEventListener('click', pedidoChico, true);

//funciones de tamaño
function acceptedGrd(){
    tamañoPedidoGrd.classList.add("glassSelect");
    tamañoPedidoGrd.classList.remove("bg-transparent");
}
function pedidoGrande(){
    if(tamañoGrande){
        tamañoGrande = false;
        tamañoElegido = true;
        tamañoPedidoGrd.classList.add("glassSelect");
        tamañoPedidoGrd.classList.remove("bg-transparent");
        tamañoPedidoChi.classList.remove("glassSelect");
        tamañoPedidoChi.classList.add("bg-transparent");
        cantidadGomitas = 12; 
        cantidadBotana = 3;
        cantidadFruta = 4;
    }else{
        tamañoGrande = true;
        tamañoElegido = false;
        tamañoPedidoGrd.classList.remove("glassSelect");
        tamañoPedidoGrd.classList.add("bg-transparent");
        cantidadGomitas = 0; 
        cantidadBotana = 0;
        cantidadFruta = 0;
    }
    
}
function pedidoChico(){
    if(tamañoChico){
        tamañoChico = false;
        tamañoElegido = true;
        tamañoPedidoChi.classList.add("glassSelect");
        tamañoPedidoChi.classList.remove("bg-transparent");
        
        tamañoPedidoGrd.classList.remove("glassSelect");
        tamañoPedidoGrd.classList.add("bg-transparent");
        cantidadGomitas = 6; 
        cantidadBotana = 2;
        cantidadFruta = 2;
    }else{
        tamañoChico = true;
        tamañoElegido = false;
        tamañoPedidoChi.classList.remove("glassSelect");
        tamañoPedidoChi.classList.add("bg-transparent");
        cantidadGomitas = 0; 
        cantidadBotana = 0;
        cantidadFruta = 0;
    }
    
}

// variables de cada producto.

var elegir = document.getElementById("elegir");
var chips = document.getElementById("chips"),
    chipClick = document.getElementById("chipsSelect"),
    chipSelect = false;
var panditas = document.getElementById("panditas"),
    panditaClick = document.getElementById("panditaSelect"),
    panditaSelect = false;
var manguitos = document.getElementById("manguitos"),
    manguitoClick = document.getElementById("manguitoSelect"),
    manguitoSelect = false;
var gusanitos = document.getElementById("gusanitos"),
    gusanitoClick = document.getElementById("gusanitoSelect"),
    gusanitoSelect = false;
var aciditos = document.getElementById("aciditos"),
    aciditoClick = document.getElementById("aciditoSelect"),
    aciditoSelect = false;
var mangosEnchilados = document.getElementById("mangosEnchilados"),
    mangoEnchiladoClick = document.getElementById("mangoEnchiladoSelect"),
    mangoEnchiladoSelect = false;
var picafresas = document.getElementById("picafresas"),
    picafresaClick = document.getElementById("picafresaSelect"),
    picafresaSelect = false;


// mensaje de whatssapp
const enviarMensaje =() => {
    var win=window.open(`https://wa.me/2212808270?text=Hola%20ya%20realice%20mi%20pedido`, 'blank');
}
const pedidoListo = document.getElementById('send');
pedidoListo.addEventListener('click', enviarMensaje);
pedidoListo.addEventListener('click', () => {
    //creacion de la captura de pantalla.
    html2canvas(productos).then(function(canvas) {
        let enlace = document.createElement('a');
        enlace.download = "Captura de pagina web.png";
        enlace.href = canvas.toDataURL('/imagenPrueba.png');
        // enlace.click();
        // contenedorCanvas.appendChild(canvas);
    });
});



//eventos que llaman a las funciones. Cada producto es un evento.

elegir.addEventListener('click', acceptedGrd, true);
chipClick.addEventListener('click', opacityChip, true);
panditaClick.addEventListener('click', opacityPandita, true);
manguitoClick.addEventListener('click', opacityManguito, true);
gusanitoClick.addEventListener('click', opacityGusanito, true);
aciditoClick.addEventListener('click', opacityAcidito, true);
mangoEnchiladoClick.addEventListener('click', opacityMangoEnchilado, true);
picafresaClick.addEventListener('click', opacityPicafresa, true);


// Aqui empiezan las funciones.

function opacityChip(){
    if(tamañoElegido){
        if(chipSelect){
            chipSelect = false;
            chips.classList.add("glassSelect");
            chips.classList.remove("bg-transparent");
        }else{
            chipSelect = true;
            chips.classList.remove("glassSelect");
            chips.classList.add("bg-transparent");
        }
    }else {
        $('#miModal').modal('show');
    }
}
function opacityPandita(){
    if(tamañoElegido){
        if(panditaSelect){
            panditaSelect = false;
            panditas.classList.add("glassSelect");
            panditas.classList.remove("bg-transparent");
        }else{
            panditaSelect = true;
            panditas.classList.remove("glassSelect");
            panditas.classList.add("bg-transparent");
        }
    }else {
        $('#miModal').modal('show');
    }
}
function opacityManguito(){
    if(tamañoElegido){
        if(manguitoSelect){
            manguitoSelect = false;
            manguitos.classList.add("glassSelect");
            manguitos.classList.remove("bg-transparent");
        }else{
            manguitoSelect = true;
            manguitos.classList.remove("glassSelect");
            manguitos.classList.add("bg-transparent");
        }
    }else {
        $('#miModal').modal('show');
    }
}
function opacityGusanito(){
    if(tamañoElegido){
        if(gusanitoSelect){
            gusanitoSelect = false;
            gusanitos.classList.add("glassSelect");
            gusanitos.classList.remove("bg-transparent");
        }else{
            gusanitoSelect = true;
            gusanitos.classList.remove("glassSelect");
            gusanitos.classList.add("bg-transparent");
        }
    }else {
        $('#miModal').modal('show');
    }
}
function opacityAcidito(){
    if(tamañoElegido){
        if(aciditoSelect){
            aciditoSelect = false;
            aciditos.classList.add("glassSelect");
            aciditos.classList.remove("bg-transparent");
        }else{
            aciditoSelect = true;
            aciditos.classList.remove("glassSelect");
            aciditos.classList.add("bg-transparent");
        }
    }else {
        $('#miModal').modal('show');
    }
}
function opacityMangoEnchilado(){
    if(mangoEnchiladoSelect){
        mangoEnchiladoSelect = false;
        mangosEnchilados.classList.add("glassSelect");
        mangosEnchilados.classList.remove("bg-transparent");
    }else{
        mangoEnchiladoSelect = true;
        mangosEnchilados.classList.remove("glassSelect");
        mangosEnchilados.classList.add("bg-transparent");
    }
    
}


