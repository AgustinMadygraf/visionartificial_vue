<!--
Path: src/components/HomePage.vue
Componente: HomePage (Presentacional)

DESCRIPCIÓN:
Componente presentacional que muestra la interfaz principal de la aplicación con
los streams de video original y procesado.

PROPS:
- originalActive: Boolean - Indica si el stream original está activo
- processedActive: Boolean - Indica si el stream procesado está activo
- isOriginalLoading: Boolean - Indica si el stream original está cargando
- isProcessedLoading: Boolean - Indica si el stream procesado está cargando

EVENTOS:
- start-original: () => void - Emitido cuando se solicita iniciar el video original
- stop-original: () => void - Emitido cuando se solicita detener el video original
- start-processed: () => void - Emitido cuando se solicita iniciar el video procesado
- stop-processed: () => void - Emitido cuando se solicita detener el video procesado
- stream-error: (streamType: string, error: Error) => void - Emitido cuando ocurre un error en algún stream
-->

<template>
  <div class="home">
    <h1 class="text-center my-4">Visión Artificial</h1>
    <div class="row g-4">
      <div class="col-lg-6 col-md-12">
        <div class="card shadow-sm">
          <div class="card-header bg-light">
            <h2 class="h4 mb-0">Video Original</h2>
          </div>
          <div class="card-body">
            <VideoControls 
              :is-active="originalActive" 
              :is-loading="isOriginalLoading"
              @start="$emit('start-original')" 
              @stop="$emit('stop-original')"
              stream-type="original"
              class="mb-3"
            />
            <VideoStream 
              stream-type="original" 
              :is-active="originalActive" 
              placeholder-text="Video Original Detenido"
              @stream-error="(streamType, error) => $emit('stream-error', streamType, error)"
              class="img-fluid w-100"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12">
        <div class="card shadow-sm">
          <div class="card-header bg-light">
            <h2 class="h4 mb-0">Video Procesado</h2>
          </div>
          <div class="card-body">
            <VideoControls 
              :is-active="processedActive"
              :is-loading="isProcessedLoading" 
              @start="$emit('start-processed')" 
              @stop="$emit('stop-processed')"
              stream-type="processed"
              class="mb-3"
            />
            <VideoStream 
              stream-type="processed" 
              :is-active="processedActive" 
              placeholder-text="Video Procesado Detenido"
              @stream-error="(streamType, error) => $emit('stream-error', streamType, error)"
              class="img-fluid w-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VideoStream from '@/components/VideoStream.vue'
import VideoControls from '@/components/VideoControls.vue'

// eslint-disable-next-line no-undef
defineOptions({ name: 'HomePage' })

// eslint-disable-next-line no-undef
defineProps({
  originalActive: Boolean,
  processedActive: Boolean,
  isOriginalLoading: Boolean,
  isProcessedLoading: Boolean
})

// eslint-disable-next-line no-undef
defineEmits([
  'start-original', 
  'stop-original', 
  'start-processed', 
  'stop-processed', 
  'stream-error'
])
</script>

<style scoped>
/* Adding some responsive adjustments */
@media (max-width: 767.98px) {
  h1 {
    font-size: 1.75rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
}
</style>