<template>
  <Common
    imgTop="/images/体测14/6-2你的体能.png"
    imgButtom="/images/体测14/14.体育锻炼illustration.png"
    title="你的体能"
    resource="数据来源：体育学院"
  >
    <ul v-if="dlzcs">
      <li>从<span class="numBlueHighlight">2021年9月</span>
      至<span class="numBlueHighlight">2022年7月</span>，</li>
      <li>你参加<span class="numBlueHighlight">{{dlzcs}}次</span>体育锻炼，</li>
      <li>在<span class="numBlueHighlight">{{dlcszdy.replace("-","年")+"月"}}</span>锻炼次数最多，</li>
      <li>体育锻炼总时长为<span class="numBlueHighlight">{{dlzsc}}</span>分钟，</li>
      <li>喜欢去的运动场是<span class="blueHighlight sizeHighlight">{{zxhydc1}}</span></li>
      <li v-if="zxhydc2">其次是<span class="blueHighlight sizeHighlight">{{zxhydc2}}</span></li>
    </ul>
    <ul v-else>
      <li>从<span class="numBlueHighlight">2021年9月</span>
        至<span class="numBlueHighlight">2022年7月</span>，同届<span class="numBlueHighlight">15406</span>学生参加体育锻炼</li>
      <li>其中，<span class="collageHighlight sizeHighlight">李欣雨</span>同学次数最多</li>
      <li><span class="collageHighlight sizeHighlight">体育学院学院</span>人均次数最多，</li>
      <li>其次是<span class="collageHighlight sizeHighlight">经济管理学院</span>、<span class="collageHighlight sizeHighlight">生物信息学院</span></li>
      <li>同学最爱去的运动场是<span class="collageHighlight sizeHighlight">风华运动场</span></li>
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
