<template>
  <div class="container-xxl d-flex align-items-md-center">
    <div class="col-7">
      <div class="row align-items-center">
        <div class="col-2">
          <div class="mainLogo"> <strong> Vip </strong> <span>bet</span> </div>
        </div>
        <div class="col-10">
          <div class="menu">
            <div class="menu-item">
              <router-link class="menu_link" to="/match">{{$t('TheNavbar.bulten')}}</router-link>
            </div>
            <div class="menu-item">
              <router-link class="menu_link" to="/live">{{$t('TheNavbar.canli')}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-5">
      <div class="row align-items-center">
        <div class="col-4">
          <Lang />
        </div>
        <div class="col-6">
          <vColorPlate />
        </div>
        <div class="col-2">
          <vSwitch />
        </div>
      </div>

    </div>
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