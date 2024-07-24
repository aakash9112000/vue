<script setup></script>
<template>
  <!-- <div id="#app"> -->
    <suspense>
      <router-view></router-view>
    </suspense>

  <!-- </div> -->
  
</template>


<style scoped >
/* .header {
  overflow: hidden;
  background-color: #be0f0f;
  padding: 8px;
} */

.header a {
  /* float: left; */
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  /* font-size: 18px; */
  border-radius: 4px;
}
.header a:hover {
  background-color: #c05959;
  color: black;
}

.header-right {
  float: right;
}
* {
  margin: 0;
  padding: 0;
}
</style>