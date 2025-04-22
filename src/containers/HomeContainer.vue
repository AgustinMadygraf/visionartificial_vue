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
import { onMounted } from 'vue'
import HomePage from '@/components/HomePage.vue'
import { useVideoState } from '@/composables/useVideoState'
import { useErrorHandling } from '@/composables/useErrorHandling'

// eslint-disable-next-line no-undef
defineOptions({ name: 'HomeContainer' })

const { 
  originalActive, 
  processedActive,
  isOriginalLoading,
  isProcessedLoading,
  startOriginal, 
  stopOriginal, 
  startProcessed, 
  stopProcessed 
} = useVideoState()

const { handleStreamError } = useErrorHandling()

/**
 * Mediador para manejar errores de stream
 * Centraliza el manejo de errores y proporciona mensajes contextuales
 * según el tipo de stream y el error específico
 */
function onStreamError(streamType, errorDetails) {
  console.log(`Mediador: Error en stream ${streamType}`, errorDetails);
  
  // Si alguno de los streams falla, podemos implementar lógica adicional aquí
  // Por ejemplo, intentar reiniciar automáticamente o mostrar opciones al usuario
  if (streamType === 'original') {
    // Podríamos implementar reintentos o lógica específica para el stream original
    console.log('Mediador: El stream original ha fallado');
  } else if (streamType === 'processed') {
    // Podríamos implementar acciones específicas para el stream procesado
    console.log('Mediador: El stream procesado ha fallado');
  }

  // Delegamos al manejador de errores genérico
  handleStreamError(streamType, errorDetails);
}

/**
 * Mediador para iniciar múltiples streams a la vez
 * Podría ser utilizado para sincronizar el inicio de distintos streams
 * 
 * Nota: Esta función está intencionalmente sin usar actualmente,
 * pero forma parte de la API de mediador para uso futuro.
 * @eslint-disable-next-line no-unused-vars
 */
// eslint-disable-next-line no-unused-vars
function startBothStreams() {
  console.log('Mediador: Iniciando ambos streams de video');
  startOriginal();
  startProcessed();
}

/**
 * Mediador para detener todos los streams activos
 * Proporciona una forma fácil de detener toda actividad de streaming
 * 
 * Nota: Esta función está intencionalmente sin usar actualmente,
 * pero forma parte de la API de mediador para uso futuro.
 * @eslint-disable-next-line no-unused-vars
 */
// eslint-disable-next-line no-unused-vars
function stopAllStreams() {
  console.log('Mediador: Deteniendo todos los streams de video');
  if (originalActive.value) {
    stopOriginal();
  }
  if (processedActive.value) {
    stopProcessed();
  }
}

// Auto-start original video stream when component mounts
onMounted(() => {
  startOriginal()
})
</script>