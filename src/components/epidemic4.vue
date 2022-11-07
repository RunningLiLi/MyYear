<template>
  <Common 
  imgTop="/images/疫情打卡4/imgTop.png"
  imgButtom="/images/疫情打卡4/14-2.png"
  title="疫情期间"
  :isContain="true"
  resource="数据来源：信息化办"
  >
  <ul v-if="dkcs">
    <li>这一学年</li>
    <li>你坚持在We重邮小程序上打卡<span class="numBlueHighlight">{{dkcs}}</span>次</li>
    <li>扫码出校：<span class="numBlueHighlight">{{smcxcs}}</span>次</li>
    <li>扫码入校：<span class="numBlueHighlight">{{smrxcs}}</span>次</li>
    <li>其中，男生平均出校<span class="numBlueHighlight">58</span>次，</li>
    <li>女生平均出校<span class="numBlueHighlight">85</span>次</li>
    <li style="margin-top:10px">感谢您的配合</li>
  </ul>
  <ul v-else>
        <li>由于某些原因您没有在We重邮小程序上打卡</li>
        <li>扫码出校最多为 刘 同学，达<span class="numBlueHighlight">403</span>次</li>
        <li>其中，男生平均出校<span class="numBlueHighlight">58</span>次，</li>
        <li>女生平均出校<span class="numBlueHighlight">85</span>次</li>
    </ul>
  </Common>
</template>

<script setup>
import Common from "../components/common.vue";
import request from "../request"
const {data:{dkcs=false,smcxcs,smrxcs}}=await  request("/myterm/epidemic",{})
</script>

<style scoped>
  ul{
    list-style: none;
    padding-bottom: 35px;
    
  }
  li{
    line-height: 3.5vh;
    color: rgb(80, 80, 80);
    text-align: start;
  }
</style>