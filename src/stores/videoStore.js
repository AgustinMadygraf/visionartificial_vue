/*
Path: src/stores/videoStore.js
*/

import { defineStore } from 'pinia'
import serviceFactory from '@/services/serviceFactory'

export const useVideoStore = defineStore('video', {
  state: () => ({
    originalActive: false,
    processedActive: false,
    streamStates: {
      original: {
        loading: false,
        error: null
      },
      processed: {
        loading: false,
        error: null
      }
    }
  }),
  
  getters: {
    originalStreamUrl: () => {
      const videoService = serviceFactory.getVideoService();
      return videoService.getVideoStreamUrl('original');
    },
    processedStreamUrl: () => {
      const videoService = serviceFactory.getVideoService();
      return videoService.getVideoStreamUrl('processed');
    },
    isOriginalLoading: state => state.streamStates.original.loading,
    isProcessedLoading: state => state.streamStates.processed.loading
  },
  
  actions: {
    startOriginal() {
      this.originalActive = true;
      this.streamStates.original.loading = true;
      this.streamStates.original.error = null;
    },
    
    stopOriginal() {
      this.originalActive = false;
      this.streamStates.original.loading = false;
    },
    
    startProcessed() {
      this.processedActive = true;
      this.streamStates.processed.loading = true;
      this.streamStates.processed.error = null;
    },
    
    stopProcessed() {
      this.processedActive = false;
      this.streamStates.processed.loading = false;
    },
    
    setError(streamType, errorMsg) {
      this.streamStates[streamType].error = errorMsg;
      this.streamStates[streamType].loading = false;
      
      if (streamType === 'original') {
        this.originalActive = false;
      } else {
        this.processedActive = false;
      }
    },
    
    clearError(streamType) {
      this.streamStates[streamType].error = null;
    },
    
    setLoadingComplete(streamType) {
      this.streamStates[streamType].loading = false;
    }
  }
})
