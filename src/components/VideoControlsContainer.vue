<!--
Path: src/components/VideoControlsContainer.vue
Componente: VideoControlsContainer (Container)

DESCRIPCIÓN:
Componente contenedor que maneja la lógica y el estado para controlar los streams de video,
conectándose con el store y enviando los datos al componente presentacional.

PROPS:
- isActive: Boolean - Indica si el stream está activo
- isLoading: Boolean - Indica si el stream está cargando
- streamType: String - Tipo de stream ('original' o 'processed')

EVENTOS:
- start: () => void - Emitido cuando se solicita iniciar un stream
- stop: () => void - Emitido cuando se solicita detener un stream
-->

<template>
  <VideoControlsPresentation 
    :is-active="isActive"
    :is-loading="isLoading"
    :status-message="statusMessage"
    :message-type="messageType"
    @start="onStart"
    @stop="onStop"
  />
</template>

<script setup>
import { computed } from 'vue'
import { useVideoStore } from '@/stores/videoStore'
import { storeToRefs } from 'pinia'
import VideoControlsPresentation from '@/components/presentational/VideoControls.vue'

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