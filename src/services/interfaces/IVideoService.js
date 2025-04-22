/**
 * @fileoverview Interfaz para el servicio de video
 * 
 * Esta interfaz define los métodos que debe implementar cualquier servicio
 * de video utilizado en la aplicación. Permite gestionar los streams de video
 * y obtener sus URLs de manera estandarizada.
 */

/**
 * Interfaz para el servicio de video
 * @typedef {Object} IVideoService
 * @property {function} getVideoStreamUrl - Método para obtener la URL de un stream de video
 */

/**
 * Obtiene la URL de un stream de video
 * @callback getVideoStreamUrlCallback
 * @param {string} [type='original'] - Tipo de stream de video ('original' o 'processed')
 * @returns {string} URL del stream de video
 */

/**
 * Crea una implementación de IVideoService
 * @returns {IVideoService} Implementación de IVideoService
 */
export default function createVideoService() {
  // Esta función será implementada en videoService.js
  return {
    getVideoStreamUrl: () => ""
  };
}