<template>
  <Common
    imgTop="/images/科研8/科研.png"
    imgButtom="/images/科研8/8.科研2022illustration.jpg"
    title="你与科研"
    resource="数据来源：科技处"
    isContain="1"
  >
    <ul v-if="1">
      <li>我校参与科研工作相关学生共<span class="numBlueHighlight">335</span>人次，
      </li>
      <li>
       你参加了{{lx}}类型
      </li>
      <li style="margin-top:2.5vh">级别：<span class="collageHighlight">{{xmjb}}</span></li>
      <li><span class="collageHighlight">{{xxmc}}</span></li>
      <li style="margin-top:2.5vh">其中，
        学术论文<span class="numBlueHighlight">59</span>人次</li>
      <li>专利及著作权<span class="numBlueHighlight">59</span>人次</li>
      <li>科研课题<span class="numBlueHighlight">217</span>人次</li>
    </ul>
  <ul v-else>
       <li>在2020-2021学年</li>
      <li>我校参与科研工作相关学生共<span class="buleHeilight">335</span>人次，
      </li>
      <li>其中，
        学术论文<span class="buleHeilight">59</span>人次</li>
      <li>专利及著作权<span class="buleHeilight">59</span>人次</li>
      <li>科研课题<span class="buleHeilight">217</span>人次</li>
    </ul>
  </Common>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import Common from "../components/common.vue";
import request from "../request"
const {data:{lx,xmmc,xq,xm,xmjb}}=await  request("/myterm/research",{})
</script>

<style scoped>
ul {
  list-style: none;
  padding-bottom:2.5vh;
}
li {
  line-height: 4vh;
  color: rgb(80, 80, 80);
  text-align: start;
}
</style>
