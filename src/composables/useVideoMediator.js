/*
Path: src/composables/useVideoMediator.js

DESCRIPCIÓN:
Composable que actúa como mediador para gestionar el flujo de video,
centralizando la lógica de coordinación entre diferentes streams
y proporcionando métodos de alto nivel para operaciones comunes.

MÉTODOS:
- startStream(type): Inicia un stream específico (original o processed)
- stopStream(type): Detiene un stream específico
- startAllStreams(): Inicia todos los streams disponibles
- stopAllStreams(): Detiene todos los streams activos
- restartStream(type): Reinicia un stream específico
- onStreamError(type, error): Maneja errores de streaming con lógica específica
- autoStartOriginal(): Inicia automáticamente el stream original

DEPENDENCIAS:
- useVideoState: Para acceder y modificar el estado de los videos
- useErrorHandling: Para gestionar los errores de manera centralizada
*/

import { onMounted } from 'vue'
import { useVideoState } from '@/composables/useVideoState'
import { useErrorHandling } from '@/composables/useErrorHandling'

export function useVideoMediator() {
  const { 
    originalActive, 
    processedActive,
    isOriginalLoading,
    isProcessedLoading,
    startOriginal, 
    stopOriginal, 
    startProcessed, 
    stopProcessed 
  } = useVideoState()

  const { handleStreamError } = useErrorHandling()

  /**
   * Inicia un stream específico basado en su tipo
   * @param {string} streamType - Tipo de stream ('original' o 'processed')
   */
  function startStream(streamType) {
    if (streamType === 'original') {
      startOriginal()
    } else if (streamType === 'processed') {
      startProcessed()
    } else {
      console.error(`Tipo de stream no válido: ${streamType}`)
    }
  }

  /**
   * Detiene un stream específico basado en su tipo
   * @param {string} streamType - Tipo de stream ('original' o 'processed')
   */
  function stopStream(streamType) {
    if (streamType === 'original') {
      stopOriginal()
    } else if (streamType === 'processed') {
      stopProcessed()
    } else {
      console.error(`Tipo de stream no válido: ${streamType}`)
    }
  }

  /**
   * Inicia todos los streams disponibles
   * Útil para iniciar todas las transmisiones a la vez
   */
  function startAllStreams() {
    console.log('Mediador: Iniciando todos los streams de video')
    startOriginal()
    startProcessed()
  }

  /**
   * Detiene todos los streams activos
   * Proporciona una forma fácil de detener toda actividad de streaming
   */
  function stopAllStreams() {
    console.log('Mediador: Deteniendo todos los streams de video')
    if (originalActive.value) {
      stopOriginal()
    }
    if (processedActive.value) {
      stopProcessed()
    }
  }

  /**
   * Reinicia un stream específico
   * @param {string} streamType - Tipo de stream ('original' o 'processed')
   */
  function restartStream(streamType) {
    stopStream(streamType)
    // Pequeña pausa para asegurar que el stream se detuvo completamente
    setTimeout(() => {
      startStream(streamType)
    }, 300)
  }

  /**
   * Mediador para manejar errores de stream
   * Centraliza el manejo de errores y proporciona mensajes contextuales
   * según el tipo de stream y el error específico
   * 
   * @param {string} streamType - Tipo de stream ('original' o 'processed')
   * @param {Error|Object} errorDetails - Detalles del error
   */
  function onStreamError(streamType, errorDetails) {
    console.log(`Mediador: Error en stream ${streamType}`, errorDetails)
    
    // Si alguno de los streams falla, podemos implementar lógica adicional aquí
    if (streamType === 'original') {
      // Podríamos implementar reintentos o lógica específica para el stream original
      console.log('Mediador: El stream original ha fallado')
    } else if (streamType === 'processed') {
      // Podríamos implementar acciones específicas para el stream procesado
      console.log('Mediador: El stream procesado ha fallado')
    }

    // Delegamos al manejador de errores genérico
    handleStreamError(streamType, errorDetails)
  }

  /**
   * Función para iniciar automáticamente el stream original
   * Se puede llamar manualmente o usar con onMounted
   */
  function autoStartOriginal() {
    startOriginal()
  }

  // Hook para auto-iniciar el video original cuando se monta el componente
  function setupAutoStart() {
    onMounted(() => {
      autoStartOriginal()
    })
  }

  return {
    // Estados activos
    originalActive,
    processedActive,
    
    // Estados de carga
    isOriginalLoading,
    isProcessedLoading,
    
    // Métodos de control de stream
    startStream,
    stopStream,
    startAllStreams,
    stopAllStreams,
    restartStream,
    
    // Manejo de errores
    onStreamError,
    
    // Inicialización
    autoStartOriginal,
    setupAutoStart,
    
    // Acceso directo a métodos específicos por si son necesarios
    startOriginal,
    stopOriginal,
    startProcessed,
    stopProcessed
  }
}