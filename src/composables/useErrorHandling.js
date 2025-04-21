/*
Path: src/composables/useErrorHandling.js
*/

import { ref } from 'vue'

export function useErrorHandling() {
  const error = ref(null)

  function setError(err) {
    error.value = err
  }

  function clearError() {
    error.value = null
  }

  return {
    error,
    setError,
    clearError
  }
}
