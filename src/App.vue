
<template>
    

        <main class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 text-center"><logo></logo></div>
                <paquete></paquete>
            </div>
            <div class="row">
                <gomitas></gomitas>
            </div>
        </main>
        
    
</template>
<script>
import Gomitas from './components/Gomitas.vue';
import Logo from './components/Logo.vue';
import Paquete from './components/Paquete.vue';
export default {
    components: { Logo, Paquete,
        Gomitas },
}
</script>



