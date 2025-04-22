<!--
Path: src/components/presentational/VideoStream.vue
Componente: VideoStream (Presentacional)

DESCRIPCIÓN:
Componente presentacional que muestra un stream de video con diferentes estados:
activo, cargando o detenido.

PROPS:
- streamType: String - Tipo de stream ('original' o 'processed')
- isActive: Boolean - Indica si el stream está activo
- isLoading: Boolean - Indica si el stream está cargando
- streamUrl: String - URL del stream de video
- placeholderText: String - Texto a mostrar cuando el video está detenido
- altText: String - Texto alternativo para la imagen
-->

<template>
  <div class="video-container">
    <img :src="streamUrl" :alt="altText" class="video-stream rounded img-fluid" 
         v-if="isActive && !isLoading" @error="onStreamError">
    <div v-else-if="isLoading" class="video-loading">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-2">Cargando video...</p>
    </div>
    <div v-else class="video-placeholder">
      {{ placeholderText }}
    </div>
  </div>
</template>

<script setup>
// Definir nombre del componente
// eslint-disable-next-line no-undef
defineOptions({
  name: 'VideoStream'
})

// eslint-disable-next-line no-undef, no-unused-vars
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
  isLoading: {
    type: Boolean,
    default: false
  },
  streamUrl: {
    type: String,
    default: ''
  },
  placeholderText: {
    type: String,
    default: 'Video Feed Detenido'
  },
  altText: {
    type: String,
    default: 'Video stream'
  }
})

// eslint-disable-next-line no-undef
const emit = defineEmits(['stream-error'])

function onStreamError(e) {
  // Emitimos el evento con información sobre el error
  emit('stream-error', {
    message: `Error al cargar el stream: ${e.target?.src || 'URL desconocida'}`,
    timestamp: new Date().toISOString(),
    originalEvent: e
  })
}
</script>

<style scoped>
.video-container {
  width: 100%;
  overflow: hidden;
}

.video-stream {
  width: 100%;
  border: 1px solid #ddd;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  max-height: 500px;
  object-fit: contain;
}

.video-placeholder, .video-loading {
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #6c757d;
  min-height: 200px;
  width: 100%;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
}

/* Responsive adjustments */
@media (max-width: 767.98px) {
  .video-placeholder, .video-loading {
    min-height: 150px;
  }
}

@media (max-width: 575.98px) {
  .video-placeholder, .video-loading {
    min-height: 120px;
  }
}
</style>