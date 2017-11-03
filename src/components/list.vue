<link type="text/css" href="../../node_modules/bootstrap/dist/css/bootstrap.css"/>
<template>
    <div>
      <hr/>
      <router-link to="/lists/addList" class="btn btn-info"  >创建</router-link>
      <hr/>
      <p >创建一条新的计划吧</p>
      <router-view></router-view>

        <ul class="list-group">
          <li class="list-group-item" style="overflow: hidden">
              <div class="col-sm-2" style="background: #ccc">
                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3414820322,3784481977&fm=27&gp=0.jpg" class="img-circle img-responsive"/>
              </div>
              <div class="col-sm-8"></div>
              <div class="col-sm-1 pull-right">
                <span  class="badge">关闭</span>
              </div>


          </li>



        </ul>
      </div>

</template>

<script>
    export default {


    }
</script>

<style scoped>


</style>
