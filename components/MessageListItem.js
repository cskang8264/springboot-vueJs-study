// 필터적용은 적용하고자 하는 mustach에 | 를 추가하고 필터명을 기재
// expression | filter1 | filter2 와 같이 다중 필터 적용 가능
import lifecycleLogger from '../mixins/lifecycle-logger.mixin.js'


export default {
  name: 'MessageListItem',
  // mixins: [lifecycleLogger],
  template: `<li>{{ item.text }} - {{ item.createdAt | datetime('MM/DD/YYYY') }} 
    <button @click="deleteClicked">X</button></li>`,
  props: {
    item: {
      type: Object,
      required: true
    } 
  },
  methods: {
    deleteClicked () {
      this.$emit('delete')
    }
  }
}