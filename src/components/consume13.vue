<template>
  <Common
    imgTop="/images/一卡通13/13-1你的消费.png"
    imgButtom="/images/一卡通13/consume2.png"
    title="你的消费"
    resource="数据来源：财务处"
  >
    <ul v-if="true">
      <li>你的一卡通累计消费<span class="numBlueHighlight">4863.47</span>元，</li>
      <li>超过了<span class="numRedHighlight">99%</span>的同学，</li>
      <li>其中，<span class="numBlueHighlight">3月</span>花的最多，为<span class="numBlueHighlight">1060.00</span>元</li>
      <li>光顾最多的食堂是：<span class="blueHighlight sizeHighlight">千禧鹤食堂</span></li>
      <li>你用一卡通早餐消费次数为：<span class="numBlueHighlight">332</span>次</li>
      <li>你最早刷卡消费时间是：
        <span class="numBlueHighlight">2022-03-10 06:03:01</span>
      </li>
      <li>美好的一天，从早餐开始</li>
    </ul>
    <ul v-else>
      <li>系统显示在这一学年，你没有用一卡通消费过。</li>
      <li>最受同学欢迎的是千禧鹤食堂	，</li>
      <li>其次是延生食堂、中心食堂，</li>
在早餐消费人均次数中，外国语学院最多，其次是网络空间安全与信息法学院、生物信息学院
美好的一天，从早餐开始
      <li></li>
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
  font-size: 2.1vh;
}
li {
  line-height: 3.9vh;
  color: rgb(80, 80, 80);
  text-align: start;
}
</style>
