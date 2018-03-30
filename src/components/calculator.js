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
    unshiftMaxTen (val) {
      this.history.unshift(val)
      if (this.history.length >= 11) {
        this.history.pop()
      }
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
            this.unshiftMaxTen(evalResult)
            break
          } catch (error) {
            console.log(error)
          }
        }
      }
    },
    squareRoot () {
      const evalResult = Math.sqrt(Number(this.input))
      this.input = evalResult
      this.unshiftMaxTen(evalResult)
    },
    pow () {
      const y = Number(prompt(this.input + ' to the power of: '))
      const evalResult = Math.pow(Number(this.input), y)
      this.input = evalResult
      this.unshiftMaxTen(evalResult)
    },
    clear () {
      this.input = ''
    }
  },
  computed: {
    isPosetive () {
      return Number(this.input) > 0
    }
  }
})

Vue.component('calculator', component)
export default component
