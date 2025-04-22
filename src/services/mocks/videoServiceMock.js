/**
 * @fileoverview Mock del servicio de video para pruebas
 * 
 * Este archivo proporciona una implementación mock del servicio de video
 * que puede ser utilizada en pruebas para simular URLs de streams sin
 * depender de la configuración real.
 */

/**
 * Crea un mock del servicio de video
 * @param {Object} options - Opciones de configuración
 * @param {string} options.originalUrl - URL mock para el stream original
 * @param {string} options.processedUrl - URL mock para el stream procesado
 * @returns {import('../interfaces/IVideoService').IVideoService} Implementación mock de IVideoService
 */
export function createVideoServiceMock({
  originalUrl = 'http://localhost:8000/mocks/original-video.mp4',
  processedUrl = 'http://localhost:8000/mocks/processed-video.mp4'
} = {}) {
  const streamUrls = {
    original: originalUrl,
    processed: processedUrl
  };
  
  return {
    /**
     * Obtiene la URL mock de un stream de video
     * @param {string} type - Tipo de stream ('original' o 'processed')
     * @returns {string} URL mock del stream de video
     */
    getVideoStreamUrl: (type = 'original') => {
      return streamUrls[type] || streamUrls.original;
    }
  };
}