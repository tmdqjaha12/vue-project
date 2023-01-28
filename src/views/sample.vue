<script setup lang="ts">
import i18n from "@/i18n";
import { useGobal, storeToRefs } from "@/stores";
import { mobile } from "@/utils/validate";

const globalState = useGobal(); // action
const { isLoggedIn } = storeToRefs(globalState); // state

const checkMobile = () => {
  alert(mobile());
};

const checkLoggedIn = () => {
  globalState.setIsLoggedIn(!isLoggedIn.value);
};

const changeLocale = () => {
  if (i18n.global.locale === "ko") {
    i18n.global.locale = "en";
    return;
  }
  if (i18n.global.locale === "en") {
    i18n.global.locale = "ko";
    return;
  }
};
</script>

<template>
  {{ $t("button.add") }}
  <br />
  <button @click="changeLocale">언어 변환</button><br />
  <hr />
  <button @click="checkMobile">모바일여부확인</button><br />
  <hr />
  <button @click="checkLoggedIn">로그인상태변경: {{ isLoggedIn }}</button><br />
  <hr />
  <button @click="$router.push('/sample2')">go sample2</button><br />
  <hr />
  <button @click="$router.push('/samplePopup')">go samplePopup</button><br />
  <hr />
</template>

<style scoped></style>
