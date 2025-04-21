<template>
  <div class="controls">
    <button class="btn btn-success" @click="onStart" :disabled="props.isActive">Iniciar</button>
    <button class="btn btn-danger" @click="onStop" :disabled="!props.isActive">Detener</button>
  </div>
</template>

<script setup>
/* global defineProps, defineEmits */
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['start', 'stop'])

function onStart() {
  emit('start')
}
function onStop() {
  emit('stop')
}
</script>

<style scoped>
.controls {
  margin-bottom: 10px;
}
.btn {
  margin-right: 5px;
}
</style>