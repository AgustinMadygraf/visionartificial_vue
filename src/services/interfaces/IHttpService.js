/**
 * @fileoverview Interfaz para el servicio HTTP
 * 
 * Esta interfaz define los métodos que debe implementar cualquier servicio HTTP
 * utilizado en la aplicación. Al seguir esta interfaz, podemos cambiar fácilmente
 * la implementación subyacente (fetch, axios, etc.) sin afectar a los componentes
 * que utilizan el servicio.
 */

/**
 * Interfaz para el servicio HTTP
 * @typedef {Object} IHttpService
 * @property {function} request - Método para realizar peticiones HTTP
 */

/**
 * Realiza una petición HTTP
 * @callback requestCallback
 * @param {string} endpoint - Ruta relativa al endpoint de la API
 * @param {Object} [options] - Opciones para la petición
 * @param {string} [options.method='GET'] - Método HTTP (GET, POST, PUT, DELETE, etc.)
 * @param {Object} [options.headers] - Cabeceras de la petición
 * @param {Object} [options.body] - Cuerpo de la petición (será convertido a JSON)
 * @returns {Promise<*>} Respuesta de la petición (parseada como JSON)
 */

/**
 * Crea una implementación de IHttpService
 * @returns {IHttpService} Implementación de IHttpService
 */
export default function createHttpService() {
  // Esta función será implementada en http.js
  return {
    request: () => Promise.resolve({})
  };
}