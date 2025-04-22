<!--
Path: src/containers/HomeContainer.vue
-->

<template>
  <HomePage
    :original-active="originalActive"
    :processed-active="processedActive"
    :is-original-loading="isOriginalLoading"
    :is-processed-loading="isProcessedLoading"
    @start-original="startOriginal"
    @stop-original="stopOriginal"
    @start-processed="startProcessed"
    @stop-processed="stopProcessed"
    @stream-error="onStreamError"
  />
</template>

<script setup>
import HomePage from '@/components/HomePage.vue'
import { useVideoMediator } from '@/composables/useVideoMediator'

// eslint-disable-next-line no-undef
defineOptions({ name: 'HomeContainer' })

// Utilizamos el mediador de video que centraliza toda la lógica
const { 
  originalActive, 
  processedActive,
  isOriginalLoading,
  isProcessedLoading,
  startOriginal, 
  stopOriginal, 
  startProcessed, 
  stopProcessed,
  onStreamError,
  setupAutoStart
} = useVideoMediator()

// Configuramos el auto-inicio del stream original cuando se monte el componente
setupAutoStart()
</script>