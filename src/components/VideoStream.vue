<template>
  <VideoDisplay 
    :stream-type="streamType"
    :is-active="isActive"
    :is-loading="isLoading"
    :stream-url="streamUrl"
    :placeholder-text="placeholderText"
    :alt-text="altText"
    @stream-error="onStreamError"
  />
</template>

<script setup>
import { watch, computed } from 'vue'
import { useVideoStream } from '@/composables/useVideoStream'
import { useVideoStore } from '@/stores/videoStore'
import { storeToRefs } from 'pinia'
import VideoDisplay from '@/components/presentational/VideoDisplay.vue'

// eslint-disable-next-line no-undef
const props = defineProps({
  streamType: {
    type: String,
    required: true,
    validator: value => ['original', 'processed'].includes(value)
  },
  isActive: {
    type: Boolean,
    default: false
  },
  placeholderText: {
    type: String,
    default: 'Video Feed Detenido'
  }
})

// eslint-disable-next-line no-undef
const emit = defineEmits(['stream-error'])

const videoStore = useVideoStore()
const { streamStates } = storeToRefs(videoStore)
const isLoading = computed(() => streamStates.value[props.streamType].loading)

const {
  streamUrl,
  altText,
  startStream,
  stopStream,
  onStreamError: handleStreamError
} = useVideoStream(props.streamType)

function onStreamError(errorDetails) {
  // Utilizamos la información detallada del error para el manejo interno
  handleStreamError({
    type: props.streamType,
    details: errorDetails
  })
  
  // Propagamos el error hacia arriba con el tipo de stream
  emit('stream-error', props.streamType, errorDetails)
}

// Sincronizar el estado isActive del composable con la prop
watch(() => props.isActive, (newValue) => {
  if (newValue) {
    startStream()
  } else {
    stopStream()
  }
}, { immediate: true })
</script>