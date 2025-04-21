import { ref } from 'vue'

export function useVideoState() {
  const originalActive = ref(false)
  const processedActive = ref(false)

  function startOriginal() {
    originalActive.value = true
  }
  function stopOriginal() {
    originalActive.value = false
  }
  function startProcessed() {
    processedActive.value = true
  }
  function stopProcessed() {
    processedActive.value = false
  }

  return {
    originalActive,
    processedActive,
    startOriginal,
    stopOriginal,
    startProcessed,
    stopProcessed
  }
}
