/*
Path: src/composables/useErrorHandling.js
*/

import { useNotificationStore } from '@/stores/notificationStore'
import { useVideoStore } from '@/stores/videoStore'

export function useErrorHandling() {
  const notificationStore = useNotificationStore()
  const videoStore = useVideoStore()

  function handleError(error, title = 'Error') {
    let errorMessage;
    
    // Determinar el mensaje de error según el formato
    if (error && typeof error === 'object') {
      if (error.message) {
        // Formato de error estándar de JavaScript
        errorMessage = error.message;
      } else if (error.details && error.details.message) {
        // Nuevo formato detallado que creamos en VideoDisplay
        errorMessage = error.details.message;
      } else {
        // Fallback para otros formatos de error
        errorMessage = JSON.stringify(error);
      }
    } else {
      // Si error es un string u otro tipo primitivo
      errorMessage = String(error);
    }
    
    notificationStore.notify({
      type: 'error',
      title: title,
      text: errorMessage
    })
  }

  function handleStreamError(streamType, error) {
    // Si recibimos un objeto con propiedad 'type', usamos ese valor
    const actualStreamType = error && error.type ? error.type : streamType;
    
    // Stop the stream in the store when an error occurs
    if (actualStreamType === 'original') {
      videoStore.stopOriginal()
    } else {
      videoStore.stopProcessed()
    }
    
    handleError(error, `Error en stream ${actualStreamType}`)
  }

  function handleAutoStartError(error) {
    handleError(error, 'Error en auto-inicio del video')
    videoStore.stopOriginal() // Ensure video state is reset on auto-start error
  }

  function clearErrors() {
    notificationStore.clearAll()
  }

  return {
    handleError,
    handleStreamError,
    handleAutoStartError,
    clearErrors
  }
}
