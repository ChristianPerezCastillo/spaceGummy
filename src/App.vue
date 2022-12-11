
<template>
    

        <main class="container">
            <div class="row">
                <logo></logo>
                <paquete></paquete>
            </div>
        </main>
        
        <gomitas></gomitas>
        
    
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



