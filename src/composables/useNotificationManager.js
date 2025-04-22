/*
Path: src/composables/useNotificationManager.js

DESCRIPCIÓN:
Composable dedicado a la gestión centralizada de notificaciones y mensajes de error
para la aplicación. Proporciona métodos para mostrar diferentes tipos de notificaciones
y gestionar el ciclo de vida de las mismas.

MÉTODOS:
- notifySuccess(message, title): Muestra una notificación de éxito
- notifyError(error, title): Muestra una notificación de error
- notifyInfo(message, title): Muestra una notificación informativa
- notifyWarning(message, title): Muestra una notificación de advertencia
- notifyStreamEvent(streamType, event): Notifica eventos relacionados con streams de video
- clearAllNotifications(): Elimina todas las notificaciones activas
- getNotifications(): Obtiene la lista de notificaciones activas

DEPENDENCIAS:
- notificationStore: Para almacenar y gestionar el estado de las notificaciones
*/

import { computed } from 'vue'
import { useNotificationStore } from '@/stores/notificationStore'
import { storeToRefs } from 'pinia'

export function useNotificationManager() {
  const notificationStore = useNotificationStore()
  const { notifications } = storeToRefs(notificationStore)

  /**
   * Formatea un error para obtener un mensaje legible
   * @param {Error|string|Object} error - El error a formatear
   * @returns {string} - Mensaje de error formateado
   */
  function formatError(error) {
    if (!error) return 'Error desconocido'
    
    // Determinar el mensaje de error según el formato
    if (typeof error === 'string') {
      return error
    } else if (error && typeof error === 'object') {
      if (error.message) {
        // Formato de error estándar de JavaScript
        return error.message
      } else if (error.details && error.details.message) {
        // Formato detallado
        return error.details.message
      } else {
        // Fallback para otros formatos de error
        try {
          return JSON.stringify(error)
        } catch (e) {
          return 'Error no serializable'
        }
      }
    }
    
    return String(error)
  }

  /**
   * Muestra una notificación de éxito
   * @param {string} message - Mensaje a mostrar
   * @param {string} title - Título de la notificación (opcional)
   */
  function notifySuccess(message, title = 'Éxito') {
    notificationStore.notify({
      type: 'success',
      title,
      text: message
    })
  }

  /**
   * Muestra una notificación de error
   * @param {Error|string|Object} error - Error a mostrar
   * @param {string} title - Título de la notificación (opcional)
   */
  function notifyError(error, title = 'Error') {
    const errorMessage = formatError(error)
    
    notificationStore.notify({
      type: 'error',
      title,
      text: errorMessage
    })
  }

  /**
   * Muestra una notificación informativa
   * @param {string} message - Mensaje a mostrar
   * @param {string} title - Título de la notificación (opcional)
   */
  function notifyInfo(message, title = 'Información') {
    notificationStore.notify({
      type: 'info',
      title,
      text: message
    })
  }

  /**
   * Muestra una notificación de advertencia
   * @param {string} message - Mensaje a mostrar
   * @param {string} title - Título de la notificación (opcional)
   */
  function notifyWarning(message, title = 'Advertencia') {
    notificationStore.notify({
      type: 'warning',
      title,
      text: message
    })
  }

  /**
   * Notifica eventos relacionados con streams de video
   * @param {string} streamType - Tipo de stream ('original' o 'processed')
   * @param {string} event - Tipo de evento ('start', 'stop', 'error')
   * @param {Error|string|Object} [error] - Error opcional (solo para event='error')
   */
  function notifyStreamEvent(streamType, event, error) {
    const streamName = streamType === 'original' ? 'original' : 'procesado'
    
    switch (event) {
      case 'start':
        notifySuccess(`Stream de video ${streamName} iniciado correctamente`, 'Stream Iniciado')
        break
      case 'stop':
        notifyInfo(`Stream de video ${streamName} detenido`, 'Stream Detenido')
        break
      case 'error':
        notifyError(error, `Error en Stream ${streamName}`)
        break
      default:
        notifyInfo(`Evento "${event}" en stream ${streamName}`, 'Evento de Stream')
    }
  }

  /**
   * Elimina todas las notificaciones activas
   */
  function clearAllNotifications() {
    notificationStore.clearAll()
  }

  /**
   * Elimina una notificación específica por ID
   * @param {string|number} id - ID de la notificación a eliminar
   */
  function clearNotification(id) {
    notificationStore.remove(id)
  }

  /**
   * Propiedad computada que devuelve si hay notificaciones activas
   */
  const hasNotifications = computed(() => notifications.value.length > 0)

  return {
    // Métodos para mostrar notificaciones
    notifySuccess,
    notifyError,
    notifyInfo,
    notifyWarning,
    notifyStreamEvent,
    
    // Utilidades para gestionar notificaciones
    formatError,
    clearAllNotifications,
    clearNotification,
    
    // Acceso al estado
    notifications,
    hasNotifications
  }
}