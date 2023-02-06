<script setup lang="ts">
/**부모로부터의 상속값**/
type Props = {
  text?: string;
};
const props = defineProps<Props>();

/**아코디언ref**/
const accordionOpen = ref(false);
const footerArea = ref();

/**아코디언Fn*/
const changeAccordionState = () => {
  accordionOpen.value = !accordionOpen.value;
  if (footerArea.value.style.maxHeight != 0) {
    footerArea.value.style.maxHeight = null;
  } else {
    footerArea.value.style.maxHeight = footerArea.value.scrollHeight + "px";
  }
};

/**스크롤탑**/
const scrollGoTop = () => {
  window.scrollTo(0, 0);
};
</script>

<template>
  <footer id="footer">
    <div class="link flex_sb_center">
      <div>
        <router-link class="inline_flex" to="/terms">이용약관</router-link>
        <router-link class="inline_flex" to="/policy"
          >개인정보처리방침</router-link
        >
        <!-- a 태그는 붙여서 써주세요. 여백 방지용 -->
      </div>
      <button class="btn_line" @click="changeAccordionState">
        사업자정보
        <i v-if="!accordionOpen" class="fa-solid fa-caret-up"></i>
        <i v-else class="fa-solid fa-caret-down"></i>
      </button>
    </div>
    <!-- 아코디언 내용 부분 -->
    <!-- v-if="accordionOpen" -->
    <div ref="footerArea" class="accordion_wrap mx-h-0">
      <div class="info">
        <p>대표이사 : {{ text }}</p>
        <p>사업자등록번호 : {{ text }}</p>
        <p>주소 : {{ text }}</p>
        <p>통신판매업신고번호 : {{ text }}</p>
      </div>
    </div>

    <div class="contact">
      <div class="info">
        <p class="tel">
          고객센터 <a href="">{{ text }}</a
          ><span> ({{ text }} {{ text }} ~ {{ text }})</span>
        </p>
      </div>
    </div>
    <!-- 푸터가 안 보일 때 bottom:52px / 보일 때 bottom:16px로 고정하면 더 예쁠 것 같습니다 -->
    <div class="top_btn" @click="scrollGoTop">
      <a role="button" onclick="">
        <i class="fa-solid fa-arrow-up"></i>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.mx-h-0 {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

/* footer */
#footer {
  position: relative;
  min-height: 130px;
  background: var(--color_gray3);
  font-size: 0.85em;
}

.link {
  padding: 8px 16px;
  border-top: 1px solid var(--color_gray1);
  border-bottom: 1px solid var(--color_gray1);
  text-align: left;
}

.link a {
  position: relative;
}

.link a:after {
  display: inline-block;
  content: "";
  width: 1px;
  height: 11px;
  margin: 0 8px;
  background: var(--color_gray1);
}

.link a:last-child:after {
  display: none;
}

.accordion_wrap {
  margin: 16px 0;
}

.info {
  padding: 0 16px;
  color: #a1a1a1;
}

.contact {
  margin-top: 14px;
}

.contact .info .tel {
  padding: 16px 0;
  font-size: 16px;
  font-weight: 700;
  color: #494949;
}

.contact .info .tel > span {
  font-size: 13px;
  font-weight: 500;
  color: #7c7c7c;
}

.contact .info.bottom {
  padding-bottom: 16px;
}

.top_btn {
  position: absolute;
  top: 50%;
  right: 3%;
  bottom: 16px;
  cursor: pointer;
  z-index: 999;
}

.top_btn a {
  display: block;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  background: #222;
  border-radius: 50px;
  text-align: center;
}

.top_btn a i {
  color: #fff;
  font-size: 24px;
  line-height: 48px;
  color: var(--color_white);
}
</style>
