<template>
  <div class="wrapper">
    <div class="calc">
    <h1>Varför</h1>
      <div class="history">
        <span v-for="(calculation, index) of history" :key="index">
          {{calculation}}
        </span>
      </div>
      <input v-model="input" type="text" placeholder Number.../>
      <!--<button @click="setNumber(i)" type="button" v-for="i in 9">-->
        <!--{{i}}-->
      <!--</button>-->
      {{isPosetive}}
      <button @click="setOperator('+')" type="button">+</button>
      <button @click="setOperator('*')" type="button">*</button>
      <button @click="setOperator('-')" type="button">-</button>
      <button @click="setOperator('/')" type="button">/</button>
      <button v-show="isPosetive" @click="squareRoot" type="button">x2</button>
      <button @click="clear" type="button">Clear</button>
      <button @click="evaluate" type="button">=</button>
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

  .calc {

  }
</style>
