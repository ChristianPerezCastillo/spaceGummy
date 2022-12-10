import './mensaje.js'
var tamañoPedidoChico = document.getElementById("tamañoChico");
var chico = document.getElementById("chico");
var tamañoPedidoGrande = document.getElementById("tamañoGrande");
var grande = document.getElementById("grande");
var panditas = document.getElementById("panditaSelect");
var manguitos = document.getElementById("manguitoSelect");
var gusanitos = document.getElementById("gusanitoSelect");
var aciditos = document.getElementById("aciditoSelect");
var mangosEnchilados = document.getElementById("mangoEnchiladoSelect");
var picafresas = document.getElementById("picafresaSelect");
var aritos = document.getElementById("aritoSelect");
//Tamaño de pedido.
tamañoPedidoChico.addEventListener('click', opacityChico);
tamañoPedidoGrande.addEventListener('click', opacityGrande);
panditas.addEventListener('click', opacityPandita);
manguitos.addEventListener('click', opacityManguito);
gusanitos.addEventListener('click', opacityGusanito);
aciditos.addEventListener('click', opacityAcidito);
mangosEnchilados.addEventListener('click', opacityMangoEnchilado);
picafresas.addEventListener('click', opacityPicafresa);
aritos.addEventListener('click', opacityArito);
var clickChico = true,
    clickGrande = true,
    clickPandita = true,
    clickManguito = true,
    clickGusanito = true,
    clickAcidito = true,
    clickMangoEnchilado = true,
    clickPicafresa = true,
    clickArito = true,
    cantidadGomitas = 0,
    cantidadBotanas = 0,
    cantidadFrutas = 0;
function opacityArito(){
    if(clickArito != 0){
        if(clickArito){
            clickArito = false;
            aritos.classList.add("glass");
            aritos.classList.remove("bg-transparent");
            cantidadGomitas--,
            console.log(cantidadGomitas);
            console.log(cantidadBotanas);
            console.log(cantidadFrutas);
        }else{
            clickArito = true;
            aritos.classList.remove("glass");
            aritos.classList.add("bg-transparent");
            cantidadGomitas++,
            console.log(cantidadGomitas);
            console.log(cantidadBotanas);
            console.log(cantidadFrutas);
        }
    }else{
        $('#miModal').modal('show');
    }
    
    
}
function opacityPicafresa(){
    if(cantidadGomitas != 0){
        if(clickPicafresa){
            clickPicafresa = false;
            picafresas.classList.add("glassSelect");
            picafresas.classList.remove("bg-transparent");
            cantidadGomitas--,
            console.log(cantidadGomitas);
            console.log(cantidadBotanas);
            console.log(cantidadFrutas);
        }else{
            clickPicafresa = true;
            picafresas.classList.remove("glassSelect");
            picafresas.classList.add("bg-transparent");
            cantidadGomitas++,
            console.log(cantidadGomitas);
            console.log(cantidadBotanas);
            console.log(cantidadFrutas);
        }
    }else{
        $('#miModal').modal('show');
    }
    
    
}
function opacityMangoEnchilado(){
    if(cantidadGomitas != 0){
        if(clickMangoEnchilado){
            clickMangoEnchilado = false;
            mangosEnchilados.classList.add("glassSelect");
            mangosEnchilados.classList.remove("bg-transparent");
            cantidadGomitas--,
            console.log(cantidadGomitas);
            console.log(cantidadBotanas);
            console.log(cantidadFrutas);
        }else{
            clickMangoEnchilado = true;
            mangosEnchilados.classList.remove("glassSelect");
            mangosEnchilados.classList.add("bg-transparent");
            cantidadGomitas++,
            console.log(cantidadGomitas);
            console.log(cantidadBotanas);
            console.log(cantidadFrutas);
        }
    }else{
        $('#miModal').modal('show');
    }
    
    
}
function opacityAcidito(){
    if(cantidadGomitas != 0){
        if(clickAcidito){
            clickAcidito = false;
            aciditos.classList.add("glassSelect");
            aciditos.classList.remove("bg-transparent");
            cantidadGomitas--,
            console.log(cantidadGomitas);
            console.log(cantidadBotanas);
            console.log(cantidadFrutas);
        }else{
            clickAcidito = true;
            aciditos.classList.remove("glassSelect");
            aciditos.classList.add("bg-transparent");
            cantidadGomitas++,
            console.log(cantidadGomitas);
            console.log(cantidadBotanas);
            console.log(cantidadFrutas);
        }
    }else{
        $('#miModal').modal('show');
    }
    
    
}
function opacityGusanito(){
    if(cantidadGomitas != 0){
        if(clickGusanito){
            clickGusanito = false;
            gusanitos.classList.add("glassSelect");
            gusanitos.classList.remove("bg-transparent");
            cantidadGomitas--,
            console.log(cantidadGomitas);
            console.log(cantidadBotanas);
            console.log(cantidadFrutas);
        }else{
            clickGusanito = true;
            gusanitos.classList.remove("glassSelect");
            gusanitos.classList.add("bg-transparent");
            cantidadGomitas++,
            console.log(cantidadGomitas);
            console.log(cantidadBotanas);
            console.log(cantidadFrutas);
        }
    }else{
        $('#miModal').modal('show');
    }
    
    
}
function opacityPandita(){
    if(cantidadGomitas != 0){
    if(clickPandita){
        clickPandita = false;
        panditas.classList.add("glassSelect");
        panditas.classList.remove("bg-transparent");
        cantidadGomitas--,
        console.log(cantidadGomitas);
        console.log(cantidadBotanas);
        console.log(cantidadFrutas);
    }else{
        clickPandita = true;
        panditas.classList.remove("glassSelect");
        panditas.classList.add("bg-transparent");
        cantidadGomitas++,
        console.log(cantidadGomitas);
        console.log(cantidadBotanas);
        console.log(cantidadFrutas);
    }
}else{
    $('#miModal').modal('show');
}
}
function opacityManguito(){
    if(cantidadGomitas != 0){
        if(clickManguito){
            clickManguito = false;
            manguitos.classList.add("glassSelect");
            manguitos.classList.remove("bg-transparent");
            cantidadGomitas--,
            console.log(cantidadGomitas);
            console.log(cantidadBotanas);
            console.log(cantidadFrutas);
        }else{
            clickManguito = true;
            manguitos.classList.remove("glassSelect");
            manguitos.classList.add("bg-transparent");
            cantidadGomitas++,
            console.log(cantidadGomitas);
            console.log(cantidadBotanas);
            console.log(cantidadFrutas);
        }
    }else{
        $('#miModal').modal('show');
    }
    
}
function opacityChico(){
    if(clickChico){
        clickChico = false;
        chico.classList.add("glass");
        chico.classList.remove("bg-transparent");
        grande.classList.remove("glass");
        cantidadGomitas = 6,
        cantidadBotanas = 2,
        cantidadFrutas = 2;
        console.log(cantidadGomitas);
        console.log(cantidadBotanas);
        console.log(cantidadFrutas);
    }else{
        clickChico = true;
        chico.classList.remove("glass");
        chico.classList.add("bg-transparent");
        cantidadGomitas = 0,
        cantidadBotanas = 0,
        cantidadFrutas = 0;
        console.log(cantidadGomitas);
            console.log(cantidadBotanas);
            console.log(cantidadFrutas);
    }
    
}
function opacityGrande(){
    if(clickGrande){
        clickGrande = false;
        grande.classList.add("glass");
        grande.classList.remove("bg-transparent");
        chico.classList.remove("glass");
        cantidadGomitas = 12,
        cantidadBotanas = 4,
        cantidadFrutas = 4;
        console.log(cantidadGomitas);
            console.log(cantidadBotanas);
            console.log(cantidadFrutas);
    }else{
        clickGrande = true;
        grande.classList.remove("glass");
        grande.classList.add("bg-transparent");
        cantidadGomitas = 0,
        cantidadBotanas = 0,
        cantidadFrutas = 0;
        console.log(cantidadGomitas);
            console.log(cantidadBotanas);
            console.log(cantidadFrutas);
    }
    
}


