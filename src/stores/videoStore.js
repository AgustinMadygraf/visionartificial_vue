/*
Path: src/stores/videoStore.js
*/

import { defineStore } from 'pinia'

export const useVideoStore = defineStore('video', {
  state: () => ({
    originalActive: false,
    processedActive: false,
    error: null
  }),
  actions: {
    startOriginal() {
      this.originalActive = true
    },
    stopOriginal() {
      this.originalActive = false
    },
    startProcessed() {
      this.processedActive = true
    },
    stopProcessed() {
      this.processedActive = false
    },
    setError(streamType, errorMsg) {
      this.error = { streamType, errorMsg }
      if (streamType === 'original') {
        this.originalActive = false
      } else {
        this.processedActive = false
      }
    },
    clearError() {
      this.error = null
    }
  }
})
