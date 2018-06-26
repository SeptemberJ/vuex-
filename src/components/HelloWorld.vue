<template>
  <div class="hello">
    <h1>{{ getCount }} times</h1>
    
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters([
      'getCount'
      // ...
    ]),
    Count: function () {
      return this.$store.state.count
    }
  },
  methods: {
    ...mapActions([
      'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
    'decrement'
    ])
    //...mapActions({
    //  add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
    //})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
