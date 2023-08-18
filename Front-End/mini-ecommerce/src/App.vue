<template>
    <NavComp/>
    <router-view/>
    <FooterComp/>
</template>
<script>
import NavComp from '@/components/NavComp.vue';
import FooterComp from '@/components/FooterComp.vue'
export default {
  components: {NavComp, FooterComp}
}
</script>

<style>
#app {
  width: 100vw;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
* {
  margin: 0;
  overflow-x: hidden;
}
</style>
