<script setup lang="ts">
const activeModal = ref(false);

const closeModal = () => {
  const body = document.querySelector("body");
  if (!body) return;
  body.style.removeProperty("overflow");
  activeModal.value = false;
};

const dontWatchModal = (key: string, days: number) => {
  setCookie(key, "done", days);
  const body = document.querySelector("body");
  if (!body) return;
  body.style.removeProperty("overflow");
  activeModal.value = false;
};

const setCookie = (name: string, value: string, expiredays: number) => {
  const todayDate: any = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie =
    name +
    "=" +
    escape(value) +
    "; path=/; expires=" +
    todayDate.toGMTString() +
    ";";
};

const init = (key: string) => {
  const cookiedata = document.cookie;
  const body = document.querySelector("body");
  if (!body) return;
  if (cookiedata.indexOf(`${key}=done`) < 0) {
    body.style.overflow = "hidden";
    activeModal.value = true;
  } else {
    body.style.removeProperty("overflow");
    activeModal.value = false;
  }
};

onMounted(async () => {
  init("test");
});
</script>

<template>
  <button @click="$router.back">뒤로가기</button>
  <br />

  <div class="modal-overlay" :class="{ 'd-none': !activeModal }">
    <div class="modal-window">
      <div class="modal-title">
        <h2>제휴채널 안내</h2>
      </div>
      <div class="modal-content">
        <p>
          모바일 상품권 포인트 거래 서비스는
          <br />
          KB국민은행의 제휴사인 GIFCON에서 제공합니<br />다.
        </p>
        <small>
          KB국민은행은 GIFCON 서비스
          <br />
          페이지에 연결하는 역할만 하며,
          <br />
          <strong>
            서비스 제공과 그 책임은
            <br />
            GIFCON에 있습니다.
          </strong>
        </small>
      </div>
      <div class="modal-btn-area">
        <button class="dont-watch" @click="dontWatchModal('test', 7)">
          7일간 보지않기
        </button>
        <button class="close" @click="closeModal">닫기</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  z-index: 9999;

  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
}

.modal-window {
  background: white;
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(1313.5px);
  border-radius: 3px;

  width: 400px;
  /* height: 500px; */
  position: relative;
  top: -100px;
  display: flex;
  flex-direction: column;

  padding: 0;
  border: 0;
}

.modal-title {
  padding: 14px 10px 12px 10px;
  border-bottom: 1px solid black;
  text-align: center;
  background: #fbfbfb;
  border-bottom: 1px solid #e7e7e7;
}

.modal-title h2 {
  font-size: 18px;
  color: #2a2a2a;
}

.modal-content {
  /* margin-top: 20px; */
  padding: 30px;
  flex: 1;
  text-align: center;
  font-size: 17px;
  color: #2a2a2a;
}
.modal-content small {
  display: block;
  margin-top: 15px;
  font-size: 14px;
  line-height: 1.3;
  color: #777;
}

.modal-btn-area {
  /* border-top: 1px solid black; */
  margin-top: auto;
  display: flex;
}

.modal-btn-area .dont-watch {
  /* border-right: 1px solid black; */
  flex: 2;
  text-align: center;
  padding: 12px 0px 14px 0px;
  background: #ff5f2e;
  color: white;
  font-size: 15px;
  font-weight: 500;
}
.modal-btn-area .close {
  flex: 1;
  text-align: center;
  padding: 12px 0px 14px 0px;
  background: #4d4949;
  color: white;
  font-size: 15px;
  font-weight: 500;
}

.d-none {
  display: none;
}
</style>
