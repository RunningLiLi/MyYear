<template>
  <Common
    imgTop="/images/学业信息10/10-1你的奋斗1.png"
    imgButtom="/images/学业信息10/struggle.png"
    title="你的奋斗1"
    resource="数据来源：教务处"
  >
    <ul>
      <li>这一学年</li>
      <li>
        学时最长的是：<span class="blueHighlight sizeHighlight">{{
          zcxskc
        }}</span>
      </li>
      <li>
        学时最短的是：<span class="blueHighlight sizeHighlight">{{
          zdxskc
        }}</span>
      </li>
      <li style="margin-top: 50px">得分排名依次是:</li>
      <li v-for="(item, key) in courseArr" :key="key">
        <span class="blueHighlight sizeHighlight"> {{ item }}</span>
      </li>
    </ul>
  </Common>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import Common from "./common.vue";
import request from "../request";
import { computed } from "@vue/runtime-core";
const {
  data: { zcxskc, zdxskc, zgjdkc="" },
} = await request("/myterm/score", {});
const courseArr = computed(() => {
  return zgjdkc.split("、").slice(0, 3);
});
</script>

<style scoped>
ul {
  list-style: none;
  padding-bottom: 2vh;
}
li {
  line-height: 5vh;
  color: rgb(80, 80, 80);
  text-align: start;
}
</style>
