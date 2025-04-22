/**
 * @fileoverview Factory centralizado para la creación de servicios
 * 
 * Este módulo implementa el patrón Factory para la creación de servicios,
 * gestionando sus dependencias de forma centralizada y permitiendo la inyección
 * de dependencias entre ellos.
 */

import { useConfigStore } from '@/stores/configStore';
import { useNotificationStore } from '@/stores/notificationStore';

// Importamos las implementaciones de los servicios
import createHttpServiceImpl from './http';
import createVideoServiceImpl from './videoService';
import createErrorHandlerImpl from './errorHandler';

// Servicios singleton
let httpService = null;
let videoService = null;
let errorHandler = null;

/**
 * Factory para la creación de servicios
 */
const serviceFactory = {
  /**
   * Obtiene o crea una instancia del servicio HTTP
   * @returns {import('./interfaces/IHttpService').IHttpService} Servicio HTTP
   */
  getHttpService() {
    if (!httpService) {
      const configStore = useConfigStore();
      httpService = createHttpServiceImpl({ configStore });
    }
    return httpService;
  },

  /**
   * Obtiene o crea una instancia del servicio de video
   * @returns {import('./interfaces/IVideoService').IVideoService} Servicio de video
   */
  getVideoService() {
    if (!videoService) {
      const configStore = useConfigStore();
      const http = this.getHttpService();
      videoService = createVideoServiceImpl({ 
        configStore, 
        httpService: http 
      });
    }
    return videoService;
  },

  /**
   * Obtiene o crea una instancia del manejador de errores
   * @returns {import('./interfaces/IErrorHandler').IErrorHandler} Manejador de errores
   */
  getErrorHandler() {
    if (!errorHandler) {
      const notificationStore = useNotificationStore();
      errorHandler = createErrorHandlerImpl(notificationStore);
    }
    return errorHandler;
  },

  /**
   * Reinicia todos los servicios (útil para pruebas)
   */
  resetServices() {
    httpService = null;
    videoService = null;
    errorHandler = null;
  },

  /**
   * Crea mocks de servicios para pruebas
   * @param {Object} mocks - Mocks de servicios
   */
  setMocks(mocks = {}) {
    if (mocks.httpService) httpService = mocks.httpService;
    if (mocks.videoService) videoService = mocks.videoService;
    if (mocks.errorHandler) errorHandler = mocks.errorHandler;
  }
};

export default serviceFactory;