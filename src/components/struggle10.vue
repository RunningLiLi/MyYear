<template>
  <Common
    imgTop="/images/学业信息10/10-1你的奋斗1.png"
    imgButtom="/images/学业信息10/struggle.png"
    title="你的奋斗1"
    resource="数据来源：教务处"

  >
    <ul>
      <li>这一学年</li>
      <li>学时最长的是：<span class="blueHighlight sizeHighlight">通信原理A</span></li>
      <li>学时最短的是：<span class="blueHighlight sizeHighlight">体育（俱乐部）</span></li>
      <li style="margin-top:50px"><span class="blueHighlight sizeHighlight">于秀兰</span>
        老师的<span class="blueHighlight sizeHighlight">《通信原理A》</span>课程</li>
      <li>你得分<span class="numRedHighlight underline">98</span>，是你这学年最高分的课程</li>
    </ul>
  </Common>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import Common from "./common.vue";
const data = reactive({ a: 1 });
</script>

<style scoped>
ul {
  list-style: none;
  padding-bottom: 2vh;
}
li {
  line-height: 5vh;
  color: rgb(80, 80, 80);
  text-align: start;
}
</style>
