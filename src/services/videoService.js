// Servicio para gestión de streams de video refactorizado para soportar inyección de dependencias

/**
 * Implementación del servicio de video
 * @param {Object} dependencies - Dependencias del servicio
 * @param {Object} dependencies.configStore - Store de configuración
 * @returns {import('./interfaces/IVideoService').IVideoService} Implementación de IVideoService
 */
function createVideoServiceImpl({ configStore /*, httpService */ }) {
  /**
   * Obtiene la URL de un stream de video
   * @param {string} [type='original'] - Tipo de stream ('original' o 'processed')
   * @returns {string} URL del stream de video
   */
  function getVideoStreamUrl(type = 'original') {
    // Utilizamos el store de configuración para obtener la URL del video
    return configStore.getVideoUrl(type);
  }

  // Se podría agregar métodos adicionales que utilicen httpService
  // Por ejemplo, para obtener información sobre los streams disponibles
  // o para cambiar configuraciones del procesamiento de video

  return {
    getVideoStreamUrl
  };
}

// Exportamos la función de creación para que sea utilizada por el factory
export default createVideoServiceImpl;
