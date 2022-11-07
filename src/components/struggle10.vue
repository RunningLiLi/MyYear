<template>
  <Common
    imgTop="/images/学业信息10/10-1你的奋斗1.png"
    imgButtom="/images/学业信息10/struggle.png"
    title="你的奋斗1"
    resource="数据来源：教务处"

  >
    <ul>
      <li>这一学年</li>
      <li>学时最长的是：<span class="blueHighlight sizeHighlight">{{zcxskc}}</span></li>
      <li>学时最短的是：<span class="blueHighlight sizeHighlight">{{zdxskc}}</span></li>
      <li style="margin-top:50px"><span class="blueHighlight sizeHighlight">{{dkzgcjjs}}</span>
        老师的<span class="blueHighlight sizeHighlight">{{dkzgcjkcm}}</span>课程</li>
      <li>你得分<span class="numRedHighlight underline">{{dkzgcjxf}}</span>，是你这学年最高分的课程</li>
    </ul>
  </Common>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import Common from "./common.vue";
import request from "../request"
const {data:{zcxskc,zdxskc,dkzgcjjs,dkzgcjkcm,dkzgcjxf}}=await  request("/myterm/score",{})
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
