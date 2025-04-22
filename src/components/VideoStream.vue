<template>
  <div class="video-container">
    <img :src="streamUrl" :alt="altText" class="video-stream rounded img-fluid" 
         v-if="isActive && !isLoading" @error="onStreamError">
    <div v-else-if="isLoading" class="video-loading">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-2">Cargando video...</p>
    </div>
    <div v-else class="video-placeholder">
      {{ placeholderText }}
    </div>
  </div>
</template>

<script setup>
import { watch, computed } from 'vue'
import { useVideoStream } from '@/composables/useVideoStream'
import { useVideoStore } from '@/stores/videoStore'
import { storeToRefs } from 'pinia'

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
  overflow: hidden;
}

.video-stream {
  width: 100%;
  border: 1px solid #ddd;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  max-height: 500px;
  object-fit: contain;
}

.video-placeholder, .video-loading {
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #6c757d;
  min-height: 200px;
  width: 100%;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
}

/* Responsive adjustments */
@media (max-width: 767.98px) {
  .video-placeholder, .video-loading {
    min-height: 150px;
  }
}

@media (max-width: 575.98px) {
  .video-placeholder, .video-loading {
    min-height: 120px;
  }
}
</style>