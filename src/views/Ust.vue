<template>
  <header class="container mt-3 mb-2  p-3  shadow-sm">
  <Headers />
  </header>
</template>

<script>
// @ is an alias to /src
import Headers from '../components/header/Headers.vue'
export default {
  name: 'Ust',
  data() {
    return { }
  },
  components: {
    Headers
  }
}
</script>
