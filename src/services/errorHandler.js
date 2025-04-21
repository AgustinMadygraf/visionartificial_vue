// Manejador centralizado de errores para servicios

function handleError(error, context = {}) {
  // Aquí puedes agregar lógica para logging, notificaciones, etc.
  // Por ejemplo, enviar a un servicio externo o mostrar un mensaje global
  console.error('Service Error:', error, context)
  // Se puede extender para integrar con notificationStore o servicios de logging
}

export default {
  handleError
}
