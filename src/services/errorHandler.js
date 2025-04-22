// Manejador centralizado de errores para servicios refactorizado para soportar inyección de dependencias

/**
 * Implementación del manejador de errores
 * @param {Object} [notificationStore] - Store de notificaciones (opcional)
 * @returns {import('./interfaces/IErrorHandler').IErrorHandler} Implementación de IErrorHandler
 */
function createErrorHandlerImpl(notificationStore) {
  /**
   * Maneja un error de forma centralizada
   * @param {Error|Object} error - Error a manejar
   * @param {Object} [context={}] - Contexto adicional sobre el error
   */
  function handleError(error, context = {}) {
    // Registramos el error en la consola
    console.error('Service Error:', error, context);
    
    // Si se proporcionó un notificationStore, lo utilizamos para mostrar una notificación
    if (notificationStore) {
      notificationStore.addNotification({
        type: 'error',
        title: 'Error',
        message: error.message || 'Ha ocurrido un error en la aplicación',
        timeout: 5000
      });
    }
    
    // Se podría extender para enviar errores a un servicio de monitoreo externo
  }

  return {
    handleError
  };
}

// Exportamos la función de creación para que sea utilizada por el factory
export default createErrorHandlerImpl;
