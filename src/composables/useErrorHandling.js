/*
Path: src/composables/useErrorHandling.js
*/

import { useNotificationStore } from '@/stores/notificationStore'
import { useVideoStore } from '@/stores/videoStore'

export function useErrorHandling() {
  const notificationStore = useNotificationStore()
  const videoStore = useVideoStore()

  function handleError(error, title = 'Error') {
    notificationStore.notify({
      type: 'error',
      title: title,
      text: error.message || error
    })
  }

  function handleStreamError(streamType, error) {
    // Stop the stream in the store when an error occurs
    if (streamType === 'original') {
      videoStore.stopOriginal()
    } else {
      videoStore.stopProcessed()
    }
    
    handleError(error, `Error en stream ${streamType}`)
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
