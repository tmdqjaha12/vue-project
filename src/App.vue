<script setup lang="ts">
import { onMounted } from "vue";
import { GET_BASICINFO_QUERY } from "./graphql";
import type { getBasicInfoQuery } from "./graphql/apollo.interface";

// console.log("result =>", result);
// console.log("result =>", data.value);

const data = ref();

watch(data, () => {
  // console.log("result =>", data.value);
});

onMounted(() => {
  const { loading, onResult, onError } = useQuery<getBasicInfoQuery>(
    GET_BASICINFO_QUERY,
    {}
  );

  onResult((queryResult) => {
    console.log(queryResult.data.getBasicInfoList);
  });

  onError((queryError) => {
    console.log(queryError);
  });
});
</script>

<template>
  <h1>You did it!</h1>
  <hr />
  <router-view />
</template>

<style scoped></style>
