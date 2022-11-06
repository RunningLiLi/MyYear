<template>
  <div class="container">
    <div class="container2">
        <img class="container2Img" src="../asset/基本信息3/3.2基本信息2022pai.png" alt="">
        <div class="textContainer">
            <ul class="dataList">
                <li>在<span class="numRedHighlight">2021-2022</span>学年</li>
                <li>你在<span class="collageHighlight" style="color:yellow">{{xy}}{{bj}}</span>班</li>
                <li>有<span class="numHighlight" style="color:yellow">{{bjrs}}</span>个小伙伴和你一起</li>
                <li>导员是<span style="color:yellow">{{fdy}}</span></li>
                <li>全校和你同一天生日的有<span style="color:yellow" class="numHighlight">{{tytr}}</span>人</li>
            </ul>
        </div>
        <div class="idContainer">
            <h5>ID</h5><br>
            <span>{{xh}}</span>
        </div>
    </div>
  </div>
</template>

<script setup>
import request from "../request"
const {data:{xy,bj,bjrs,fdy,tytr,xh}}=await  request("/myterm/information",{})
</script>

<style scoped>
h5{
    position: absolute;
    left: 0;
    border-bottom: 1px solid white;

}
.idContainer span{
    font-size: 2.5vh;
    font-weight: 600;
}
.idContainer{
    position: absolute;
    right: 15%;
    color: white;
}
li{
    color: white;
    text-align: start;
    line-height: 5vh;
}
.dataList{
    list-style: none;
    
}
.textContainer{
    position: absolute;
    left: 18%;
    top: 37%;
    width: 62%;
    height: auto;
    font-size:2.3vh;
    font-weight: 600;
}
.container {
  width: 100%;
  height: 100%;
  background: url("../asset/基本信息3/3.1基本信息2022BG.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.container2 {
  position: relative;
  width: 100%;
  height: auto;
}
.container2Img{
    display: block;
    width: 100%;
}
</style>