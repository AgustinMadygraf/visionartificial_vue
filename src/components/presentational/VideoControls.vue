<!--
Path: src/components/presentational/VideoControls.vue
Componente: VideoControls (Presentacional)

DESCRIPCIÓN:
Componente presentacional puro que proporciona controles para iniciar y detener
streams de video, así como para mostrar mensajes de estado.

PROPS:
- isActive: Boolean - Indica si el stream está activo
- isLoading: Boolean - Indica si el stream está cargando
- statusMessage: String - Mensaje de estado a mostrar
- messageType: String - Tipo de mensaje ('error', 'info', 'success' o vacío)

EVENTOS:
- start: () => void - Emitido cuando se solicita iniciar un stream
- stop: () => void - Emitido cuando se solicita detener un stream
-->

<template>
  <div class="video-controls">
    <div class="btn-group d-flex flex-wrap mb-2" role="group" aria-label="Video controls">
      <button 
        class="btn btn-success me-2 mb-2" 
        @click="onStart" 
        :disabled="isActive || isLoading"
      >
        <span v-if="isLoading">
          <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
          Iniciando...
        </span>
        <span v-else>
          <i class="bi bi-play-fill"></i> Iniciar
        </span>
      </button>
      <button 
        class="btn btn-danger mb-2" 
        @click="onStop" 
        :disabled="!isActive || isLoading"
      >
        <i class="bi bi-stop-fill"></i> Detener
      </button>
    </div>
    <div v-if="statusMessage" 
         class="alert p-2 mb-0" 
         :class="{
           'alert-danger': messageType === 'error',
           'alert-info': messageType === 'info',
           'alert-success': messageType === 'success'
         }">
      <small>{{ statusMessage }}</small>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  statusMessage: {
    type: String,
    default: ''
  },
  messageType: {
    type: String,
    default: '',
    validator: value => ['', 'error', 'info', 'success'].includes(value)
  }
})

// eslint-disable-next-line no-undef
const emit = defineEmits(['start', 'stop'])

function onStart() {
  emit('start')
}

function onStop() {
  emit('stop')
}
</script>

<style scoped>
@media (max-width: 576px) {
  .btn {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  }
}
</style>