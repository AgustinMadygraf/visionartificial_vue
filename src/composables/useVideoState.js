import { useVideoStore } from '@/stores/videoStore'
import { storeToRefs } from 'pinia'

export function useVideoState() {
  const videoStore = useVideoStore()
  const { 
    originalActive, 
    processedActive 
  } = storeToRefs(videoStore)
  const { 
    isOriginalLoading, 
    isProcessedLoading 
  } = videoStore

  async function startOriginal() {
    try {
      videoStore.startOriginal()
      // We'll mark loading as complete after a short delay to ensure stream has started
      await new Promise(resolve => setTimeout(resolve, 500))
      videoStore.setLoadingComplete('original')
    } catch (error) {
      videoStore.setError('original', error)
    }
  }
  
  function stopOriginal() {
    videoStore.stopOriginal()
  }
  
  async function startProcessed() {
    try {
      videoStore.startProcessed()
      await new Promise(resolve => setTimeout(resolve, 500))
      videoStore.setLoadingComplete('processed')
    } catch (error) {
      videoStore.setError('processed', error)
    }
  }
  
  function stopProcessed() {
    videoStore.stopProcessed()
  }

  return {
    originalActive,
    processedActive,
    isOriginalLoading,
    isProcessedLoading,
    startOriginal,
    stopOriginal,
    startProcessed,
    stopProcessed
  }
}
