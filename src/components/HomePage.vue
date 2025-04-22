<!--
Path: src/components/HomePage.vue
-->

<template>
  <div class="home">
    <h1 class="text-center my-4">Visión Artificial</h1>
    <div class="row g-4">
      <div class="col-lg-6 col-md-12">
        <div class="card shadow-sm">
          <div class="card-header bg-light">
            <h2 class="h4 mb-0">Video Original</h2>
          </div>
          <div class="card-body">
            <VideoControls 
              :is-active="originalActive" 
              @start="startOriginal" 
              @stop="stopOriginal"
              stream-type="original"
              class="mb-3"
            />
            <VideoStream 
              stream-type="original" 
              :is-active="originalActive" 
              placeholder-text="Video Original Detenido"
              @stream-error="handleStreamError"
              class="img-fluid w-100"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12">
        <div class="card shadow-sm">
          <div class="card-header bg-light">
            <h2 class="h4 mb-0">Video Procesado</h2>
          </div>
          <div class="card-body">
            <VideoControls 
              :is-active="processedActive" 
              @start="startProcessed" 
              @stop="stopProcessed"
              stream-type="processed"
              class="mb-3"
            />
            <VideoStream 
              stream-type="processed" 
              :is-active="processedActive" 
              placeholder-text="Video Procesado Detenido"
              @stream-error="handleStreamError"
              class="img-fluid w-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import VideoStream from '@/components/VideoStream.vue'
import VideoControls from '@/components/VideoControls.vue'
import { useVideoState } from '@/composables/useVideoState'
import { useErrorHandling } from '@/composables/useErrorHandling'

// eslint-disable-next-line no-undef
defineOptions({ name: 'HomePage' })

const { 
  originalActive, 
  processedActive, 
  startOriginal, 
  stopOriginal, 
  startProcessed, 
  stopProcessed 
} = useVideoState()

const { handleStreamError } = useErrorHandling()

// Auto-start original video stream when component mounts
onMounted(() => {
  startOriginal()
})
</script>

<style scoped>
/* Adding some responsive adjustments */
@media (max-width: 767.98px) {
  h1 {
    font-size: 1.75rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
}
</style>