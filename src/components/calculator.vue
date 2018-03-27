<template>
  <div class="wrapper">
    <div class="calc">
    <h1>Varför</h1>
      <div class="history">
        <span v-for="calculation of history">
          {{calculation}}
        </span>
        <div class="display">{{display}}</div>
      </div>
      <button @click="setNumber(i)" type="button" v-for="i in 9">
        {{i}}
      </button>
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
