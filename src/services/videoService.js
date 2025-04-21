// Servicio para gestión de streams de video
import { API_BASE_URL } from './http'

function getVideoStreamUrl(type = 'original') {
  const endpoint = type === 'original' ? 'video/original' : 'video/process'
  // Se agrega un parámetro de tiempo para evitar caché
  return `${API_BASE_URL.replace(/\/$/, '')}/${endpoint}?t=${Date.now()}`
}

export default {
  getVideoStreamUrl
}
