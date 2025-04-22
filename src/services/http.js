// Servicio HTTP refactorizado para soportar inyección de dependencias

/**
 * Implementación del servicio HTTP utilizando fetch
 * @param {Object} dependencies - Dependencias del servicio
 * @param {Object} dependencies.configStore - Store de configuración
 * @returns {import('./interfaces/IHttpService').IHttpService} Implementación de IHttpService
 */
function createHttpServiceImpl({ configStore }) {
  /**
   * Realiza una petición HTTP
   * @param {string} endpoint - Ruta relativa al endpoint de la API
   * @param {Object} options - Opciones para la petición
   * @returns {Promise<*>} Respuesta de la petición (parseada como JSON)
   */
  async function request(endpoint, { method = 'GET', headers = {}, body = null, ...customConfig } = {}) {
    const API_BASE_URL = configStore.apiBaseUrl;
    
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      ...customConfig,
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    if (!response.ok) {
      // Manejo de errores común
      const errorData = await response.json().catch(() => ({}));
      throw { status: response.status, ...errorData };
    }
    // Si la respuesta es vacía, retorna null
    if (response.status === 204) return null;
    return await response.json();
  }

  return {
    request
  };
}

// Exportamos la función de creación para que sea utilizada por el factory
export default createHttpServiceImpl;
