<!--
Path: src/containers/NotificationsContainer.vue
Componente: NotificationsContainer (Container)

DESCRIPCIÓN:
Componente contenedor que gestiona la lógica de notificaciones, conectándose
con el store de notificaciones y delegando la presentación al componente presentacional.

PROPS:
- position: String - Posición de las notificaciones ('top-right', 'top-left', 'bottom-right', 'bottom-left')
-->

<template>
  <NotificationsList 
    :notifications="notifications" 
    :position="props.position"
    @close="removeNotification"
  />
</template>

<script setup>
import { useNotificationStore } from '@/stores/notificationStore'
import { storeToRefs } from 'pinia'
import NotificationsList from '@/components/presentational/NotificationsList.vue'

// eslint-disable-next-line no-undef
const props = defineProps({
  position: {
    type: String,
    default: 'top-right',
    validator: (value) => ['top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(value)
  }
})

const notificationStore = useNotificationStore()
const { notifications } = storeToRefs(notificationStore)
const { removeNotification } = notificationStore
</script>