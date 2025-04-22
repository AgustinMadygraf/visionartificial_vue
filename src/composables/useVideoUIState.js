/*
Path: src/composables/useVideoUIState.js

DESCRIPCIÓN:
Composable dedicado a gestionar el estado de la interfaz de usuario relacionado
con los streams de video. Proporciona estados reactivos y propiedades computadas
para facilitar la presentación y manipulación de la UI relacionada con video.

MÉTODOS:
- getStreamStatus(type): Obtiene el estado actual de un stream específico
- getStatusMessage(type): Obtiene un mensaje descriptivo según el estado del stream
- getStatusType(type): Obtiene el tipo de estado para estilos de UI (error, info, success)
- isStreamReady(type): Verifica si un stream está listo para mostrarse
- isAnyStreamActive(): Verifica si hay algún stream activo

DEPENDENCIAS:
- useVideoStore: Para acceder al estado de los streams
*/

import { computed } from 'vue'
import { useVideoStore } from '@/stores/videoStore'
import { storeToRefs } from 'pinia'

export function useVideoUIState() {
  const videoStore = useVideoStore()
  const { 
    originalActive, 
    processedActive,
    streamStates 
  } = storeToRefs(videoStore)

  /**
   * Verifica si algún stream está activo
   * @returns {ComputedRef<boolean>} - true si hay algún stream activo
   */
  const isAnyStreamActive = computed(() => {
    return originalActive.value || processedActive.value
  })

  /**
   * Verifica si todos los streams están inactivos
   * @returns {ComputedRef<boolean>} - true si todos los streams están inactivos
   */
  const areAllStreamsInactive = computed(() => {
    return !originalActive.value && !processedActive.value
  })

  /**
   * Obtiene el estado de carga de un stream específico
   * @param {string} streamType - Tipo de stream ('original' o 'processed')
   * @returns {boolean} - true si el stream está cargando
   */
  function isLoading(streamType) {
    if (!streamStates.value) return false
    const state = streamStates.value[streamType]
    return state ? state.loading : false
  }

  /**
   * Obtiene el estado de error de un stream específico
   * @param {string} streamType - Tipo de stream ('original' o 'processed')
   * @returns {string|null} - Mensaje de error o null si no hay error
   */
  function getError(streamType) {
    if (!streamStates.value) return null
    const state = streamStates.value[streamType]
    return state ? state.error : null
  }

  /**
   * Obtiene un objeto con el estado completo de un stream
   * @param {string} streamType - Tipo de stream ('original' o 'processed')
   * @returns {Object} - Objeto con el estado del stream
   */
  function getStreamStatus(streamType) {
    const isActive = streamType === 'original' ? originalActive.value : processedActive.value
    const loading = isLoading(streamType)
    const error = getError(streamType)

    return {
      isActive,
      loading,
      error,
      hasError: !!error
    }
  }

  /**
   * Obtiene un mensaje descriptivo según el estado actual del stream
   * @param {string} streamType - Tipo de stream ('original' o 'processed')
   * @returns {string} - Mensaje descriptivo del estado
   */
  function getStatusMessage(streamType) {
    if (!streamStates.value) return ''
    const state = streamStates.value[streamType]
    if (!state) return ''

    if (state.error) return `Error: ${state.error}`
    if (state.loading) return 'Iniciando transmisión...'
    
    const isActive = streamType === 'original' 
      ? originalActive.value 
      : processedActive.value
    
    if (isActive) return 'Transmisión en curso'
    return 'Transmisión detenida'
  }

  /**
   * Obtiene el tipo de estado para uso en componentes UI (class, styling)
   * @param {string} streamType - Tipo de stream ('original' o 'processed')
   * @returns {string} - Tipo de estado ('error', 'info', 'success' o '')
   */
  function getStatusType(streamType) {
    if (!streamStates.value) return ''
    const state = streamStates.value[streamType]
    if (!state) return ''

    if (state.error) return 'error'
    if (state.loading) return 'info'
    
    const isActive = streamType === 'original' 
      ? originalActive.value 
      : processedActive.value
    
    if (isActive) return 'success'
    return ''
  }

  /**
   * Verifica si un stream está listo para mostrarse (activo y no cargando)
   * @param {string} streamType - Tipo de stream ('original' o 'processed')
   * @returns {boolean} - true si el stream está listo
   */
  function isStreamReady(streamType) {
    const isActive = streamType === 'original' 
      ? originalActive.value 
      : processedActive.value
    
    return isActive && !isLoading(streamType)
  }

  return {
    // Estados generales
    isAnyStreamActive,
    areAllStreamsInactive,
    
    // Funciones para obtener estados específicos
    isLoading,
    getError,
    getStreamStatus,
    getStatusMessage,
    getStatusType,
    isStreamReady,
    
    // Acceso directo a estados reactivos
    originalActive,
    processedActive,
    streamStates
  }
}