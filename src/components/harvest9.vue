<template>
  <Common
    imgTop="/images/收获9/9-1你的收获.png"
    imgButtom="/images/收获9/9-2.png"
    title="你的收获"
    resource="数据来源：学生处/团委"
  >
    <ul v-if="zw[0]">
        <li>&lt;学生干部&gt;</li>
        <li>在这一学年，</li>
        <li>你先后担任了
          <span v-for="(item,key) in zw" :key="key" class="collageHighlight blueHighlight sizeHighlight">{{item}},</span>
        </li>
    </ul>
    <ul v-else></ul>
    
    <ul v-if="ry[0]">
        <li>&lt;荣誉表彰&gt;</li>
        <li>获得了</li>
        <li>
         <span 
         v-for="(item,key) in zw" 
         :key="key" 
         class="collageHighlight blueHighlight sizeHighlight">
         {{item}},
         </span>等荣誉表彰
        </li>
    </ul>
    <ul v-else></ul>
    
    <ul v-if="jz[0]">
        <li>&lt;奖助学金&gt;</li>
        <li>同时，你获得了</li>
        <li><span class="collageHighlight blueHighlight sizeHighlight">学业奖学金一等奖</span></li>
        <li>所在的班级 <span class="numBlueHighlight">01011905</span></li>
        <li>荣获了
          <span v-for="(item,key) in jz" :key="key" 
          class="collageHighlight blueHighlight sizeHighlight">{{item}}</span>
        </li>
    </ul>
    <ul v-else></ul>
  </Common>
</template>

<script setup>
import Common from "../components/common.vue";
import request from "../request"
const {data:{zw,ry,jt,jz}}=await  request("/myterm/reward",{})
</script>

<style scoped>
ul {
  list-style: none;
  padding-bottom: 2vh;
}
li {
  line-height: 3vh;
  color: rgb(80, 80, 80);
  text-align: start;
}
</style>
