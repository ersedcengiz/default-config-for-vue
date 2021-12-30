<template>
<div class="row">
<div class="col-11">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vbet</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <router-link class="nav-link active" to="/" aria-current="page">{{$t('home')}}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/match">{{$t('TheNavbar.bulten')}}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/live">{{$t('TheNavbar.canli')}}</router-link>
        </li>
      </ul>
      <div class="d-flex">
          <vColorPlate />
          <Lang />
          <vSwitch />
      </div>
    </div>
  </div>
</nav>
</div>
<div class="col-1"> Merhab</div>
</div>
</template>

<script>
import vSwitch from './vSwitch.vue'
import Lang from './Lang.vue'
import vColorPlate from './vColorPlate.vue'
export default {
  name: 'Headers',
  components: {
    vSwitch,
    Lang,
    vColorPlate
  }
}
</script>
