<template>
  <Common
    imgTop="/images/学业信息12/12-2你的奋斗3.png"
    imgButtom="/images/学业信息12/12-1.png"
    title="你的奋斗3"
    :isContain="true"
    resource="数据来源：教务处"
  >
    <ul v-if="true">
      <li>你第一期平均学分绩点为：<span class="numRedHighlight">{{pjxfjd1}}</span></li>
      <li>第二期的平均学分绩点：<span class="numRedHighlight">{{pjxfjd2}}</span></li>
      <li>同时，你通过了</li>
      <li>英语六级考试 
          <span class="numRedHighlight underline">{{cet6}}</span>分</li>
      <li>英语四级
          <span class="numRedHighlight underline">{{cet4}}</span>分</li>
      <li>其中，英语四级通过率最高的学院：
          <span class="collageHighlight blueHighlight  sizeHighlight">外国语学院</span></li>
      <li>英语六级通过率最高的学院：
          <span class="collageHighlight blueHighlight sizeHighlight">外国语学院</span></li>
    </ul>
    <ul v-else>
      <li>英语四级通过率最高的学院：外国语学院</li>
      <li>英语六级通过率最高的学院：外国语学院</li>
    </ul>
  </Common>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import Common from "./common.vue";
import request from "../request"
const {data:{pjxfjd1,pjxfjd2,cet4,cet6}}=await  request("/myterm/english",{})
</script>

<style scoped>
ul {
  list-style: none;
  font-size: 2.3vh;
}
li {
  line-height: 5vh;
  color: rgb(80, 80, 80);
  text-align: start;
}
</style>
