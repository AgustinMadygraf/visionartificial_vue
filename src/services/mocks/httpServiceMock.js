/**
 * @fileoverview Mock del servicio HTTP para pruebas
 * 
 * Este archivo proporciona una implementación mock del servicio HTTP
 * que puede ser utilizada en pruebas para simular respuestas sin realizar
 * peticiones reales.
 */

/**
 * Crea un mock del servicio HTTP con comportamiento personalizable
 * @param {Object} mockResponses - Respuestas mock para diferentes endpoints
 * @returns {import('../interfaces/IHttpService').IHttpService} Implementación mock de IHttpService
 */
export function createHttpServiceMock(mockResponses = {}) {
  return {
    /**
     * Realiza una petición HTTP simulada
     * @param {string} endpoint - Ruta relativa al endpoint de la API
     * @param {Object} options - Opciones para la petición (no utilizado en el mock)
     * @returns {Promise<*>} Respuesta mock (según mockResponses)
     */
    request: async (endpoint) => {
      // Si el endpoint exacto tiene una respuesta definida, la devolvemos
      if (mockResponses[endpoint]) {
        return Promise.resolve(mockResponses[endpoint]);
      }
      
      // Si no hay un match exacto, buscamos un match por regex
      const matchingEndpoint = Object.keys(mockResponses).find(key => {
        try {
          const regex = new RegExp(key);
          return regex.test(endpoint);
        } catch (e) {
          return false;
        }
      });
      
      if (matchingEndpoint) {
        return Promise.resolve(mockResponses[matchingEndpoint]);
      }
      
      // Si no hay respuesta definida, devolvemos un error
      return Promise.reject({
        status: 404,
        message: `Mock not found for endpoint: ${endpoint}`
      });
    }
  };
}

/**
 * Crea un mock del servicio HTTP con comportamiento de error
 * @param {number} statusCode - Código de estado HTTP para el error
 * @param {string} message - Mensaje de error
 * @returns {import('../interfaces/IHttpService').IHttpService} Implementación mock de IHttpService que siempre falla
 */
export function createErrorHttpServiceMock(statusCode = 500, message = 'Mock server error') {
  return {
    request: async () => {
      return Promise.reject({
        status: statusCode,
        message
      });
    }
  };
}