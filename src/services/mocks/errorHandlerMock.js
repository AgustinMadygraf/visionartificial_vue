/**
 * @fileoverview Mock del manejador de errores para pruebas
 * 
 * Este archivo proporciona una implementación mock del manejador de errores
 * que puede ser utilizada en pruebas para simular el comportamiento de manejo
 * de errores sin mostrar alertas reales o afectar el sistema.
 */

/**
 * Crea un mock del manejador de errores
 * @param {Object} options - Opciones de configuración
 * @param {Function} options.onHandleError - Función callback que se ejecuta cuando se maneja un error
 * @returns {import('../interfaces/IErrorHandler').IErrorHandler} Implementación mock de IErrorHandler
 */
export function createErrorHandlerMock({ 
  onHandleError = (error, context) => console.log('Mock error handler:', error, context) 
} = {}) {
  // Almacenar los errores para referencia en pruebas
  const handledErrors = [];
  
  return {
    /**
     * Maneja un error de forma simulada
     * @param {Error|Object} error - Error a manejar
     * @param {Object} context - Contexto adicional sobre el error
     */
    handleError: (error, context = {}) => {
      // Guardar el error para referencias futuras
      handledErrors.push({ error, context, timestamp: new Date() });
      
      // Ejecutar el callback si se proporciona
      onHandleError(error, context);
    },
    
    /**
     * Método adicional solo para pruebas:
     * Obtiene los errores que han sido manejados
     * @returns {Array} Lista de errores manejados
     */
    getHandledErrors: () => [...handledErrors],
    
    /**
     * Método adicional solo para pruebas:
     * Reinicia la lista de errores manejados
     */
    clearHandledErrors: () => {
      handledErrors.length = 0;
    }
  };
}