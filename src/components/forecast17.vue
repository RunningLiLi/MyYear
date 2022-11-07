<template>
  <div class="container">
      <div class="textContainer">
        <div class="triangle">
            <div class="triangle2"></div>
        </div>
        <ul>
        </ul>
        <ul>
            <li>抱歉，你没有这次的学业预警数据。</li>
            <li>根据学生数据现状，仅对部分学院学生做了学业预警应用，</li>
            <li>本次学业预警是根据往届学长学姐的消费和学业等相关数据建模，</li>
            <li>结合学生本人这一学年相关数据，</li>
            <li>运用机器学习算法，预测学生本学期的学业情况。</li>
            <li>根据往届学长学姐的消费和学业等相关数据建模，</li>
            <li>结合你自身这一学年的数据，</li>
            <li>运用机器学习算法，预测您本学期的学业情况，</li>
        </ul>
        <span class="tips">(本数据处理结果只做参考作用，不做任何结论。)</span>
      </div>
  </div>
</template>

<script setup>
import request from "../request"
const {data}=await  request("/myterm/predict",{})
</script>

<style scoped>
    .triangle2{
        position: absolute;
        left: 50%;
        top: -2.2vh;
        transform: translateX(-50%);
        height: 0;
        width: 0;
        border-top: 0.8vh solid rgb(255, 255, 255);
        border-right: 0.8vh solid transparent;
        border-left: 0.8vh solid transparent;
        border-bottom: 0.8vh solid transparent;
    }
    .triangle{
        position: absolute;
        left: 50%;
        top: 2vh;
        transform: translateX(-50%);
        border: 2.5vh solid purple;
        height: 0;
        width: 0;
        border-top: 2.2vh solid rgb(151, 114, 243);
        border-right: 2.3vh solid transparent;
        border-left: 2.3vh solid transparent;
        border-bottom: 2.3vh solid transparent;
    }
    .tips{
        position: absolute;
        color: rgb(161, 161, 161);
        font-size: 1.8vh;
        width: 100%;
        left: 50%;
        bottom: 10px;
        transform: translateX(-50%);
    }
    li{
        text-align: start;
        line-height: 3vh;
    }
    ul{
        list-style: none;
    }
    .textContainer{
        position: relative;
        border-radius: 1.5vh;
        border:2px solid black;
        box-sizing: border-box;
        width: 100%;
        height: auto;
        min-height: 50vh;
        background-color: white;
        padding: 5vh 2.5vh 5vh 2.5vh;
        font-size: 2vh;
    }
    .container{
       display: flex;
       flex-direction: column;
       justify-content: flex-end;
       width: 100%;
       height: 100%;
       background: 
       url("../asset/学业预测17/17.学业预测2022bg.jpg");
       background-size: cover; 
       box-sizing: border-box;
       padding: 20px; 
    }
</style>
