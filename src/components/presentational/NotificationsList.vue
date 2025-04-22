<!--
Path: src/components/presentational/NotificationsList.vue
Componente: NotificationsList (Presentacional)

DESCRIPCIÓN:
Componente presentacional puro que muestra notificaciones toast en diferentes posiciones
de la pantalla y con diferentes estilos según el tipo.

PROPS:
- notifications: Array - Lista de notificaciones a mostrar
- position: String - Posición de las notificaciones ('top-right', 'top-left', 'bottom-right', 'bottom-left')

EVENTOS:
- close: (id: number|string) => void - Emitido cuando se cierra una notificación específica
-->

<template>
  <div class="notifications-container position-fixed" :class="positionClass">
    <div v-for="notification in notifications" :key="notification.id" 
         class="toast show mb-2" :class="notificationClass(notification.type)" 
         role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <div class="rounded me-2" :class="iconClass(notification.type)">
          <i :class="iconType(notification.type)"></i>
        </div>
        <strong class="me-auto">{{ notification.title }}</strong>
        <button type="button" class="btn-close" @click="onClose(notification.id)"></button>
      </div>
      <div class="toast-body">
        {{ notification.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Definir el nombre del componente como multi-palabra
// eslint-disable-next-line no-undef
defineOptions({
  name: 'NotificationsList'
})

// eslint-disable-next-line no-undef
const props = defineProps({
  notifications: {
    type: Array,
    required: true,
    default: () => []
  },
  position: {
    type: String,
    default: 'top-right',
    validator: (value) => ['top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(value)
  }
})

// eslint-disable-next-line no-undef
const emit = defineEmits(['close'])

const positionClass = computed(() => {
  switch (props.position) {
    case 'top-right':
      return 'top-0 end-0 p-3';
    case 'top-left':
      return 'top-0 start-0 p-3';
    case 'bottom-right':
      return 'bottom-0 end-0 p-3';
    case 'bottom-left':
      return 'bottom-0 start-0 p-3';
    default:
      return 'top-0 end-0 p-3';
  }
});

const notificationClass = (type) => {
  switch (type) {
    case 'error':
      return 'bg-danger text-white';
    case 'warning':
      return 'bg-warning';
    case 'success':
      return 'bg-success text-white';
    default:
      return 'bg-info text-white';
  }
};

const iconClass = (type) => {
  switch (type) {
    case 'error':
      return 'text-white';
    case 'warning':
      return 'text-dark';
    case 'success':
      return 'text-white';
    default:
      return 'text-white';
  }
};

const iconType = (type) => {
  switch (type) {
    case 'error':
      return 'bi bi-exclamation-triangle-fill';
    case 'warning':
      return 'bi bi-exclamation-circle-fill';
    case 'success':
      return 'bi bi-check-circle-fill';
    default:
      return 'bi bi-info-circle-fill';
  }
};

function onClose(id) {
  emit('close', id);
}
</script>

<style scoped>
.notifications-container {
  z-index: 1050;
  max-width: 350px;
}

/* Responsive adjustments */
@media (max-width: 576px) {
  .notifications-container {
    max-width: 300px;
  }
  
  .toast {
    width: 100%;
  }
}

@media (max-width: 400px) {
  .notifications-container {
    max-width: 250px;
    font-size: 0.875rem;
  }
  
  .toast-header {
    padding: 0.25rem 0.5rem;
  }
  
  .toast-body {
    padding: 0.5rem;
  }
}
</style>