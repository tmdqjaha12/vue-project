import axios from "axios";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp, h, provide } from "vue";
import VueAxios from "vue-axios";
import VueLazyload from "vue-lazyload";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

// css import
import "./assets/styles/reset.css";

// apollo import
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";

/**
 * Apollo client
 */
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: process.env.VUE_APP_GRAPHQL_URL,
});
// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

/**
 * pinia
 */
const pinia = createPinia();

// CREATE
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.use(i18n);

app.use(VueLazyload, {
  // preLoad: 1.3, // 사전 적재 높이의 비율?
  error: "", // 에러이미지
  loading: "", // 로딩이미지
  // attempt: 1, // 시도횟수
});

app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);

pinia.use(piniaPluginPersistedstate);

app.use(router).use(pinia);

app.mount("#app");
