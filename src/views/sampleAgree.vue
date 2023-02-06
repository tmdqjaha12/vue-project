<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

//**===Pinia===**/

//**===Ref===**/
const agreeAll = ref(false);

const agree1 = ref(false);
const label1 = ref();
const area1 = ref();

const agree2 = ref(false);
const label2 = ref();
const area2 = ref();

const phone = ref();

//**===Fnc===**/
const checkAgree = async () => {
  if (
    !(
      (agreeAll.value && agree1.value && agree2.value)
      //  && agree3.value
    )
  ) {
    alert("약관에 동의해주세요.");
    return;
  }
  alert("동의되었습니다.");
};

//
const aggreMentAccordionAction = (agree: any, label: any, area: any) => {
  if (agree) {
    label.className = label.className.replace("collapsed", "expanded");
    area.className = area.className.replace("collapsed", "expanded");
    area.style.maxHeight = area.scrollHeight + "px";
  } else {
    label.className = label.className.replace("expanded", "collapsed");
    area.className = area.className.replace("expanded", "collapsed");
    area.style.maxHeight = null;
  }
  if (
    agree1.value &&
    agree2.value
    //  && agree3.value
  ) {
    agreeAll.value = true;
  } else {
    agreeAll.value = false;
  }
};

//
const agreeAllFn = () => {
  if (!agreeAll.value) {
    agree1.value = true;
    agree2.value = true;
    // agree3.value = true;
  } else {
    agree1.value = false;
    agree2.value = false;
    // agree3.value = false;
  }
};

//**===Reactivity===**/
watchEffect(async () => {});

watch([agree1], () => {
  aggreMentAccordionAction(agree1.value, label1.value, area1.value);
});
watch([agree2], () => {
  aggreMentAccordionAction(agree2.value, label2.value, area2.value);
});

//**===Hook===**/
onMounted(async () => {});
</script>

<template>
  <div>
    <!-- 약관동의 -->
    <section class="order_agree">
      <div class="box">
        <p class="tit in_tit">약관동의</p>
        <div class="field_wrap flex_center">
          <dl class="form_agree">
            <dt>
              <input
                v-model="agreeAll"
                type="checkbox"
                id="agreeAll"
                class="checkbox_all"
                @click="agreeAllFn"
              />
              <label for="agreeAll">
                <span>전체동의</span>
                <span class="txt">(필수)</span>
              </label>
            </dt>
            <dd>
              <input
                v-model="agree1"
                type="checkbox"
                id="agree1"
                class="checkbox_item"
              />
              <label for="agree1">
                <a ref="label1" class="accordion-trigger collapsed">
                  <!-- collapsed/ expanded -->
                  전자금융거래 기본약관<span class="txt">(필수)</span>
                </a>
              </label>
              <div
                ref="area1"
                id="accordion1"
                class="accordion-content collapsed mx-h-0"
                aria-expanded="true"
              >
                <!-- collapsed/ expanded -->
                <p>
                  <span>
                    깊콘(Gifcon) 서비스 제공을 위해 개인정보를 제공합니다. 보다
                    자세한 개인정보 제공항목은 동의 내용에서 확인하실 수
                    있습니다. 정보는 직후 지체없이 파기됩니다.
                  </span>
                </p>
              </div>
            </dd>
            <dd>
              <input
                v-model="agree2"
                type="checkbox"
                id="agree2"
                class="checkbox_item"
              />
              <label for="agree2">
                <a ref="label2" class="accordion-trigger collapsed"
                  ><!-- collapsed/ expanded -->
                  개인정보의 수집 및 이용에 대한 동의<span class="txt"
                    >(필수)</span
                  >
                </a>
              </label>
              <div
                ref="area2"
                id="accordion1"
                class="accordion-content collapsed mx-h-0"
                aria-expanded="true"
              >
                <!-- collapsed/ expanded -->
                <p>
                  <span>
                    깊콘(Gifcon) 서비스 제공을 위해 개인정보를 제공합니다. 보다
                    자세한 개인정보 제공항목은 동의 내용에서 확인하실 수
                    있습니다. 정보는 직후 지체없이 파기됩니다.
                  </span>
                </p>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <!-- / 약관동의 -->
  </div>
  <br />
  <hr />
  <button @click="checkAgree">동의확인하기</button>
  <br />
  <hr />
  <button @click="$router.back">뒤로가기</button><br />
</template>

<style scoped>
.mx-h-0 {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

/* 약관동의 */
dl.form_agree {
  width: 100%;
}

dl.form_agree dt {
  width: 100%;
  margin-bottom: 10px;
  padding: 16px;
  background: #f6f6f6;
  border-radius: 12px;
  line-height: 1.5;
}

dl.form_agree dt span {
  font-size: 18px;
  font-weight: 500;
}

dl.form_agree dt .txt,
dl.form_agree dd .txt {
  margin-left: 5px;
  vertical-align: top;
  color: var(--color_tangerine);
}

dl.form_agree input[type="checkbox"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

dl.form_agree input[type="checkbox"] + label {
  display: block;
  width: 100%;
  position: relative;
  padding-left: 33px;
  cursor: pointer;
}

dl.form_agree dt input[type="checkbox"] + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  text-align: center;
  background: url(../assets/images/check_off.png) no-repeat;
  box-sizing: border-box;
  border-radius: 5px;
}

dl.form_agree dt input[type="checkbox"]:checked + label:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  background: url(../assets/images/check_on.png) no-repeat;
  background-position: center center;
  border-radius: 5px;
}

dl.form_agree dd {
  display: block;
  border-bottom: 1px solid #eee;
  padding: 10px 0 10px 16px;
}

dl.form_agree dd:last-child {
  border: 0;
}

dl.form_agree dd input[type="checkbox"] + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 3px;
  width: 16px;
  height: 16px;
  text-align: center;
  background: url(../assets/images/s_check_off.png) no-repeat;
  box-sizing: border-box;
  border-radius: 5px;
}

dl.form_agree dd input[type="checkbox"]:checked + label:after {
  content: "";
  position: absolute;
  top: 3px;
  left: 0;
  width: 16px;
  height: 16px;
  background: url(../assets/images/s_check_on.png) no-repeat;
  background-position: center center;
  border-radius: 5px;
}

.accordion-content {
  overflow: hidden;
  position: relative;
  -webkit-transition: height 0.25s;
  -moz-transition: height 0.25s;
  transition: height 0.25s;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.accordion-content p {
  overflow-y: auto;
  height: auto;
  padding: 15px 20px;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  border-radius: 12px;
  margin-top: 10px;
}

.accordion-content p:after {
  content: "";
  position: absolute;
  top: 13px;
  left: 0;
  bottom: 2px;
  width: 4px;
  background-color: #efeff0;
}

.accordion-trigger {
  display: block;
  position: relative;
}

.accordion-trigger:after {
  display: block;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2em;
}

.accordion-trigger.collapsed:after {
  content: "";
  display: block;
  width: 8px;
  height: 14px;
  background: url(http://publish.rs-team.co.kr/kb-wooyeon/_statics/images/right_arrow.png)
    no-repeat center;
  transition: 0.2s;
}

.accordion-trigger.expanded:after {
  content: "";
  display: block;
  width: 14px;
  height: 8px;
  background: url(http://publish.rs-team.co.kr/kb-wooyeon/_statics/images/btm_arrow.png)
    no-repeat center;
  font-size: 12px;
  color: #777;
  transition: 0.2s;
}
</style>
