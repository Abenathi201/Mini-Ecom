<template>
    <div class="header">
        <div class="routerlinks">
            <nav class="navbar navbar-expand-lg bg-white w-100">
                <div class="container-fluid">
                   <router-link class="navbar-brand links" to="/">Insane Footwear</router-link>
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                         <li class="nav-item">
                            <router-link class="nav-link links" to="/items">Products</router-link>
                         </li>
                         <li class="nav-item">
                            <router-link class="nav-link links" to="/about">About</router-link>
                         </li>
                         <li class="nav-item">
                            <router-link class="nav-link links" to="/admin">Admin</router-link>
                         </li>
                      </ul>
                      <div class="cart">
                          <router-link to="/" ><img width="20" src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1"/></router-link>
                      </div>
                   </div>
                </div>
            </nav>
        </div>
    </div>

</template>
<script>
export default {
    
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap');
.header {
  font-family: montserrat;
}
   .navbar-nav {
    padding-right: 10% !important;
   }
   .modal-content {
    border-radius: 0px !important;
    box-shadow: 0.1rem 0.1rem black;
   }
   .nav-link:hover {
    font-weight: bold !important;
   }
   template {
    scroll-behavior: smooth;
   }
</style>