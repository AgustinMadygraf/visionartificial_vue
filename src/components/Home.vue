<!--
Path: src/components/Home.vue
-->

<template>
  <div class="home">
    <div class="container">
      <h1 class="text-center my-4">Visión Artificial</h1>
      
      <div class="row">
        <div class="col-md-6">
          <h2>Video Original</h2>
          <VideoControls 
            :is-active="originalActive" 
            @start="startOriginal" 
            @stop="stopOriginal"
          />
          <VideoStream 
            stream-type="original" 
            :is-active="originalActive" 
            placeholder-text="Video Original Detenido"
            @stream-error="handleStreamError"
          />
        </div>
        
        <div class="col-md-6">
          <h2>Video Procesado</h2>
          <VideoControls 
            :is-active="processedActive" 
            @start="startProcessed" 
            @stop="stopProcessed"
          />
          <VideoStream 
            stream-type="processed" 
            :is-active="processedActive" 
            placeholder-text="Video Procesado Detenido"
            @stream-error="handleStreamError"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoStream from '@/components/VideoStream.vue';
import VideoControls from '@/components/VideoControls.vue';

export default {
  name: 'HomePage',
  components: {
    VideoStream,
    VideoControls
  },
  data() {
    return {
      originalActive: false,
      processedActive: false
    }
  },
  methods: {
    startOriginal() {
      this.originalActive = true;
    },
    stopOriginal() {
      this.originalActive = false;
    },
    startProcessed() {
      this.processedActive = true;
    },
    stopProcessed() {
      this.processedActive = false;
    },
    handleStreamError(streamType) {
      console.error(`Stream error on ${streamType}`);
      if (streamType === 'original') {
        this.originalActive = false;
      } else {
        this.processedActive = false;
      }
      this.$notify({
        type: 'error',
        title: 'Error de Conexión',
        text: `No se pudo conectar al stream de video ${streamType}. Verifique que el servidor esté funcionando.`
      });
    }
  }
}
</script>