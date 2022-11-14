<template>
  <Common
    imgTop="/images/科技文体竞赛7/4-3你与竞赛.png"
    imgButtom="/images/科技文体竞赛7/4-1.png"
    title="你与竞赛"
    :isContain="true"
    resource="数据来源：教务处"
  >
    <ul>
     <li v-if="data[0]">你参加了
        <span 
        class="blueHighlight" style="white-space:pre-wrap;"
        v-for="({ssmc,ssdj,hjdj},key) in data.slice(0,3)"
        :key="key"
        >
        {{ssmc}}({{ssdj}})，获得了<span class="numBlueHighlight">{{hjdj}}</span> 
        </span>
      </li>
      <li v-else>在<span class="numBlueHighlight">2021-2022</span>学年
      </li>
      <li>
        我校学生科技文体竞赛省部级以上获奖人次为
        <span class="numBlueHighlight">2481</span>
        其中，
      </li>
      <li>国甲<span class="numBlueHighlight">116</span>人次</li>
      <li>国乙<span class="numBlueHighlight">765</span>人次</li>
      <li>国丙<span class="numBlueHighlight">21</span>人次</li>
      <li>省甲<span class="numBlueHighlight">1371</span>人次</li>
      <li>省乙<span class="numBlueHighlight">213</span>人次</li>
    </ul>
  </Common>
</template>

<script setup>

import Common from "../components/common.vue";
import request from "../request"
const {data=[]}=await  request("/myterm/competition",{})
</script>

<style scoped>
ul {
  list-style: none;
  padding-bottom: 2.5vh;
}
li {
  line-height: 4vh;
  color: rgb(80, 80, 80);
  text-align: start;
}
</style>
