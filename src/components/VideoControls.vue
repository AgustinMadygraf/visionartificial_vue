<template>
  <div class="video-controls">
    <div class="controls">
      <button 
        class="btn btn-success" 
        @click="onStart" 
        :disabled="props.isActive || props.isLoading"
      >
        {{ props.isLoading ? 'Iniciando...' : 'Iniciar' }}
      </button>
      <button 
        class="btn btn-danger" 
        @click="onStop" 
        :disabled="!props.isActive || props.isLoading"
      >
        Detener
      </button>
    </div>
    <div class="status-message" :class="messageType" v-if="statusMessage">
      {{ statusMessage }}
    </div>
  </div>
</template>

<script setup>
/* global defineProps, defineEmits */
import { computed } from 'vue'
import { useVideoStore } from '@/stores/videoStore'
import { storeToRefs } from 'pinia'

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
.video-controls {
  margin-bottom: 10px;
}

.controls {
  margin-bottom: 8px;
}

.btn {
  margin-right: 5px;
}

.status-message {
  font-size: 0.9em;
  padding: 4px 8px;
  border-radius: 4px;
  margin-top: 5px;
}

.status-message.error {
  background-color: #fee;
  color: #c33;
  border: 1px solid #fcc;
}

.status-message.info {
  background-color: #eef;
  color: #33c;
  border: 1px solid #ccf;
}

.status-message.success {
  background-color: #efe;
  color: #3c3;
  border: 1px solid #cfc;
}
</style>