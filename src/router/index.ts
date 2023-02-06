import Sample from "@/views/sample.vue";
import Sample2 from "@/views/sample2.vue";
import SamplePopup from "@/views/samplePopup.vue";
import SampleLayout from "@/views/sampleLayout.vue";
import SampleAgree from "@/views/sampleAgree.vue";
import SampleSwiper from "@/views/sampleSwiper.vue";
import { createRouter, createWebHistory } from "vue-router";
import { useGobal, storeToRefs } from "@/stores";

/**============================================================================
 * 라우터 (https://router.vuejs.org/zh/)
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "sample",
      component: Sample,
    },
    {
      path: "/sample2",
      name: "sample2",
      component: Sample2,
    },
    {
      path: "/samplePopup",
      name: "samplePopup",
      component: SamplePopup,
    },
    {
<<<<<<< HEAD
      path: "/sampleLayout",
      name: "sampleLayout",
      component: SampleLayout,
    },
    {
      path: "/sampleAgree",
      name: "sampleAgree",
      component: SampleAgree,
    },
    {
      path: "/sampleSwiper",
      name: "sampleSwiper",
      component: SampleSwiper,
    },
    {
=======
>>>>>>> 3f73cf0f92f3f2772724fe5d875225a0dff1e0a6
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/sample.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log("to => ", to);
    console.log("from => ", from);
    // 뒤로가기시 position 유지, 및 페이지 접근시 position top
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

/**============================================================================
 * NProgress 로딩바
 */
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: true,
  speed: 300,
  // barSelector: "",
  // trickle: true,
  // minimum: 0,
});

router.beforeEach((_to, _from, next) => {
  NProgress.start(); // start progress bar

  const globalState = useGobal(); // action
  const { isLoggedIn } = storeToRefs(globalState); // state

  if (isLoggedIn.value) alert("로그인상태입니다.");

  next();
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});

export default router;
