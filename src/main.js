import { createApp } from 'vue'
import App from './App.vue'
import Typed from 'typed.js';
import html2canvas from 'html2canvas'
import './assets/main.css'
createApp(App).mount('#app')


// Seleccionamos el elemento <div> y el botón utilizando sus atributos id
const paqueteGrande = document.getElementById('paqueteGrande');
const paqueteChico = document.getElementById('paqueteChico');
const descripcionPaqueteGrande = document.getElementById('descripcionPaqueteGrande');
const descripcionPaqueteChico = document.getElementById('descripcionPaqueteChico');
const aciditoSelect = document.getElementById('aciditoSelect');
const aritoSelect = document.getElementById('aritoSelect');
const manguitoSelect = document.getElementById('manguitoSelect');
const panditaSelect = document.getElementById('panditaSelect');
const dulcigomaSelect = document.getElementById('dulcigomaSelect');
const gusanitoSelect = document.getElementById('gusanitoSelect');
const naturalSelect = document.getElementById('naturalSelect');
const adobadoSelect = document.getElementById('adobadoSelect');
const hotnutSelect = document.getElementById('hotnutSelect');
const japonesSelect = document.getElementById('japonesSelect');
const chamoySelect = document.getElementById('chamoySelect');
const botaneraSelect = document.getElementById('botaneraSelect');
const maggySelect = document.getElementById('maggySelect');
// const inglesaSelect = document.getElementById('inglesaSelect');
const limonSelect = document.getElementById('limonSelect');
const tajinSelect = document.getElementById('tajinSelect');
const miguelitoSelect = document.getElementById('miguelitoSelect');
const picafresaSelect = document.getElementById('picafresaSelect');
var tickets = null;
// Asignamos una función al evento click del botón
aciditoSelect.addEventListener('click', function() {
  selection(aciditoSelect)});
// Asignamos una función al evento click del botón
aritoSelect.addEventListener('click', function() {
  selection(aritoSelect)});
// Asignamos una función al evento click del botón
manguitoSelect.addEventListener('click', function() {
  selection(manguitoSelect)});
// Asignamos una función al evento click del botón
panditaSelect.addEventListener('click', function() {
  selection(panditaSelect)});
// Asignamos una función al evento click del botón
dulcigomaSelect.addEventListener('click', function() {
  selection(dulcigomaSelect)});
// Asignamos una función al evento click del botón
gusanitoSelect.addEventListener('click', function() {
  selection(gusanitoSelect)});
// Asignamos una función al evento click del botón
naturalSelect.addEventListener('click', function() {
  selection(naturalSelect)});
// Asignamos una función al evento click del botón
adobadoSelect.addEventListener('click', function() {
  selection(adobadoSelect)});
// Asignamos una función al evento click del botón
hotnutSelect.addEventListener('click', function() {
  selection(hotnutSelect)});
// Asignamos una función al evento click del botón
japonesSelect.addEventListener('click', function() {
  selection(japonesSelect)});
// Asignamos una función al evento click del botón
chamoySelect.addEventListener('click', function() {
  selection(chamoySelect)});
// Asignamos una función al evento click del botón
botaneraSelect.addEventListener('click', function() {
  selection(botaneraSelect)});
// Asignamos una función al evento click del botón
maggySelect.addEventListener('click', function() {
  selection(maggySelect)});
// Asignamos una función al evento click del botón
// inglesaSelect.addEventListener('click', function() {
//   selection(inglesaSelect)});
// Asignamos una función al evento click del botón
limonSelect.addEventListener('click', function() {
  selection(limonSelect)});
// Asignamos una función al evento click del botón
tajinSelect.addEventListener('click', function() {
  selection(tajinSelect)});
// Asignamos una función al evento click del botón
miguelitoSelect.addEventListener('click', function() {
  selection(miguelitoSelect)});
// Asignamos una función al evento click del botón
picafresaSelect.addEventListener('click', function() {
  selection(picafresaSelect)});
paqueteGrande.addEventListener('click', function() {
  // Ocultamos el elemento <div> cuando se presiona el botón
  if(paqueteChico.classList.contains('d-none')){
    paqueteChico.classList.remove('d-none');
    descripcionPaqueteGrande.classList.add('d-none');
    
    paqueteChico.classList.remove('col-xl-12');
    paqueteChico.classList.add('col-xl-6');
    paqueteGrande.classList.remove('col-xl-12');
    paqueteGrande.classList.add('col-xl-6');
    
    paqueteChico.classList.remove('col-lg-12');
    paqueteChico.classList.add('col-lg-6');
    paqueteGrande.classList.remove('col-lg-12');
    paqueteGrande.classList.add('col-lg-6');

    paqueteChico.classList.remove('col-md-12');
    paqueteChico.classList.add('col-md-6');
    paqueteGrande.classList.remove('col-md-12');
    paqueteGrande.classList.add('col-md-6');
    tickets = null;
    desSeleccionar();
  }else{

    paqueteChico.classList.remove('col-xl-6');
    paqueteChico.classList.add('col-xl-12');
    paqueteGrande.classList.remove('col-xl-6');
    paqueteGrande.classList.add('col-xl-12');

    paqueteChico.classList.remove('col-lg-6');
    paqueteChico.classList.add('col-lg-12');
    paqueteGrande.classList.remove('col-lg-6');
    paqueteGrande.classList.add('col-lg-12');
    
    paqueteChico.classList.remove('col-md-6');
    paqueteChico.classList.add('col-md-12');
    paqueteGrande.classList.remove('col-md-6');
    paqueteGrande.classList.add('col-md-12');

    paqueteChico.classList.add('d-none');
    descripcionPaqueteGrande.classList.remove('d-none');
    tickets = 6;
  }
});
paqueteChico.addEventListener('click', function() {
  // Ocultamos el elemento <div> cuando se presiona el botón
  if(paqueteGrande.classList.contains('d-none')){
    paqueteGrande.classList.remove('d-none');
    descripcionPaqueteChico.classList.add('d-none');
    paqueteChico.classList.remove('col-xl-12');
    paqueteChico.classList.add('col-xl-6');
    paqueteGrande.classList.remove('col-xl-12');
    paqueteGrande.classList.add('col-xl-6');
    paqueteChico.classList.remove('col-lg-12');
    paqueteChico.classList.add('col-lg-6');
    paqueteGrande.classList.remove('col-lg-12');
    paqueteGrande.classList.add('col-lg-6');
    paqueteChico.classList.remove('col-md-12');
    paqueteChico.classList.add('col-md-6');
    paqueteGrande.classList.remove('col-md-12');
    paqueteGrande.classList.add('col-md-6');
    tickets = null;
    desSeleccionar();
  }else{
    paqueteChico.classList.remove('col-xl-6');
    paqueteChico.classList.add('col-xl-12');
    paqueteGrande.classList.remove('col-xl-6');
    paqueteGrande.classList.add('col-xl-12');
    paqueteGrande.classList.add('d-none');
    paqueteChico.classList.remove('col-lg-6');
    paqueteChico.classList.add('col-lg-12');
    paqueteGrande.classList.remove('col-lg-6');
    paqueteGrande.classList.add('col-lg-12');
    paqueteChico.classList.remove('col-md-6');
    paqueteChico.classList.add('col-md-12');
    paqueteGrande.classList.remove('col-md-6');
    paqueteGrande.classList.add('col-md-12');
    
    descripcionPaqueteChico.classList.remove('d-none');
    tickets = 11;
    
  }
});

const typed = new Typed('.typed', {
    strings: ['1.-Escoge un tamaño.', '2.-Elige tus productos.', '3.-Presiona el boton de enviar.', '4.-Escribenos un Whats.'],
    typeSpeed: 50,
    startDelay: 100,
    backSpeed: 50,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
});

function selection(select){
  // Ocultamos el elemento <div> cuando se presiona el botón
  if(tickets != null){
      if(select == chamoySelect || select == botaneraSelect || select == maggySelect || select == limonSelect || select == tajinSelect || select == miguelitoSelect){
        if(select.classList.contains('glass')){
          select.classList.remove('glass');
          select.classList.add('glassSelect');
        }else{
          select.classList.add('glass');
          select.classList.remove('glassSelect');
        }
      }else{

        if(select.classList.contains('glass')){
          select.classList.remove('glass');
          select.classList.add('glassSelect');
          tickets--;
    
        }else{
          select.classList.add('glass');
          select.classList.remove('glassSelect');
          tickets++;
        }
        if(tickets == 0){
          aciditoSelect.classList.contains('glassSelect')? null : bloquear(aciditoSelect);
          aritoSelect.classList.contains('glassSelect')? null : bloquear(aritoSelect);
          manguitoSelect.classList.contains('glassSelect')? null : bloquear(manguitoSelect);
          panditaSelect.classList.contains('glassSelect')? null : bloquear(panditaSelect);
          dulcigomaSelect.classList.contains('glassSelect')? null : bloquear(dulcigomaSelect);
          gusanitoSelect.classList.contains('glassSelect')? null : bloquear(gusanitoSelect);
          naturalSelect.classList.contains('glassSelect')? null : bloquear(naturalSelect);
          adobadoSelect.classList.contains('glassSelect')? null : bloquear(adobadoSelect);
          hotnutSelect.classList.contains('glassSelect')? null : bloquear(hotnutSelect);
          japonesSelect.classList.contains('glassSelect')? null : bloquear(japonesSelect);
          picafresaSelect.classList.contains('glassSelect')? null : bloquear(picafresaSelect);
        }else{
          aciditoSelect.classList.contains('glassSelect')? null : desbloquear(aciditoSelect);
          aritoSelect.classList.contains('glassSelect')? null : desbloquear(aritoSelect);
          manguitoSelect.classList.contains('glassSelect')? null : desbloquear(manguitoSelect);
          panditaSelect.classList.contains('glassSelect')? null : desbloquear(panditaSelect);
          dulcigomaSelect.classList.contains('glassSelect')? null : desbloquear(dulcigomaSelect);
          gusanitoSelect.classList.contains('glassSelect')? null : desbloquear(gusanitoSelect);
          naturalSelect.classList.contains('glassSelect')? null : desbloquear(naturalSelect);
          adobadoSelect.classList.contains('glassSelect')? null : desbloquear(adobadoSelect);
          hotnutSelect.classList.contains('glassSelect')? null : desbloquear(hotnutSelect);
          japonesSelect.classList.contains('glassSelect')? null : desbloquear(japonesSelect);
          picafresaSelect.classList.contains('glassSelect')? null : desbloquear(picafresaSelect);
          
        }
      }
    
  }else{
    $('#miModal').modal('show');
  }
}

function reload(select){
  select.classList.add('glass');
  select.classList.remove('glassSelect');
}

function bloquear(select){
  select.classList.add('disabled');
}
function desbloquear(select){
  select.classList.remove('disabled');
}

function desSeleccionar(){
  reload(aciditoSelect);
  reload(aritoSelect);
  reload(manguitoSelect);
  reload(panditaSelect);
  reload(dulcigomaSelect);
  reload(gusanitoSelect);
  reload(naturalSelect);
  reload(adobadoSelect);
  reload(hotnutSelect);
  reload(japonesSelect);
  reload(picafresaSelect);
}