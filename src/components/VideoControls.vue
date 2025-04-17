<template>
    <div class="controls">
      <button class="btn btn-success" @click="start" :disabled="isActive">Iniciar</button>
      <button class="btn btn-danger" @click="stop" :disabled="!isActive">Detener</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VideoControls',
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      start() {
        this.$emit('start');
      },
      stop() {
        this.$emit('stop');
      }
    }
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