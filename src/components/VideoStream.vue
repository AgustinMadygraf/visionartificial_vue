<template>
  <div class="video-container">
    <img :src="streamUrl" :alt="altText" class="video-stream" 
         v-if="isActive && !isLoading" @error="onStreamError">
    <div v-else-if="isLoading" class="video-loading">
      <div class="spinner"></div>
      <p>Cargando video...</p>
    </div>
    <div v-else class="video-placeholder">
      {{ placeholderText }}
    </div>
  </div>
</template>

<script setup>
/* global defineProps */
import { watch, computed } from 'vue'
import { useVideoStream } from '@/composables/useVideoStream'
import { useVideoStore } from '@/stores/videoStore'
import { storeToRefs } from 'pinia'

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

const videoStore = useVideoStore()
const { streamStates } = storeToRefs(videoStore)
const isLoading = computed(() => streamStates.value[props.streamType].loading)

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

.video-placeholder, .video-loading {
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #555;
  min-height: 300px;
  width: 100%;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>