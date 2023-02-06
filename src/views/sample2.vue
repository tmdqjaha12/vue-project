<script setup lang="ts">
import { useGobal, storeToRefs } from "@/stores";

/**===props===**/
// interface Props {
//   category: string[];
// }
// const props = defineProps<Props>();

//**===Pinia===**/
const globalState = useGobal(); // action
const { title } = storeToRefs(globalState); // state

//**===Ref===**/
const name = ref();
const list = ref([1, 2, 3, 4]); // go pinia
const skip = ref(); // go pinia
const take = ref(); // go pinia
const count = ref(); // go pinia

//**===Fns===**/
const hello = () => {
  alert(name.value);
};

// 화면 scroll catch
let timer: any = null;
const scrolls = () => {
  // window.innerHeight 실제 보이는 창의 높이
  // window.scrollY 페이지 상단에서부터 스크롤된 값
  // document.body.scrollHeight 페이지 전체 높이
  if (timer !== null) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    if (list.value.length >= count.value) return;

    // do something
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.body.scrollHeight
    ) {
      // you're at the bottom of the page
      // ???.setSkip(take.value);
      // ???.setTake(take.value + 10);
    }
  }, 150);
};

// 숫자만입력가능
const onChangePhone = (event: any) => {
  const text = event.currentTarget.value;
  event.currentTarget.value = text?.replace(/[^0-9]/g, "");
};

//**===Reactivity===**/
// https://vuejs.org/api/reactivity-core.html
// 종속성을 반응적으로 추적하면서 즉시 함수를 실행하고 종속성이 변경될 때마다 다시 실행합니다.
watchEffect(async () => {});

watch([name], async () => {});

//**===Hook===**/
// https://vuejs.org/api/composition-api-lifecycle.html
onMounted(async () => {
  window.addEventListener("scroll", scrolls);
});
onUnmounted(() => {
  window.removeEventListener("scroll", scrolls);
});
</script>

<template>
  <input type="text" v-model="name" />
  <button @click="hello">내 이름은?</button><br />
  <hr />

  <input
    type="text"
    @input="onChangePhone"
    placeholder="숫자만 입력가능합니다."
  />
  <br />
  <hr />
  <ul>
    <li v-for="(item, index) in list" :key="index">
      {{ item }}
    </li>
  </ul>
  <hr />
  <button @click="$router.back">뒤로가기</button><br />
</template>

<style scoped></style>
