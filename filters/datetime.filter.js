const formatter = new Intl.DateTimeFormat('en-US', {
year: 'numeric', month: 'long', week: 'long', day: 'numeric',
hour: 'numeric', minute: 'numeric', second: 'numeric'
    });

// 패턴 적용 전
// Vue.filter('datetime', function(value) {
//     if (!value) {
//         return '';
//     }
//     return formatter.format(value);
// })




// 패턴 적용후
// 아래와 같이 몇줄의 코드만으로 필터의 패턴 적용이 가능한 이유는 data-fns라이브러리를 사용하기 때문
Vue.filter('datetime', function(value, pattern) {
    if (!value) {
        return '';
    }
    return formatter.format(value);
})