<template>
    <div>
        <AppHeader/>
        <Nuxt/>
        <AppFooter/>
    </div>
</template>
<script>
import AppHeader from "~/components/inc/AppHeader.vue";
import AppFooter from '~/components/inc/AppFooter.vue';
export default{
    name:'default',
    components:{
        AppHeader,
        AppFooter,
    
    }
}
</script>