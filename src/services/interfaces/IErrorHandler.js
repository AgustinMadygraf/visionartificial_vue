/**
 * @fileoverview Interfaz para el manejador de errores
 * 
 * Esta interfaz define los métodos que debe implementar cualquier servicio
 * de manejo de errores en la aplicación. Proporciona una forma estandarizada
 * de gestionar errores a través de toda la aplicación.
 */

/**
 * Interfaz para el manejador de errores
 * @typedef {Object} IErrorHandler
 * @property {function} handleError - Método para manejar errores
 */

/**
 * Maneja un error
 * @callback handleErrorCallback
 * @param {Error|Object} error - Error a manejar
 * @param {Object} [context={}] - Contexto adicional sobre el error
 * @returns {void}
 */

/**
 * Crea una implementación de IErrorHandler
 * @returns {IErrorHandler} Implementación de IErrorHandler
 */
export default function createErrorHandler() {
  // Esta función será implementada en errorHandler.js
  return {
    handleError: () => {}
  };
}