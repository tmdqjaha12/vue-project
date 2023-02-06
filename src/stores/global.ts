import { defineStore, type PiniaCustomStateProperties } from "pinia";
import { useStorage, type RemovableRef } from "@vueuse/core";

type Globaltate = {
  language: string;
  isMobile: boolean;
  isIos: boolean;
  orientation: string;
  isLoggedIn: boolean;
  loading: boolean;
  title: string;
  test: RemovableRef<string | undefined>;
};
type GlobalGetters = {};
type GlobalActions = {
  setIsLoggedIn: (status: boolean) => void;
  setTitle: (text: string) => void;
  setLoading: (loading: boolean) => void;
};

export const useGobal = defineStore<
  string,
  Globaltate,
  GlobalGetters,
  GlobalActions
>("global", {
  state() {
    return {
      language: navigator.language,
      isMobile: Boolean(
        navigator.userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      ),
      isIos: Boolean(navigator.userAgent.match(/iPhone|iPad|iPod/i)),
      orientation: !navigator.maxTouchPoints
        ? "desktop"
        : !window.orientation
        ? "portrait"
        : "landscape",
      isLoggedIn: false,
      loading: false,
      title: "",
      test: useStorage("test", undefined), // 새로고침 유지 state
    };
  },
  getters: {},
  actions: {
    setIsLoggedIn(status: boolean) {
      this.isLoggedIn = status;
    },
    setTitle(text: string) {
      this.title = text;
    },
    setLoading(loading: boolean) {
      this.loading = loading;
    },
  },
});
