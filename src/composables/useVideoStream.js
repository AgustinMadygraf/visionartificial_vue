/*
Path: src/composables/useVideoStream.js
*/

import { ref, computed } from 'vue'
import { useConfigStore } from '@/stores/configStore'
import { storeToRefs } from 'pinia'
import { useErrorHandling } from './useErrorHandling'

export function useVideoStream(streamType) {
  const { handleStreamError } = useErrorHandling()
  const configStore = useConfigStore()
  const { apiBaseUrl } = storeToRefs(configStore)
  
  const isActive = ref(false)
  const error = ref(null)

  const streamUrl = computed(() => {
    if (!isActive.value) return null
    const endpoint = streamType === 'original' ? 'video/original' : 'video/process'
    return `${apiBaseUrl.value}/${endpoint}?t=${new Date().getTime()}`
  })

  const altText = computed(() => 
    isActive.value ? `Video ${streamType}` : 'Video Feed Detenido'
  )

  function startStream() {
    isActive.value = true
    error.value = null
  }

  function stopStream() {
    isActive.value = false
  }

  function onStreamError(e) {
    error.value = e
    handleStreamError(streamType, e)
  }

  return {
    isActive,
    error,
    streamUrl,
    altText,
    startStream,
    stopStream,
    onStreamError
  }
}
