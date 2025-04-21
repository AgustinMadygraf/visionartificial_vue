<!--
Path: src/components/HomePage.vue
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

<script setup>
/* global defineOptions */
import VideoStream from '@/components/VideoStream.vue'
import VideoControls from '@/components/VideoControls.vue'
import { useVideoStore } from '@/stores/videoStore';
import { storeToRefs } from 'pinia';

defineOptions({ name: 'HomePage' })

const videoStore = useVideoStore();
const { originalActive, processedActive } = storeToRefs(videoStore);

function startOriginal() {
  videoStore.startOriginal();
}
function stopOriginal() {
  videoStore.stopOriginal();
}
function startProcessed() {
  videoStore.startProcessed();
}
function stopProcessed() {
  videoStore.stopProcessed();
}
function handleStreamError(streamType) {
  console.error(`Stream error on ${streamType}`);
  videoStore.setError(streamType, `No se pudo conectar al stream de video ${streamType}. Verifique que el servidor esté funcionando.`);
}
</script>