
<template>
        <!-- Secciont tamaño -->
        <section id="hero-animated" class="hero-animated d-flex align-items-center ">
             <logo></logo>
        </section>
        <section class="d-flex align-items-center ">
             <paquete></paquete>
        </section>
</template>
<script>
import Logo from './components/Logo.vue';
import Paquete from './components/Paquete.vue';
export default {
    components: { Logo, Paquete },
}
</script>



