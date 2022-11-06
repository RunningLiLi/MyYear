<template>
  <Common
    imgTop="/images/学业信息11/11-2你的奋斗2.png"
    imgButtom="/images/学业信息11/11-1.png"
    title="你的奋斗2"
    resource="数据来源：教务处"
  >
    <ul>
      <li>据不完全统计</li>
      <li> 这一学年，你上过<span class="numBlueHighlight">{{bxkms+xxkms}}</span>门课，</li>
      <li>共获得<span class="numBlueHighlight">{{bxkxf+c}}</span>学分，其中</li>
      <li>必修课<span class="numBlueHighlight">{{bxkms}}</span>门，共
      <span class="numBlueHighlight">{{bxkxf}}</span>学分</li>
      <li>选修课<span class="numBlueHighlight">{{xxkms}}</span>门，共
      <span class="numBlueHighlight">{{bxkxf}}</span>学分</li>
    </ul>
  </Common>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import Common from "./common.vue";
import request from "../request"
const {data:{xxkcs,sjkms,rxkms,zkcs,zkcxf,bxkms,xxkms,xxkxf,qtkcs,qtkxf}}=await  request("/myterm/study",{})
</script>

<style scoped>
ul {
  list-style: none;
  padding-top: 2vh;
  color: rgb(167, 167, 167);
  padding-bottom:  2vh;
}
li {
  line-height:6vh;
  color: rgb(80, 80, 80);
  text-align: start;
}
</style>
