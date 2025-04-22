# Documentación de Componentes

## Estructura de Componentes

El proyecto sigue una arquitectura basada en el patrón Presentacional/Contenedor (también conocido como Smart/Dumb components). Esta separación mejora la testabilidad, la reutilización y el mantenimiento del código.

### Organización de Carpetas

- **src/components/**: Componentes presentacionales puros
  - **src/components/presentational/**: Componentes presentacionales adicionales
- **src/containers/**: Componentes contenedores
- **src/composables/**: Lógica reutilizable extraída de componentes
- **src/stores/**: Stores de Pinia para el estado global
- **src/services/**: Servicios para comunicación externa

## Componentes Presentacionales

Los componentes presentacionales (o "dumb components") se enfocan exclusivamente en la presentación y no contienen lógica de negocio.

### Características:

- No acceden directamente a stores
- Reciben datos a través de props
- Comunican eventos hacia arriba mediante `emit`
- Se preocupan sólo del "cómo se ve", no del "qué hace"

### Componentes Presentacionales Disponibles:

1. **VideoControls** (`components/presentational/VideoControls.vue`)
   - Controles de usuario para iniciar/detener streams de video
   - Props: `isActive`, `isLoading`, `statusMessage`, `messageType`
   - Eventos: `start`, `stop`

2. **VideoDisplay** (`components/presentational/VideoDisplay.vue`)
   - Visualización de streams de video con estados de carga/error
   - Props: `streamType`, `isActive`, `isLoading`, `streamUrl`, `placeholderText`, `altText`
   - Eventos: `stream-error`

3. **NotificationsList** (`components/presentational/NotificationsList.vue`)
   - Muestra notificaciones toast en diferentes posiciones
   - Props: `notifications`, `position`
   - Eventos: `close`

4. **VideoStream** (`components/VideoStream.vue`)
   - Presentación de streams de video con diferentes estados
   - Props: `streamType`, `isActive`, `isLoading`, `streamUrl`, `placeholderText`, `altText`
   - Eventos: `stream-error`

5. **HomePage** (`components/HomePage.vue`)
   - Layout principal de la página de inicio
   - Props: `originalActive`, `processedActive`, `isOriginalLoading`, `isProcessedLoading`
   - Eventos: `start-original`, `stop-original`, `start-processed`, `stop-processed`, `stream-error`

## Componentes Contenedores

Los componentes contenedores (o "smart components") encapsulan la lógica de negocio y proporcionan datos a los componentes presentacionales.

### Características:

- Pueden conectarse a stores
- Pueden usar servicios y realizar llamadas API
- Manejan el estado y la lógica de negocio
- Se preocupan del "qué hace", no del "cómo se ve"

### Componentes Contenedores Disponibles:

1. **VideoControlsContainer** (`containers/VideoControlsContainer.vue`)
   - Gestiona la lógica para los controles de video
   - Conectado a: `videoStore`
   - Utiliza: `VideoControlsPresentation`

2. **VideoStreamContainer** (`containers/VideoStreamContainer.vue`)
   - Gestiona la lógica para los streams de video
   - Conectado a: `videoStore`
   - Utiliza: `VideoStream`, `useVideoStream`

3. **NotificationsContainer** (`containers/NotificationsContainer.vue`)
   - Gestiona las notificaciones del sistema
   - Conectado a: `notificationStore`
   - Utiliza: `NotificationsList`

4. **HomeContainer** (`containers/HomeContainer.vue`)
   - Contenedor principal de la aplicación
   - Conectado a: `videoStore` (indirectamente a través de composables)
   - Utiliza: `HomePage`, `useVideoMediator`

## Composables

Los composables extraen la lógica reutilizable de los componentes, facilitando su prueba y mantenimiento:

1. **useVideoState**
   - Gestiona el estado básico de los streams de video

2. **useVideoStream**
   - Proporciona funcionalidad para manejar un stream de video individual

3. **useErrorHandling**
   - Maneja errores de forma centralizada

4. **useVideoMediator**
   - Coordina las operaciones entre múltiples streams de video

5. **useVideoUIState**
   - Gestiona el estado de UI relacionado con los streams de video

6. **useNotificationManager**
   - Gestiona las notificaciones del sistema

## Convenciones de Nomenclatura

- **Componentes Presentacionales**: Nombres descriptivos sin sufijos especiales (ej. `VideoControls`)
- **Componentes Presentacionales en subcarpeta**: Nombres descriptivos (ej. `NotificationsList`)
- **Componentes Contenedores**: Nombre + sufijo 'Container' (ej. `VideoControlsContainer`)
- **Composables**: Prefijo 'use' + nombre descriptivo (ej. `useVideoState`)

## Comunicación entre Componentes

Ver el documento [`component-patterns.md`](component-patterns.md) para detalles sobre los patrones de comunicación entre componentes.