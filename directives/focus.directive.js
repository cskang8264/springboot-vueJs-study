// 페이지가 열린 뒤 폼의 입력 항목에 자동으로 초점을 맞추는 커스텀 지시자 생성
// 'v-focus' 라는 전역(Vue.directive) 커스텀 지시자
// component 스코프의 지시자를 만들고 싶으면 컴포넌트의 directives 프로퍼티 활용

Vue.directive('focus', {
        // 요소(여기서 말하자면 지시자)가 부모 노드에 삽입됐을 때 호출
        inserted: function (el) {
            el.focus(); //요소에 초점을 둬라.
        }
});