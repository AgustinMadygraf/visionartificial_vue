# Patrones de Comunicación entre Componentes

Este documento establece los patrones estándar para la comunicación entre componentes presentacionales y contenedores en el proyecto de Visión Artificial.

## Principios Generales

1. **Unidireccionalidad de datos**: Los datos fluyen desde los contenedores hacia los componentes presentacionales.
2. **Eventos hacia arriba**: Los componentes presentacionales comunican hacia arriba mediante eventos.
3. **Separación clara de responsabilidades**: Los componentes presentacionales no deben conocer la lógica de negocio.

## Patrones de Comunicación

### 1. Contenedor → Presentacional

La comunicación de contenedores a componentes presentacionales se realiza mediante **props**:

```vue
<!-- Contenedor -->
<template>
  <ComponentePresentacional 
    :datos="datos" 
    :loading="isLoading"
    :error="error"
  />
</template>
```

### 2. Presentacional → Contenedor

La comunicación de componentes presentacionales a contenedores se realiza mediante **eventos**:

```vue
<!-- Componente Presentacional -->
<template>
  <button @click="$emit('accion', parametros)">Acción</button>
</template>

<!-- Contenedor que escucha el evento -->
<template>
  <ComponentePresentacional @accion="manejarAccion" />
</template>
```

### 3. Comunicación entre Contenedores

La comunicación entre contenedores se realiza preferentemente a través de **stores** (Pinia):

```js
// ContainerA.vue
import { useAlgunStore } from '@/stores/algunStore'

const store = useAlgunStore()
store.actualizarDato(nuevoDato)

// ContainerB.vue (recibe la actualización automáticamente)
import { useAlgunStore } from '@/stores/algunStore'
import { storeToRefs } from 'pinia'

const store = useAlgunStore()
const { dato } = storeToRefs(store)
```

### 4. Manejo de Errores

Los errores se propagan hacia arriba mediante eventos y se manejan en el nivel apropiado:

```vue
<!-- Componente Presentacional -->
<template>
  <div @error="$emit('error', $event)">...</div>
</template>

<!-- Contenedor -->
<template>
  <ComponentePresentacional @error="manejarError" />
</template>
```

## Ejemplos de Implementación

### Ejemplo: VideoControls

- **VideoControlsPresentation.vue** (Presentacional):
  - Recibe props: `isActive`, `isLoading`, `statusMessage`, `messageType`
  - Emite eventos: `start`, `stop`

- **VideoControlsContainer.vue** (Contenedor):
  - Provee datos mediante props
  - Escucha eventos y ejecuta lógica de negocio
  - Se comunica con stores

### Ejemplo: NotificationsList

- **NotificationsList.vue** (Presentacional):
  - Recibe props: `notifications`, `position`
  - Emite eventos: `close`

- **NotificationsContainer.vue** (Contenedor):
  - Se conecta al store de notificaciones
  - Pasa los datos al componente presentacional
  - Maneja las acciones solicitadas por el presentacional

## Buenas Prácticas

1. **Nombres claros para eventos**: Usar nombres descriptivos para los eventos.
2. **Documentación de props y eventos**: Documentar claramente todas las props y eventos.
3. **Validación de props**: Usar validadores para asegurar que las props cumplan con los tipos esperados.
4. **Evitar eventos innecesarios**: No emitir eventos si la acción puede manejarse en el componente presentacional.