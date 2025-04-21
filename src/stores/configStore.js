/*
Path: src/stores/configStore.js
*/

import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
  state: () => ({
    apiBaseUrl: process.env.VUE_APP_API_URL || 'http://localhost:5000',
    // Puedes agregar más parámetros de configuración aquí
  }),
  actions: {
    setApiBaseUrl(url) {
      this.apiBaseUrl = url
    }
    // Agrega más acciones para modificar la configuración si es necesario
  }
})
