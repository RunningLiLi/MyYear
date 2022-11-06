<template>
  <Common
    imgTop="/images/宿舍16/5-3你与寝室.png"
    imgButtom="/images/宿舍16/5-1.png"
    title="你与寝室"
    resource="数据来源：学生处"
  >
    <ul v-if="true">
      <li>你所在<span class="numBlueHighlight">{{ssmc}}</span></li>
      <li>被评为<span class="numBlueHighlight">五星文明寝室</span></li>
      <li>近一年宿舍用电<span class="numBlueHighlight">{{ssydzl}}</span></li>
      <li>全校女生寝室平均用电<span class="numBlueHighlight">1000度</span></li>
      <li>全校男生寝室平均用电<span class="numBlueHighlight">3243度</span></li>
      <li>节约用电，人人有责</li>
    </ul>
    <ul v-else-if="false">
      <li>这一学年，你住在宁静苑3舍 601</li>
      <li>近一年宿舍用电1890度</li>
      <li>全校女生寝室平均用电1000度</li>
      <li>全校男生寝室平均用电3243度</li>
      <li>节约用电，人人有责</li>
    </ul>
     <ul v-else>
      <li>没在住宿舍的</li>
      <li>系统显示这一学年你没有在学校宿舍住宿</li>
      <li>由于各种原因在在外住宿</li>
      <li>但请一定注意你的安全</li>
    </ul>
  </Common>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import Common from "./common.vue";
import request from "../request"
const {data:{ssmc,ssdm,ssydzl}}=await  request("/myterm/electricity",{})
</script>

<style scoped>
ul {
  list-style: none;
  font-size: 2.3vh;
}
li {
  line-height: 5.1vh;
  color: rgb(80, 80, 80);
  text-align: start;
}
</style>
