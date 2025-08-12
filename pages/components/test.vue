<script setup>
import { ref } from 'vue'

const text = ref("okamasonaesitelenkuwia")
</script>

<template>
  <div class="test-container">
    <input class="test" type="text" v-model="text" />
    <div class="big test kuwi">{{text ? text : "⠀"}}</div>
  </div>
</template>
