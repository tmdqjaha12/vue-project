<script setup lang="ts">
// import queryString from "query-string";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
const text = ref("테스트 텍스트");
</script>

<template>
  <!--wrap-->
  <div id="wrap">
    <!-- headr -->
    <Header></Header>
    <!-- /headr -->

    <!--content-->
    <section id="content">
      <slot></slot>
    </section>
    <!--/content-->

    <!-- footer -->
    <Footer :text="text"></Footer>
    <!-- /footer -->
  </div>
  <!--/wrap-->
</template>

<style></style>
