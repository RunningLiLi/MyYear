<template>
  <Common
    imgTop="/images/图书借阅6/7-1你与图书馆.png"
    imgButtom="/images/图书借阅6/6.图书馆借书illustrstion.jpg"
    title="你与图书馆"
    resource="数据来源：图书馆"

  >
    <ul v-if="1">
      <li>你的纸质借书已还总量为<span class="numBlueHighlight">{{zjsl}}</span>本，</li>
      <li>高于<span class="numRedHighlight">{{(jszb*100)}}%</span>的同学，</li>
      <li>
        其中，<span class="collageHighlight sizeHighlight">体育学院</span>平均借书量最高，
      </li>
      <li>
        其次是<span class="collageHighlight sizeHighlight">传媒艺术学院</span>、<span
          class="collageHighlight sizeHighlight"
          >计算机科学与技术学院</span
        >
      </li>
      <li>
        这学年，<span class="sizeHighlight">《共产党宣言》</span
        >这本书被借次数最多
      </li>
      <li>达<span class="numBlueHighlight">34</span>次，</li>
      <li>你的气质里，藏着你看过的书和走过的路</li>
    </ul>
    <ul v-else>
      <li> 在2021-2022学年</li>
      <li>系统显示你没有借过纸质图书</li>
      <li>传媒艺术学院的李耀祖同学借书最多，达178本，</li>
      <li>
        其中，<span class="greenHeightlight">体育学院</span>平均借书量最高，
      </li>
      <li>
        其次是<span class="greenHeightlight">传媒艺术学院</span>、<span
          class="greenHeightlight"
          >计算机科学与技术学院</span
        >
      </li>
      <li>
        这学年，<span class="buleHeilight">《共产党宣言》</span
        >这本书被借次数最多
      </li>
      <li>达<span class="buleHeilight">34</span>次，</li>
    </ul>
  </Common>
</template>

<script setup>
import Common from "../components/common.vue";
import request from "../request"
const {data:{zjsl,jszb}}=await  request("/myterm/bookborrow",{})
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  line-height: 4vh;
  color: rgb(80, 80, 80);
  text-align: start;
}
</style>
