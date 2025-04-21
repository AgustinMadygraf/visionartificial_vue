<template>
  <div class="video-container">
    <img :src="streamUrl" :alt="altText" class="video-stream" 
         v-if="isActive" @error="onStreamError">
    <div v-else class="video-placeholder">
      {{ placeholderText }}
    </div>
  </div>
</template>

<script setup>
/* global defineProps */
import { watch } from 'vue'
import { useVideoStream } from '@/composables/useVideoStream'

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

const {
  streamUrl,
  altText,
  startStream,
  stopStream,
  onStreamError
} = useVideoStream(props.streamType)

// Sincronizar el estado isActive del composable con la prop
watch(() => props.isActive, (newValue) => {
  if (newValue) {
    startStream()
  } else {
    stopStream()
  }
}, { immediate: true })
</script>

<style scoped>
.video-container {
  width: 100%;
}
.video-stream {
  width: 100%;
  border: 1px solid #ddd;
}
.video-placeholder {
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  min-height: 300px;
  width: 100%;
}
</style>