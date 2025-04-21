<template>
  <div class="video-container">
    <img :src="streamUrl" :alt="altText" class="video-stream" 
         v-if="isActive" @error="onStreamError">
    <div v-else class="video-placeholder">
      {{ placeholderText }}
    </div>
  </div>
</template>

<script setup>
/* global defineProps, defineEmits */
import { computed } from 'vue'
import { useConfigStore } from '@/stores/configStore'
import { storeToRefs } from 'pinia'

const props = defineProps({
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
})

const emit = defineEmits(['stream-error'])

const configStore = useConfigStore()
const { apiBaseUrl } = storeToRefs(configStore)

const streamUrl = computed(() => {
  const endpoint = props.streamType === 'original' ? 'video/original' : 'video/process'
  return `${apiBaseUrl.value}/${endpoint}?t=${new Date().getTime()}`
})

const altText = computed(() => props.isActive ? `Video ${props.streamType}` : props.placeholderText)

function onStreamError() {
  emit('stream-error', props.streamType)
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