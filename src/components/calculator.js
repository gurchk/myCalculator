import Vue from 'vue'

const component = Vue.extend({
  data () {
    return {
      history: [],
      input: '',
      allowedChars: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', '(', ')' ]
    }
  },
  methods: {
    setOperator (op) {
      this.input += op
    },
    evaluate () {
      const expression = []
      for (let i = 0; i < this.input.length; i++) {
        expression.push(this.input.charAt(i))
      }

      for (const char of expression) {
        if (!this.allowedChars.includes(char)) {
          alert('Dont try anything silly now.. only numbers and operators are allowed')
        } else {
          try {
            const evalResult = eval(this.input)
            this.input = evalResult
            console.log('trying..')
            this.history.push(evalResult)
            break
          } catch (error) {
            console.log(error)
          }
        }
      }
    },
    squareRoot () {
      this.evaluate()
      Math.sqrt(Number(this.input))
    },
    clear () {
      this.input = ''
    }
  },
  computed: {
    isPosetive () {
      Number(this.input) > -1
    }
  }
})

Vue.component('calculator', component)
export default component
