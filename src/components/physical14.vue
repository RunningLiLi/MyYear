<template>
  <Common
    imgTop="/images/体测14/6-2你的体能.png"
    imgButtom="/images/体测14/14.体育锻炼illustration.png"
    title="你的体能"
    resource="数据来源：体育学院"
  >
    <ul v-if="true">
      <li>从<span class="numBlueHighlight">2021年9月</span>
      至<span class="numBlueHighlight">2022年7月</span>，</li>
      <li>你参加<span class="numBlueHighlight">{{dlzcs}}次</span>体育锻炼，</li>
      <li>在<span class="numBlueHighlight">{{dlcszdy.replace("-","年")+"月"}}</span>锻炼次数最多，</li>
      <li>体育锻炼总时长为<span class="numBlueHighlight">{{dlzsc}}</span>分钟，</li>
      <li>喜欢去的运动场是<span class="blueHighlight sizeHighlight">{{zxhydc1}}</span>，</li>
      <li>其次是<span class="blueHighlight sizeHighlight">{{zxhydc2}}</span></li>
    </ul>
    <ul v-else>
      <li>从2021年9月至2022年7月，同届15406学生参加体育锻炼</li>
      <li>其中，李欣雨同学次数最多</li>
      <li>体育学院学院人均次数最多，</li>
      <li>其次是经济管理学院、生物信息学院</li>
      <li>同学最爱去的运动场是风华运动场</li>
    </ul>
  </Common>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import Common from "./common.vue";
import request from "../request"
const {data:{zxhydc2,zxhydc1,dlcszdycs,dlcszdy,dlzcs}}=await  request("/myterm/exercise",{})
</script>

<style scoped>
ul {
  list-style: none;
  font-size: 2.3vh;
}
li {
  line-height: 6.1vh;
  color: rgb(80, 80, 80);
  text-align: start;
}
</style>
