<template>
  <Common
    imgTop="/images/图书馆5/7-1你与图书馆.png"
    imgButtom="/images/图书馆5/7-2.png"
    title="你与图书馆"
    resource="数据来源：图书馆"
  >
    <ul>
      <li>在<span class="numBlueHighlight">2021-2022</span>学年期间</li>
      <li>共计人脸识别进入图书馆：<span class="numBlueHighlight">{{rgcs}}</span>次</li>
      <li>
        这学期第一次人脸识别进入图书馆：<span class="numBlueHighlight"
          >{{rgsj}}</span
        >
      </li>
      <li>偏爱进馆时间是：<span class="sizeHighlight">{{pargsj}}</span></li>
      <li>本学期，人均进出图书馆次数中：</li>
      <li><span class="collageHighlight sizeHighlight">体育学院</span>最多，</li>
      <li>
        其次是<span class="collageHighlight sizeHighlight"
          >光电工程学院/国际半导体学院</span>、<span class="collageHighlight sizeHighlight"
          >生物信息学院</span
        >
      </li>
    </ul>
  </Common>
</template>

<script setup>
import Common from "../components/common.vue";
import request from "../request"
const {data:{rgcs,rgsj,pargsj}}=await  request("/myterm/face",{})
</script>

<style scoped>
ul {
  list-style: none;
  padding-bottom: 2vh;
}
li {
  line-height: 4vh;
  color: rgb(80, 80, 80);
  text-align: start;
}
</style>