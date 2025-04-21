<!--
Path: src/components/HomePage.vue
-->

<template>
  <div class="home">
    <div class="container">
      <h1 class="text-center my-4">Visión Artificial</h1>
      <div class="row">
        <div class="col-md-6">
          <h2>Video Original</h2>
          <VideoControls 
            :is-active="originalActive" 
            @start="startOriginal" 
            @stop="stopOriginal"
          />
          <VideoStream 
            stream-type="original" 
            :is-active="originalActive" 
            placeholder-text="Video Original Detenido"
            @stream-error="handleStreamError"
          />
        </div>
        <div class="col-md-6">
          <h2>Video Procesado</h2>
          <VideoControls 
            :is-active="processedActive" 
            @start="startProcessed" 
            @stop="stopProcessed"
          />
          <VideoStream 
            stream-type="processed" 
            :is-active="processedActive" 
            placeholder-text="Video Procesado Detenido"
            @stream-error="handleStreamError"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* global defineOptions */
import VideoStream from '@/components/VideoStream.vue'
import VideoControls from '@/components/VideoControls.vue'
import { useVideoState } from '@/composables/useVideoState'
import { useErrorHandling } from '@/composables/useErrorHandling'

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
</script>