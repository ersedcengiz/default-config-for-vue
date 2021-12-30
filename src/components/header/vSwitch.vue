<template>
    <label class="switch">
        <input type="checkbox" v-model="isLight" @change="changeTheme" />
        <span class="slider round"></span>
    </label>
</template>

<script>
export default {
  name: 'vSwitch',
  data: function() {
    return {
      isLight: false
    }
  },
  methods: {
    changeTheme: function() {
      if (this.isLight) {
        this.$store.dispatch('UIModule/changeTheme')
      } else {
        this.$store.dispatch('UIModule/changeTheme')
      }
    }
  }
}
</script>