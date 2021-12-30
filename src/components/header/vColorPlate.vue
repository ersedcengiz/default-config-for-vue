<template>
  <div class="themebuttons">
                    <div
                        id="redtheme"
                        class="button red text-shadow-negra"
                        @click="colorTheme('red')"
                    >Red</div>
                    <div
                        id="bluetheme"
                        class="button blue text-shadow-negra"
                        @click="colorTheme('blue')"
                    >Blue</div>
                    <div
                        id="blacktheme"
                        class="button black text-shadow-negra"
                        @click="colorTheme('black')"
                    >Black</div>
                    <div
                        id="greentheme"
                        class="button green text-shadow-negra"
                        @click="colorTheme('green')"
                    >Green</div>
                </div>
</template>

<script>
export default {
  name: 'ColorPlate',
  data() {
    return {
    }
  },
  methods: {
    colorTheme: function(color) {
      this.$store.dispatch('UIModule/changeColorTheme', color)
    }
  }
}</script>
<style lang="scss">
.themebuttons{
  div{
    float:left;
    display: block;
    padding: 4px;
    
  }
}
</style>
