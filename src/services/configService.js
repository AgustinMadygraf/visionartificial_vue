// Servicio para gestión de configuración global
const config = {
  apiBaseUrl: process.env.VUE_APP_API_URL || 'http://localhost:5000',
  // Agrega aquí otras configuraciones globales si es necesario
}

function get(key) {
  return config[key]
}

function set(key, value) {
  config[key] = value
}

export default {
  get,
  set,
  config
}
