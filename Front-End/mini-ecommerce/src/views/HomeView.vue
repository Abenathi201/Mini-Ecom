<template>
  <div class="hero d-flex flex-column justify-content-center align-items-center">
   <div class="desc">
      <h1 class="display-3 text-white">Insane Footwear</h1>
      <p class="text-white">Insane Footwear offers a wide range of designer brand sneakers and loafers. Insane Footwear will spice up your feet.</p>
      <router-link to="/items"><button class="but fw-bold border-0">Shop Now</button></router-link>
    </div>
  </div>

</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap');
* {
  font-family: montserrat;
}
  .hero {
    background-image: url(https://i.postimg.cc/t46X1V4g/pexels-terje-sollie-298864.jpg);
    background-repeat: no-repeat !important;
    overflow-x: hidden;
    background-size: cover !important;
    background-position: center;
    min-height: 700px !important;
    width: 100vw !important;
}
.but
.desc {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.card {
    height: 300px !important;
    width: 450px !important;
}
@media screen and (max-width: 450px) {
    .card {
        width: 300px !important;
        margin-inline: 10px !important;
    }
}
@media screen and (max-width: 550px) {
    .card {
        width: 400px !important;
    }
}
.card1 {
    background-image: url(https://i.postimg.cc/nrbHG4cr/3230004bk09-3230004bk09-additional-3-ecommerce-christianlouboutin-louisorlato-3230004-bk09-5-1200x12.jpg);
    background-repeat: no repeat;
    background-position: center;
    background-size: cover;
    border-radius: 0% !important;
}
html {
    scroll-behavior: smooth;
}
.card2 {
    background-image: url(https://i.postimg.cc/9Fry2Yjr/CROSS-SKATE-RZ4-B0001-L-039-B-scaled.jpg);
    background-repeat: no repeat;
    background-position: center;
    background-size: cover;
    border-radius: 0% !important;
}
.card3 {
    background-image: url(https://i.postimg.cc/sxDNvRx3/14851074-25452886-2048.jpg);
    background-repeat: no repeat;
    background-position: center;
    background-size: cover;
    border-radius: 0% !important;
}
.card4 {
    background-image: url(https://i.postimg.cc/bwV0bVH0/430220-3196-022034-3-1052x.jpg);
    background-repeat: no repeat;
    background-position: center;
    background-size: cover;
    border-radius: 0% !important;
}
.but {
    padding-inline: 5px;
    background-color: black;
    color: white;
}
.but:hover {
    background-color: white;
    color: black;
    font-weight: bold;
}
.ton:hover {
    color: black;
}
.ton {
    text-decoration: none;
    color: white;
}
.card:hover{
    scale: 1.1;
    transition: ease-in-out 0.4s;
    z-index: 1;
}
.christ{
    transform: rotate(-90deg);
    border: none;
    right: -118px;
    position: absolute;
    bottom: 40%;
}
.play {
    transform: rotate(-90deg);
    border: none;
    right: -41px;
    position: absolute;
    bottom: 40%;
}
.dolce {
    transform: rotate(-90deg);
    border: none;
    right: -104px;
    position: absolute;
    bottom: 40%;
}
.die {
    transform: rotate(-90deg);
    border: none;
    right: -38px;
    position: absolute;
    bottom: 40%;
}
.buttons {
    background-color: black;
    float: left;
    font-size: x-large;
    padding-inline: 5px; 
}
.color:hover {
    color: black;
    background-color: white;
}
.color {
    color: white;
    border: none;
    text-decoration: none;
}
</style>
