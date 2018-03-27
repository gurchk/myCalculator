import Vue from 'vue'

const component = Vue.extend({
  data () {
    return {
      history: [],
      calcNum: null
    }
  },
  methods: {
    setNumber (val) {
      if (this.calcNum === null) {
        this.calcNum = val
      } else {
        this.calcNum += JSON.stringify(val)
      }
    },
    computed: {
      disco () {
        if (this.calcNum === null) {
          return 0
        } else {
          return this.calcNum + 10
        }
      }
    }
  }
})

Vue.component('calculator', component)
export default component
