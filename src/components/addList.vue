<link type="text/css" href="../../node_modules/bootstrap/dist/css/bootstrap.css"/>

<template>

    <div>
      <hr/>
      <div class="row">
        <div class="col-md-6">
          <label for="time" class="control-label">日期</label>
          <input id="time" type="date" class="form-control"/>
        </div>
        <div class="col-md-6">
          <label for="time" class="control-label">时间</label>
          <input id="time" type="number" class="form-control"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label class="control-label">内容</label>
          <textarea class="form-control"></textarea>
        </div>
      </div>
      <div class="btn-group">
        <router-link to="/lists" class="btn btn-info">保存</router-link>

      </div>
      <hr/>



    </div>
</template>

<script>
    export default {}
</script>

<style>


</style>
