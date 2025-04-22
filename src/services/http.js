// Configuración base para servicios HTTP
// Se puede adaptar para usar axios si se prefiere

import { useConfigStore } from '@/stores/configStore'

async function httpRequest(endpoint, { method = 'GET', headers = {}, body = null, ...customConfig } = {}) {
  const configStore = useConfigStore()
  const API_BASE_URL = configStore.apiBaseUrl
  
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

export default httpRequest;
