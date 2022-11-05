<template>
  <div class="container">
      <header>
        <img class="headerimg" src="../asset/2022我这一学年1/1.2022我这一学年.（1）png.png" alt="">
      </header>
      <section class="body">
      </section>
  </div>
</template>

<script setup>

</script>

<style scoped>
    .container{
       display: flex;
       flex-direction: column;
       width: 100%;
       height: 100%;
       background: 
       url("../asset/2022我这一学年1/1.2022我这一学年bg.jpg");
       background-size: cover; 
       box-sizing: border-box;
       padding: 10px 20px 10px 30px; 
    }
    .headerimg{
        width: 100%;
    }
    .body{
        width:100%;
        flex-grow: 1;
        background: url("../asset/2022我这一学年1/1.2022我这一学年（2）.png");
        background-size: contain;
        background-repeat: no-repeat; 
        background-position: center;
    }
    
</style>
