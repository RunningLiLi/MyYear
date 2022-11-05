<template>
  <Common
    imgTop="/images/体测14/6-2你的体能.png"
    imgButtom="/images/校园网15/15.上网2022illustration.png"
    title="你与校园网"
    resource="数据来源：信息化办"
    isContain="1"
  >
    <ul>
      <li>你共上网<span class="numBlueHighlight">2310.1</span>小时</li>
      <li>其中PC端<span class="numBlueHighlight">2279.4</span>小时</li>
      <li>移动端<span class="numBlueHighlight">30.7</span>小时</li>
      <li>在各学院人均上网时长中，</li>
      <li><span class="collageHighlight sizeHighlight">国际学院</span>是第一</li>
      <li>其次是<span class="collageHighlight sizeHighlight">计算机科学与技术学院</span>，</li>
      <li><span class="collageHighlight sizeHighlight">软件工程学院</span></li>
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
  font-size: 2.3vh;
}
li {
  line-height: 5vh;
  color: rgb(80, 80, 80);
  text-align: start;
}
</style>
