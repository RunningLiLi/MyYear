<template>
  <Common
    imgTop="/images/收获9/9-1你的收获.png"
    imgButtom="/images/收获9/9-2.png"
    title="你的收获"
    resource="数据来源：学生处/团委"
  >
    <ul v-if="1">
        <li>&lt;学生干部&gt;</li>
        <li>在这一学年，</li>
        <li>你先后担任了<span class="collageHighlight blueHighlight sizeHighlight">班长</span>，
        <span class="collageHighlight blueHighlight sizeHighlight">副团支书</span></li>
    </ul>
    <ul v-else></ul>
    
    <ul v-if="1">
        <li>&lt;荣誉表彰&gt;</li>
        <li>获得了</li>
        <li><span class="collageHighlight blueHighlight sizeHighlight">校级三好学生</span>，
        <span class="collageHighlight blueHighlight sizeHighlight">校级自立自强先进个人</span>等荣誉表彰</li>
    </ul>
    <ul v-else></ul>
    
    <ul v-if="1">
         <li>&lt;奖助学金&gt;</li>
        <li>同时，你获得了</li>
        <li><span class="collageHighlight blueHighlight sizeHighlight">学业奖学金一等奖</span></li>
        <li>所在的班级 <span class="numBlueHighlight">01011905</span></li>
        <li>荣获了<span class="collageHighlight blueHighlight sizeHighlight">优秀班级之星</span></li>
    </ul>
    <ul v-else></ul>
  </Common>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import Common from "../components/common.vue";
const data = reactive({ a: 1 });
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
