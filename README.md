# 23.01.28 v0.0.1 하승버

# node v18.12.1

npm init vue@latest
npm install
npm run dev

---

---

## Text Interpolation

- <span>Message: {{ msg }}</span>

## raw HTML

- <p>Using text interpolation: {{ rawHtml }}</p> (x)
- <p>Using v-html directive: <span v-html="rawHtml"></span></p> (o) <!-- xss취약점 가능성 -->

## Attribute Bindings

- <div v-bind:id="dynamicId"></div>
- <div :id="dynamicId"></div>

## Boolean Attributes

- <button :disabled="isButtonDisabled">Button</button>

## Dynamically Binding Multiple Attributes

```javascript
data() {
  return {
    objectOfAttrs: {
      id: 'container',
      class: 'wrapper'
    }
  }
}
```

- <div v-bind="objectOfAttrs"></div>

---

---

# Built-in Directives

- v-text: textContent속성을 설정

- v-html: innerHTML을 업데이트

- v-show: 항상 렌더링 되며 css속성을 통한 display여부 설정, 초기 렌더링 비용이 높다, 무언가 자주 전환할 경우 유리

- v-if: v-show와 다르게 조건부 렌더링, v-for보다 높은 우선순위, v-if와 v-for 동시사용 지양, 토글 비용이 높다, 런타임에 조건이 변경될 가능성이 낮을경우 유리
- v-else: v-if와 함께 사용

- v-else-if: v-if와 함께 사용

- v-for: 소스 데이터를 기반으로 요소 또는 템플릿을 여러번 렌더링 <div v-for="item in items">, <div v-for="(item, index) in items"></div>
  vue에 hint를 주어 각 노드의 id를 추적하고 기존 요소를 재사용하고 재정렬하려면 각 항목에 고유한 속성을 제공해야 함. <div v-for="item in items" :key="item.id">

- v-on: 요소에 이벤트 리스너를 연결 <button @click="doThis"></button>

- v-bind: element의 attribute를 동적으로 bind할 경우 사용 (하나 이상의 속성 또는 구성 요소 소품을 표현식에 동적으로 바인딩)

- v-model: form input 또는 컴포넌트의 양방향 바인딩을 만듬 (https://vuejs.org/guide/essentials/forms.html#text, https://vuejs.org/guide/components/events.html#usage-with-v-model)

- v-slot: 지정된 슬롯 또는 범위가 지정된 슬롯에서 소품을 받을 것으로 예상되는 슬롯을 나타냅니다. (https://vuejs.org/guide/components/slots.html#scoped-slots)

- v-pre: 이 요소와 모든 하위 항목에 대한 컴파일을 건너뜀 <span v-pre>{{ this will not be compiled }}</span>

- v-once: 요소와 구성 요소를 한 번만 렌더링하고 향후 업데이트를 건더뜀 <span v-once>This will never change: {{msg}}</span>

- v-memo(3.2+): https://vuejs.org/api/built-in-directives.html#v-once

- v-cloak: 준비가 될 때까지 컴파일되지 않은 템플릿을 숨기는데 사용(이 지시어는 빌드 단계가 없는 설정에서만 필요합니다.)

```javascript
[v-cloak] {
  display: none;
}

<div v-cloak>
  {{ message }}
</div>
컴파일이 완료될 때까지 이 <div>표시되지 않습니다.
```
