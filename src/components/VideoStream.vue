<template>
    <div class="video-container">
      <img :src="streamUrl" :alt="altText" class="video-stream" 
           v-if="isActive" @error="handleStreamError">
      <div v-else class="video-placeholder">
        {{ placeholderText }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VideoStream',
    props: {
      streamType: {
        type: String,
        required: true,
        validator: value => ['original', 'processed'].includes(value)
      },
      isActive: {
        type: Boolean,
        default: false
      },
      placeholderText: {
        type: String,
        default: 'Video Feed Detenido'
      }
    },
    computed: {
      streamUrl() {
        const endpoint = this.streamType === 'original' ? 'video_original' : 'video_process';
        return `${this.apiBaseUrl}/${endpoint}?t=${new Date().getTime()}`;
      },
      altText() {
        return this.isActive ? `Video ${this.streamType}` : this.placeholderText;
      },
      apiBaseUrl() {
        return process.env.VUE_APP_API_URL || 'http://localhost:5000';
      }
    },
    methods: {
      handleStreamError(e) {
        console.error('Error loading stream:', e);
        this.$emit('stream-error', this.streamType);
      }
    }
  }
  </script>
  
  <style scoped>
  .video-container {
    width: 100%;
  }
  .video-stream {
    width: 100%;
    border: 1px solid #ddd;
  }
  .video-placeholder {
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555;
    min-height: 300px;
    width: 100%;
  }
  </style>