<script setup lang="ts">
// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

// Import Swiper Vue.js components
// https://swiperjs.com/vue
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";

const modules = [Navigation, Pagination, Scrollbar, A11y];

const list = ref([
  {
    url: "https://coupon-mall.s3.ap-northeast-2.amazonaws.com/banner.jpg",
  },
  {
    url: "https://coupon-mall.s3.ap-northeast-2.amazonaws.com/banner.jpg",
  },
  {
    url: "https://coupon-mall.s3.ap-northeast-2.amazonaws.com/banner.jpg",
  },
]);

//**===Fn===**/
const onSwiper = (swiper: any) => {
  console.log("swiper => ", swiper);
};

const onSlideChange = () => {
  console.log("slide change");
};
</script>

<template>
  <!-- :pagination="pagination" -->
  <!-- 이미지 슬라이드 영역 (임시) -->
  <section class="main_slider">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <!-- item.bnn_click_link -->
      <swiper-slide v-for="(item, index) in list" :key="index">
        <img :src="item.url" alt=""
      /></swiper-slide>
      <!-- pagination -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
  <!-- / 이미지 슬라이드 영역 (임시) -->
  <hr />
  <button @click="$router.back">뒤로가기</button><br />
</template>

<style scoped>
.main_slider img {
  display: block;
}
</style>
