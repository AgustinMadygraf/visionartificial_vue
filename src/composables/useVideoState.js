import { useVideoStore } from '@/stores/videoStore'
import { storeToRefs } from 'pinia'

export function useVideoState() {
  const videoStore = useVideoStore()
  const { originalActive, processedActive } = storeToRefs(videoStore)

  function startOriginal() {
    videoStore.startOriginal()
  }
  
  function stopOriginal() {
    videoStore.stopOriginal()
  }
  
  function startProcessed() {
    videoStore.startProcessed()
  }
  
  function stopProcessed() {
    videoStore.stopProcessed()
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
