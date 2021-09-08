import MessageListItem from './MessageListItem.js'
import lifecycleLogger from '../mixins/lifecycle-logger.mixin.js'

export default {
    name: 'MessageList',
    // mixins: [lifecycleLogger],
    template: 
      `<ul>
        <message-list-item v-for="item in items" :item="item"
        :key="item.id" @delete="deleteMessage(item)"></message-list-item>   
      </ul>`,
      // 상위 객체로 부터 넘겨받는 데이터
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    components: {
        //자식 컴포넌트
      MessageListItem
      },
    methods: {
      deleteMessage (message) {
        this.$emit('delete', message)
      }
    }
  }
