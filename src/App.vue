<template>
  <div id="app" class="" :class="getColorTheme">
  <Ust /> 
  <Orta /> 
  <Alt /> 
  </div>
</template>
<script>
import Ust from  './views/Ust.vue'
import Orta from  './views/Orta.vue'
import Alt from  './views/Alt.vue'
export default {
  name: 'App',
  components: {
    Ust,
    Orta,
    Alt

  },
  mounted: function() {
        if (this.getTheme === "tLight") {
            document.documentElement.setAttribute("data-theme", "tLight");
        } else {
            document.documentElement.setAttribute("data-theme", "tDark");
        } 
    },
    computed: {
        getTheme() {
            return this.$store.state.UIModule.themeName;
        },
        getColorTheme() {
            return this.$store.state.UIModule.colorTheme;
        },
    },
}
</script>
