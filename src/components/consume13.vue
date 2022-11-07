<template>
  <Common
    imgTop="/images/一卡通13/13-1你的消费.png"
    imgButtom="/images/一卡通13/consume2.png"
    title="你的消费"
    resource="数据来源：财务处"
  >
    <ul v-if="0">
      <li>你的一卡通累计消费<span class="numBlueHighlight">{{skzje}}</span>元，</li>
      <li>超过了<span class="numRedHighlight">{{skxfzb}}%</span>的同学，</li>
      <li>其中，<span class="numBlueHighlight">{{skjezgy}}月</span>花的最多，为<span class="numBlueHighlight">{{dyskzje}}</span>元</li>
      <li>光顾最多的食堂是：<span class="blueHighlight sizeHighlight">{{skzdst}}</span></li>
      <li>你用一卡通早餐消费次数为：<span class="numBlueHighlight">{{zcxfcs}}</span>次</li>
      <li>你最早刷卡消费时间是：
        <span class="numBlueHighlight">{{zzskxfsj}}</span>
      </li>
      <li>美好的一天，从早餐开始</li>
    </ul>
    <ul v-else>
      <li>系统显示在这一学年，你没有用一卡通消费过。</li>
      <li>最受同学欢迎的是<span class="blueHighlight sizeHighlight">千禧鹤食堂</span>	，</li>
      <li>其次是<span class="blueHighlight sizeHighlight">延生食堂</span>、<span class="blueHighlight sizeHighlight">中心食堂</span>，</li>
      <li>在早餐消费人均次数中，<span class="collageHighlight sizeHighlight">外国语学院</span>最多，</li>
      <li> 其次是<span class="collageHighlight sizeHighlight">网络空间安全与信息法学院</span>、<span class="collageHighlight sizeHighlight">生物信息学院</span></li>
      <li>美好的一天，从早餐开始</li>
    </ul>
  </Common>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import Common from "./common.vue";
import request from "../request"
const {data:{skzje,skxfzb,skjezgy,dyskzje,skzdst,zcxfcs,zzskxfsj}}=await  request("/myterm/canteen",{})
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
