<template>
  <div class="video-controls">
    <div class="btn-group d-flex flex-wrap mb-2" role="group" aria-label="Video controls">
      <button 
        class="btn btn-success me-2 mb-2" 
        @click="onStart" 
        :disabled="props.isActive || props.isLoading"
      >
        <span v-if="props.isLoading">
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
        :disabled="!props.isActive || props.isLoading"
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
import { computed } from 'vue'
import { useVideoStore } from '@/stores/videoStore'
import { storeToRefs } from 'pinia'

// eslint-disable-next-line no-undef
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  streamType: {
    type: String,
    required: true,
    validator: value => ['original', 'processed'].includes(value)
  }
})

// eslint-disable-next-line no-undef
const emit = defineEmits(['start', 'stop'])

const videoStore = useVideoStore()
const { streamStates } = storeToRefs(videoStore)

const messageType = computed(() => {
  if (!streamStates.value) return ''
  const state = streamStates.value[props.streamType]
  if (!state) return ''
  if (state.error) return 'error'
  if (state.loading) return 'info'
  if (props.isActive) return 'success'
  return ''
})

const statusMessage = computed(() => {
  if (!streamStates.value) return ''
  const state = streamStates.value[props.streamType]
  if (!state) return ''
  if (state.error) return `Error: ${state.error}`
  if (state.loading) return 'Iniciando transmisión...'
  if (props.isActive) return 'Transmisión en curso'
  return ''
})

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