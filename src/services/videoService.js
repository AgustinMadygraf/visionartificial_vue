// Servicio para gestión de streams de video
import { useConfigStore } from '@/stores/configStore'

function getVideoStreamUrl(type = 'original') {
  const configStore = useConfigStore()
  // Utilizamos el getter que ya incluye la lógica de cache busting
  return configStore.getVideoUrl(type)
}

export default {
  getVideoStreamUrl
}
