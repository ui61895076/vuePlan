<link type="text/css" href="../node_modules/bootstrap/dist/css/bootstrap.css"/>
<template>
  <div>
    <NavBar/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 panel panel-default text-center">
          <h2>已有时长</h2>
          <p>0小时</p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-8 ">
            <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from './components/navBar.vue';

export default {
  components:{
    NavBar
  },

}
</script>

<style>

</style>
