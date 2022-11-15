<template>
  <div class="container">
    <ul>
      <li>欢迎</li>
      <li>{{data.data.xm||"重小邮"}}</li>
      <li>同学开启你的成长档案</li>
    </ul>
  </div>
</template>

<script setup>
import request from "../request"
const data=await  request("/myterm/information",{})
</script>
<style scoped>
.container{ 
       width: 100%;
       height: 100%;
       background: 
       url("../asset/过度页面2/2.过度页面2022bg.jpg");
       background-size: contain; 
       background-repeat: no-repeat;
       background-position:top center;
    }
ul{
  margin-top: 17vw;
  color: #f7e2bd;
  list-style: none;
  font-size: 2.5vh;
  font-weight: 600;
  text-shadow: 0px 7px 2px #a60c12;
}
</style>