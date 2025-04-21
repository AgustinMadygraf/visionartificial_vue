/*
Path: src/composables/useVideoStream.js
*/

import { ref } from 'vue'

export function useVideoStream() {
  const stream = ref(null)
  const isStreaming = ref(false)

  function startStream(newStream) {
    stream.value = newStream
    isStreaming.value = true
  }

  function stopStream() {
    stream.value = null
    isStreaming.value = false
  }

  return {
    stream,
    isStreaming,
    startStream,
    stopStream
  }
}
