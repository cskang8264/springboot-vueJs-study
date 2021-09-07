export default {
    name: 'MessageListItem',
    template: 
      `<li> 
      {{ item.text }} - {{ item.createdAt }}
      <button @click="deleteClicked>X</button>
      </li>
      `,
    props: {
      items: {
        type: Object,
        required: true
      }
    },
    methods: {
      deleteMessage () {
        this.$emit('delete-each-message')
      }
    }
  }