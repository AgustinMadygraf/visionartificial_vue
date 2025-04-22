/*
Path: src/stores/configStore.js
*/

import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
  state: () => ({
    // API Base Configuration
    apiBaseUrl: process.env.VUE_APP_API_BASE_URL || 'http://localhost:5000',
    
    // API Endpoints
    videoOriginalEndpoint: process.env.VUE_APP_API_VIDEO_ORIGINAL_ENDPOINT || 'video/original',
    videoProcessEndpoint: process.env.VUE_APP_API_VIDEO_PROCESS_ENDPOINT || 'video/process',
    
    // Debug Mode
    debugMode: process.env.VUE_APP_DEBUG === 'true'
  }),
  
  getters: {
    // Full URL getters for video endpoints
    videoOriginalUrl: (state) => 
      `${state.apiBaseUrl.replace(/\/$/, '')}/${state.videoOriginalEndpoint}`,
    
    videoProcessUrl: (state) => 
      `${state.apiBaseUrl.replace(/\/$/, '')}/${state.videoProcessEndpoint}`,
      
    // Helper to get URL with timestamp (for cache busting)
    getVideoUrl: (state) => (type) => {
      const baseUrl = type === 'original' ? 
        state.videoOriginalUrl : state.videoProcessUrl;
      return `${baseUrl}?t=${Date.now()}`
    }
  },
  
  actions: {
    setApiBaseUrl(url) {
      this.apiBaseUrl = url
    },
    
    setVideoEndpoint(type, endpoint) {
      if (type === 'original') {
        this.videoOriginalEndpoint = endpoint
      } else if (type === 'process') {
        this.videoProcessEndpoint = endpoint
      }
    }
  }
})
