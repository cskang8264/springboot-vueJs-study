// 각 라이프사이클 훅 함수에서 인스턴스 이름과 단계 간단히 출력
export default {
    created () {
        console.log(`${this.$options.name} created`);
    },
    beforeMount() {
        console.log(`${this.$options.name} beforeMount`);
    },
    mounted () {
        console.log(`${this.$options.name} mounted`);
    },
    destroyed () {
        console.log(`${this.$options.name} destroyed`);
    }
};


