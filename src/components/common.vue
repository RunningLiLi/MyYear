<template>
  <div class="container">
    <header>
      <img :src="props.imgTop" class="titleImg" alt="">
      <h2>{{ title }}</h2>
    </header>
    <section>
      <div class="body-header">
          <img class="headerImg" src="../asset/内容部分头部.png" alt="">
      </div>
      <div class="body">
        <div class="textcontainer">
          <slot></slot>
        </div>
        <div
          class="imgbuttomContainer"
          :style="{
            backgroundImage: `
                  url(${props.imgButtom})
                  `,
            backgroundSize:props.isContain?'contain':'100%'
          }"
          :resource="props.resource"
        >
         </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps(["imgButtom", "imgTop", "title","isContain","resource"]);
</script>
<style scoped>
.titleImg{
  display: block;
  height: 100%;
}
.textcontainer {
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  padding: 2vh 3vh;
  box-sizing: border-box;
  color: rgb(124, 124, 124);
  font-size: 2.1vh;
}
.imgbuttomContainer::before{
    content: attr(resource);
    position: absolute;
    color: rgb(80, 80, 80);
    color-scheme: none;
    font-size: 2.0vh;
    font-weight: 300;
    width: calc(100% - 40px);
    height: 1px;
    background-color: rgb(104, 104, 104);
    left: 50%;
    transform: translateX(-50%);
    top: -2.5vh;
}
.imgbuttomContainer {
  position: relative;
  flex-grow: 1;
  width: calc(100%);
  background-repeat: no-repeat;
  background-position: center bottom;
}
.imgbuttom {
  max-width: 100%;
  object-fit: contain;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  width: 100%;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  border: 1px solid #1d1d1d;
  border-top: none;
  padding-bottom: 0;
}
.body-header {
  width: 100%;
}
.headerImg{
    display: block;
    width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: url("../asset/从疫情打卡开始的bg.jpg");
  background-size: cover;
  box-sizing: border-box;
  padding: 7vw;
}
h2 {
  position: absolute;
  top: 8px;
  left: 80px;
  color: white;
}
header {
  position: relative;
  width: auto;
  margin: auto;
  height: 50px;
}
section {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-shadow: 14px 16px 0px 0px #15e201;
}
</style>