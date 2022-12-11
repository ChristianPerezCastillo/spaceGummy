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

// Asignamos una función al evento click del botón
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
  }
});

const typed = new Typed('.typed', {
    strings: ['1.-Escoge el tamaño de tu pedido.', '2.-Elige tus productos preferidos.', '3.-Presiona el boton de enviar.', '4.-Escribenos un WhatsApp para avisarnos que ya realizaste tu pedido.'],
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

