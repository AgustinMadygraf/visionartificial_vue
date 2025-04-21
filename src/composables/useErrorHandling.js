/*
Path: src/composables/useErrorHandling.js
*/

import { useNotificationStore } from '@/stores/notificationStore'

export function useErrorHandling() {
  const notificationStore = useNotificationStore()

  function handleError(error, title = 'Error') {
    notificationStore.notify({
      type: 'error',
      title: title,
      text: error.message || error
    })
  }

  function handleStreamError(streamType, error) {
    handleError(error, `Error en stream ${streamType}`)
  }

  function clearErrors() {
    notificationStore.clearAll()
  }

  return {
    handleError,
    handleStreamError,
    clearErrors
  }
}
