<template>
  <swiper :direction="'vertical'" :modules="modules" class="mySwiper">
    <swiper-slide><index1 /></swiper-slide>
    <swiper-slide><Transiton /></swiper-slide>
    <swiper-slide><BaseData /></swiper-slide>
    <swiper-slide><Epidemic /></swiper-slide>
    <swiper-slide><Library /></swiper-slide
    ><swiper-slide><Library2 /></swiper-slide>
    <swiper-slide><Contest /></swiper-slide
    ><swiper-slide><Science /></swiper-slide>
    <swiper-slide><Harvest /></swiper-slide>
    <swiper-slide><Struggle1 /></swiper-slide>
    <swiper-slide><Struggle2 /></swiper-slide>
    <swiper-slide><Struggle3 /></swiper-slide>
    <swiper-slide><Consume /></swiper-slide>
    <swiper-slide><Physical/></swiper-slide>
    <swiper-slide><Internetl/></swiper-slide>
    <swiper-slide><Dorm/></swiper-slide>
    <swiper-slide><Forecast/></swiper-slide>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "./App.css";
import "./common.css";
import index1 from "./components/index1.vue";
import Epidemic from "./components/epidemic4.vue";
import Transiton from "./components/transition2.vue";
import BaseData from "./components/baseData3.vue";
import Library from "./components/library5.vue";
import Library2 from "./components/library6.vue";
import Contest from "./components/contest7.vue";
import Science from "./components/science8.vue";
import Harvest from "./components/harvest9.vue";
import Struggle1 from "./components/struggle10.vue";
import Struggle2 from "./components/struggle11.vue";
import Struggle3 from "./components/struggle12.vue";
import Consume from "./components/consume13.vue";
import Physical from "./components/physical14.vue";
import Internetl from "./components/internet15.vue";
import Dorm from "./components/dorm16.vue";
import Forecast from "./components/forecast17.vue";
</script>
