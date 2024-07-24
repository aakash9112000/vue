<template>
  <div class="header">
    <div class="header-right">
      <router-link to="/" class="router-color"><p>Home</p></router-link>  
           
            <router-link to="/Login" class="routerAccount"><p>Contact</p></router-link>
            <router-link to="/Login" class="routerAccount"><p>Account</p></router-link>
            <router-link to="/whishlist" class="routerAccount"><p>whishlist</p></router-link>
            <router-link to="/Login" class="routerAccount"><p>Cart</p></router-link>
            <router-link to="/Login" class="routerAccount"><p>Logout</p></router-link>
      
    </div>
  </div>

 
 
</template>

<style scoped>
.header {
  overflow: hidden;
  background-color: #e94444;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header a:hover {
  /* background-color: #ddd; */
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

<script setup>

</script>
