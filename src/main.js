import { createApp } from 'vue'
import App from './App.vue'

import html2canvas from 'html2canvas'
import './assets/main.css'

createApp(App).mount('#app')


// Seleccionamos el elemento <div> y el botón utilizando sus atributos id
const paqueteGrande = document.getElementById('paqueteGrande');
const paqueteChico = document.getElementById('paqueteChico');
const descripcionPaqueteGrande = document.getElementById('descripcionPaqueteGrande');
const descripcionPaqueteChico = document.getElementById('descripcionPaqueteChico');

// Asignamos una función al evento click del botón
paqueteGrande.addEventListener('click', function() {
  // Ocultamos el elemento <div> cuando se presiona el botón
  if(paqueteChico.classList.contains('d-none')){
    paqueteChico.classList.remove('d-none');
    descripcionPaqueteGrande.classList.add('d-none');
  }else{

    paqueteChico.classList.add('d-none');
    descripcionPaqueteGrande.classList.remove('d-none');
  }
});
paqueteChico.addEventListener('click', function() {
  // Ocultamos el elemento <div> cuando se presiona el botón
  if(paqueteGrande.classList.contains('d-none')){
    paqueteGrande.classList.remove('d-none');
    
    descripcionPaqueteChico.classList.add('d-none');
  }else{

    paqueteGrande.classList.add('d-none');
    
    descripcionPaqueteChico.classList.remove('d-none');
  }
});

