<template>
  <div class="container">
      <header>
        <!-- <a href="https://ids.cqupt.edu.cn/authserver/login"></a> -->
        <img class="headerimg" src="../asset/2022我这一学年1/1.2022我这一学年.（1）png.png" alt="">
      </header>
      <section class="body">
      </section>
  </div>
</template>

<script setup>
import request from "../request"
  // request("http://127.0.0.1:5173/login/myterm/information",{})
  // fetch("/api/myterm/information", {
  //   headers: {
  //     Authorization:"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjlhYmNhYjZmLTQxMDctNDRiMi1hZDkzLTFiMDZjNTRmNzg5NCJ9.meK2-dccKYgRQm8b6rO3b4SU9EwGAeY5L6AqqBDSguvdnNZWQ7quVnIw01gyL2GShcdTwP0QsCVdDIt1VVudQw"
  //   },
  // })
  //   .then((res) => res.json())
  //   .then(res=>res);
  // fetch("http://10.20.97.131:8080/api/myterm/information",{
  //   headers:{
      
  //   }
  // })
  // .then(res=>res.text())
  // .then(console.log)
  // window.location.href="https://ids.cqupt.edu.cn/authserver/login"
  // window.location.href="https://ids.cqupt.edu.cn/authserver/login?service=http%3A%2F%2F10.20.97.131%3A8080%2Fidslogin"
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
