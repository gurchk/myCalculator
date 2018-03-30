<template>
  <div class="wrapper">
    <div class="calc">
      <h1>Calculator</h1>

      <input @keyup.enter="evaluate" v-model="input" type="text" placeholder="1+2*(4/2)..." />
      <button @click="setOperator('+')" type="button">+</button>
      <button @click="setOperator('*')" type="button">*</button>
      <button @click="setOperator('-')" type="button">-</button>
      <button @click="setOperator('/')" type="button">/</button>
      <button @click="pow" type="button">x&#178;</button>
      <button v-show="isPosetive" @click="squareRoot" type="button">&#8730;</button><br><br>
      <button @click="clear" type="button">Clear</button>
      <button @click="evaluate" type="button">=</button>
      <div class="history">
        <span class="history-item" v-for="(calculation, index) of history" :key="index">
          {{calculation}}
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="js" src="./calculator.js"></script>
<style scoped>
.wrapper {
  position: relative;
  display: block;
  margin: 0 auto;
}
.history-item {
  display: block;
  padding: 2px 0;
}
.history-item:nth-child(2) {
  opacity: 0.9;
}

.history-item:nth-child(3) {
  opacity: 0.8;
}

.history-item:nth-child(4) {
  opacity: 0.7;
}

.history-item:nth-child(5) {
  opacity: 0.6;
}

.history-item:nth-child(6) {
  opacity: 0.5;
}
.history-item:nth-child(7) {
  opacity: 0.4;
}

.history-item:nth-child(8) {
  opacity: 0.3;
}

.history-item:nth-child(9) {
  opacity: 0.2;
}

.history-item:nth-child(10) {
  opacity: 0.1;
}

.history-item:nth-child(11) {
  opacity: 0;
}

.history {
  margin: 10px 0 0 0;
  font-size: 16px;
}
input {
  display: block;
  margin: 0 auto;
  height: 40px;
  margin-bottom: 20px;
  -webkit-border-radius: 4px;
  border: none;
  -moz-border-radius: 4px;
  background-color: #e6ae86;
  border-radius: 4px;
  width: 250px;
  padding: 0 10px;
  font-size: 20px;
}
button {
  outline: none;
  border: none;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  background-color: #997459;
  padding: 5px 15px;
  font-size: 16px;
}

.calc {
}
</style>
