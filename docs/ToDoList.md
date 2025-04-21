## Tarea 3: Refactorización a Composition API

📌 **Título:** Migración de Options API a Composition API

📝 **Descripción:** Refactorizar los componentes actuales para que utilicen la Composition API de Vue 3 en lugar de la Options API, mejorando la organización del código, reusabilidad y facilitando la implementación de composables.

🏗️ **Archivos a modificar o crear:**
- Modificar todos los componentes Vue existentes
- Crear directorio `src/composables`

🔗 **Dependencias:** Idealmente después de Tareas 1 y 2

🎯 **Beneficio esperado:** Mejor organización del código, mayor reusabilidad de lógica, facilidad para testing aislado.

### Subtareas:

#### 3.1 Crear composables para lógica común

📌 **Título:** Desarrollo de composables para lógica reutilizable

📝 **Descripción:** Extraer lógica común a múltiples componentes en funciones composables dedicadas siguiendo los principios de la Composition API.

🏗️ **Archivos a modificar o crear:**
- Crear `src/composables/useVideoStream.js`
- Crear `src/composables/useErrorHandling.js`

📂 **Archivos de referencia:**
- VideoStream.vue
- Home.vue

🔗 **Dependencias:** Ninguna

🎯 **Beneficio esperado:** Encapsulación de lógica reutilizable, facilitando testing y mantenimiento.

#### 3.2 Refactorización de Home.vue a Composition API

📌 **Título:** Migrar Home.vue a Composition API

📝 **Descripción:** Refactorizar el componente Home para utilizar la sintaxis de Composition API (`setup()` o `<script setup>`), manteniendo la misma funcionalidad pero con mejor organización interna.

🏗️ **Archivos a modificar o crear:**
- Modificar Home.vue

📂 **Archivos de referencia:**
- `src/composables/useVideoStream.js`
- `src/stores/videoStore.js`

🔗 **Dependencias:** Subtarea 3.1, idealmente después de Tarea 1

🎯 **Beneficio esperado:** Componente más legible, mejor organizado y más fácil de mantener.

#### 3.3 Refactorización de VideoStream.vue a Composition API

📌 **Título:** Migrar VideoStream.vue a Composition API

📝 **Descripción:** Refactorizar el componente VideoStream para utilizar la sintaxis de Composition API, extrayendo su lógica a composables reutilizables donde sea posible.

🏗️ **Archivos a modificar o crear:**
- Modificar VideoStream.vue

📂 **Archivos de referencia:**
- `src/composables/useVideoStream.js`
- `src/stores/configStore.js` (si se ha implementado)

🔗 **Dependencias:** Subtarea 3.1, idealmente después de Tareas 1 y 2

🎯 **Beneficio esperado:** Mejor organización del componente, separación de responsabilidades.

#### 3.4 Refactorización de VideoControls.vue a Composition API

📌 **Título:** Migrar VideoControls.vue a Composition API

📝 **Descripción:** Refactorizar el componente VideoControls para utilizar la sintaxis de Composition API, mejorando su organización interna.

🏗️ **Archivos a modificar o crear:**
- Modificar VideoControls.vue

📂 **Archivos de referencia:**
- `src/stores/videoStore.js` (si se ha implementado)

🔗 **Dependencias:** Subtarea 3.1, idealmente después de Tarea 1

🎯 **Beneficio esperado:** Mejor organización y cohesión del componente.

#### 3.5 Crear composable para gestión de estado de video

📌 **Título:** Implementar composable de gestión de estado de video

📝 **Descripción:** Desarrollar un composable dedicado que encapsule la lógica de gestión de estado de video, ya sea utilizando Pinia o estado local reactivo.

🏗️ **Archivos a modificar o crear:**
- Crear `src/composables/useVideoState.js`

📂 **Archivos de referencia:**
- `src/stores/videoStore.js` (si existe)
- Home.vue

🔗 **Dependencias:** Subtarea 3.1

🎯 **Beneficio esperado:** Abstracción de la gestión de estado de video independiente de la implementación subyacente.


































## Tarea 4: Separación de Responsabilidades en Componentes

📌 **Título:** Refactorización de componentes según principio de responsabilidad única

📝 **Descripción:** Reorganizar los componentes actuales para que cada uno tenga una única responsabilidad bien definida, mejorando la cohesión del código y facilitando las pruebas y mantenimiento.

🏗️ **Archivos a modificar o crear:**
- Múltiples archivos en components

🔗 **Dependencias:** Idealmente después de Tarea 3

🎯 **Beneficio esperado:** Componentes más pequeños, cohesivos y fáciles de mantener, mejor testabilidad.

### Subtareas:

#### 4.1 Separación de VideoPlayer y VideoUI

📌 **Título:** Separar lógica de reproducción de video de su UI

📝 **Descripción:** Dividir el componente VideoStream actual en dos componentes: uno responsable de la lógica de reproducción y otro de la presentación visual.

🏗️ **Archivos a modificar o crear:**
- Modificar VideoStream.vue
- Crear `src/components/VideoPlayer.vue`

📂 **Archivos de referencia:**
- VideoStream.vue (implementación actual)

🔗 **Dependencias:** Idealmente después de Tarea 3

🎯 **Beneficio esperado:** Mejor separación de responsabilidades, facilitando cambios en la presentación o lógica de manera independiente.

#### 4.2 Creación de componente para manejo de errores

📌 **Título:** Implementar componente dedicado para notificaciones de error

📝 **Descripción:** Extraer la lógica de presentación de errores a un componente dedicado que pueda ser reutilizado en toda la aplicación.

🏗️ **Archivos a modificar o crear:**
- Crear `src/components/ErrorNotification.vue`

📂 **Archivos de referencia:**
- Home.vue (manejo actual de errores)

🔗 **Dependencias:** Idealmente después de Tarea 1 (notificationStore)

🎯 **Beneficio esperado:** Presentación consistente de errores en toda la aplicación, facilidad para modificar la UI de errores.

#### 4.3 Extracción de controles a componentes independientes

📌 **Título:** Dividir VideoControls en componentes más específicos

📝 **Descripción:** Refactorizar VideoControls para extraer funcionalidades específicas (como botones de inicio/detención) a componentes más pequeños y específicos.

🏗️ **Archivos a modificar o crear:**
- Modificar VideoControls.vue
- Crear `src/components/controls/StartStopButton.vue`
- Crear `src/components/controls/StreamSelector.vue`

📂 **Archivos de referencia:**
- VideoControls.vue

🔗 **Dependencias:** Idealmente después de Tarea 3

🎯 **Beneficio esperado:** Componentes más pequeños y reutilizables con responsabilidades más específicas.

#### 4.4 Creación de Layout Components

📌 **Título:** Implementar componentes de layout para estructura consistente

📝 **Descripción:** Desarrollar componentes dedicados para gestionar el layout de la aplicación, separando esta responsabilidad de los componentes de funcionalidad.

🏗️ **Archivos a modificar o crear:**
- Crear `src/components/layout/MainLayout.vue`
- Crear `src/components/layout/VideoSection.vue`

📂 **Archivos de referencia:**
- Home.vue

🔗 **Dependencias:** Ninguna específica

🎯 **Beneficio esperado:** Mejor organización visual, separación de responsabilidades entre layout y funcionalidad.

#### 4.5 Implementación de componente de carga

📌 **Título:** Desarrollar componente para estados de carga

📝 **Descripción:** Crear un componente dedicado para mostrar estados de carga durante la inicialización de los streams de video.

🏗️ **Archivos a modificar o crear:**
- Crear `src/components/LoadingIndicator.vue`

📂 **Archivos de referencia:**
- VideoStream.vue

🔗 **Dependencias:** Ninguna específica

🎯 **Beneficio esperado:** Mejor experiencia de usuario durante estados de carga, consistencia en la presentación.













































## Tarea 5: Implementación de Patrón Container/Presentational

📌 **Título:** Aplicación del patrón Container/Presentational a componentes clave

📝 **Descripción:** Reorganizar los componentes siguiendo el patrón Container/Presentational, donde los componentes container gestionan el estado y lógica, mientras que los presentacionales se enfocan en la UI.

🏗️ **Archivos a modificar o crear:**
- Reestructurar directorios en components
- Crear nuevos componentes

🔗 **Dependencias:** Tareas 1, 3 y 4

🎯 **Beneficio esperado:** Clara separación entre lógica de negocio y presentación, mejor testabilidad y mantenimiento.

### Subtareas:

#### 5.1 Transformación de Home en Container Component

📌 **Título:** Convertir Home.vue en un componente contenedor

📝 **Descripción:** Refactorizar Home.vue para que actúe como un componente contenedor que coordina la lógica de negocio pero delega la presentación a componentes presentacionales.

🏗️ **Archivos a modificar o crear:**
- Modificar Home.vue
- Crear `src/components/containers/HomeContainer.vue` (opcional)

📂 **Archivos de referencia:**
- `src/stores/videoStore.js`

🔗 **Dependencias:** Tareas 1 y 3

🎯 **Beneficio esperado:** Clara separación de responsabilidades, mejorando la mantenibilidad y testabilidad.

#### 5.2 Creación de componentes presentacionales para VideoStream

📌 **Título:** Desarrollar componentes presentacionales para streaming de video

📝 **Descripción:** Crear componentes puramente presentacionales que reciban props y emitan eventos, sin lógica de negocio interna.

🏗️ **Archivos a modificar o crear:**
- Crear `src/components/presentation/VideoDisplay.vue`
- Crear `src/components/presentation/StreamControls.vue`

📂 **Archivos de referencia:**
- VideoStream.vue
- VideoControls.vue

🔗 **Dependencias:** Tarea 4

🎯 **Beneficio esperado:** Componentes presentacionales más fáciles de probar y reutilizar.

#### 5.3 Implementación de Container para gestión de video

📌 **Título:** Crear componente contenedor para lógica de video

📝 **Descripción:** Desarrollar un componente contenedor dedicado para la gestión de los streams de video, conectándose con el store pero delegando la presentación.

🏗️ **Archivos a modificar o crear:**
- Crear `src/components/containers/VideoContainer.vue`

📂 **Archivos de referencia:**
- `src/stores/videoStore.js`
- `src/services/videoService.js` (si existe)

🔗 **Dependencias:** Tareas 1, 2 y 3

🎯 **Beneficio esperado:** Centralización de la lógica de video con clara separación de la presentación.

#### 5.4 Refactorización de estructura de componentes

📌 **Título:** Reorganizar estructura de directorios según patrón Container/Presentational

📝 **Descripción:** Reestructurar la organización de los componentes en directorios que reflejen su naturaleza (container vs presentational) para mayor claridad.

🏗️ **Archivos a modificar o crear:**
- Crear directorios `src/components/containers` y `src/components/presentation`
- Mover componentes a sus ubicaciones correspondientes

📂 **Archivos de referencia:**
- Estructura actual de components

🔗 **Dependencias:** Subtareas 5.1, 5.2 y 5.3

🎯 **Beneficio esperado:** Estructura de proyecto más clara que refleja las responsabilidades de los componentes.

#### 5.5 Creación de interface props para comunicación entre componentes

📌 **Título:** Definir interfaces claras para comunicación entre componentes

📝 **Descripción:** Establecer interfaces claras mediante props y eventos para la comunicación entre componentes container y presentacionales.

🏗️ **Archivos a modificar o crear:**
- Modificar múltiples componentes para definir props y eventos
- Crear `src/types` (opcional, si se usa TypeScript o JSDoc)

📂 **Archivos de referencia:**
- Componentes existentes

🔗 **Dependencias:** Subtareas 5.1, 5.2 y 5.3

🎯 **Beneficio esperado:** Contratos claros entre componentes, mejorando la mantenibilidad y testabilidad.






































## Tarea 7: Mejora en el Manejo de Errores

📌 **Título:** Implementación de sistema global de manejo de errores

📝 **Descripción:** Diseñar e implementar un sistema centralizado para la gestión, notificación y registro de errores, mejorando la robustez de la aplicación y la experiencia de usuario ante fallos.

🏗️ **Archivos a modificar o crear:**
- Crear `src/utils/errorHandler.js`
- Modificar componentes que manejen errores

🔗 **Dependencias:** Idealmente después de Tarea 1

🎯 **Beneficio esperado:** Gestión consistente de errores, mejor experiencia de usuario, facilidad para debugging.

### Subtareas:

#### 7.1 Creación de servicio de notificación de errores

📌 **Título:** Desarrollar servicio de notificación de errores

📝 **Descripción:** Implementar un servicio dedicado para gestionar la notificación de errores de forma consistente en toda la aplicación.

🏗️ **Archivos a modificar o crear:**
- Crear `src/services/notificationService.js`

📂 **Archivos de referencia:**
- Home.vue (manejo actual de errores)

🔗 **Dependencias:** Idealmente después de Tarea 2

🎯 **Beneficio esperado:** Notificaciones de error consistentes y personalizables en toda la aplicación.

#### 7.2 Implementación de interceptores globales para errors HTTP

📌 **Título:** Crear interceptores HTTP para manejo centralizado de errores

📝 **Descripción:** Configurar interceptores en el cliente HTTP para capturar y procesar errores de comunicación con la API de forma centralizada.

🏗️ **Archivos a modificar o crear:**
- Modificar `src/services/http.js` (si existe)
- Crear `src/services/interceptors.js` (opcional)

📂 **Archivos de referencia:**
- `src/services/http.js` (si existe)

🔗 **Dependencias:** Subtarea 2.1

🎯 **Beneficio esperado:** Captura y procesamiento consistente de errores HTTP sin duplicación de código.

#### 7.3 Creación de componente UI para notificaciones

📌 **Título:** Desarrollar componente dedicado para mostrar notificaciones

📝 **Descripción:** Implementar un componente reutilizable para mostrar notificaciones (errores, advertencias, información) de forma consistente.

🏗️ **Archivos a modificar o crear:**
- Crear `src/components/ui/Notification.vue`

📂 **Archivos de referencia:**
- Home.vue (manejo actual de errores)

🔗 **Dependencias:** Subtarea 7.1

🎯 **Beneficio esperado:** Presentación visual consistente de mensajes al usuario.

#### 7.4 Integración con sistema de manejo global de errores de Vue

📌 **Título:** Configurar manejador global de errores de Vue

📝 **Descripción:** Configurar el hook `errorCaptured` y `app.config.errorHandler` para capturar errores no manejados en la aplicación.

🏗️ **Archivos a modificar o crear:**
- Modificar main.js
- Crear `src/utils/globalErrorHandler.js`

📂 **Archivos de referencia:**
- main.js

🔗 **Dependencias:** Subtareas 7.1 y 7.3

🎯 **Beneficio esperado:** Captura de errores no manejados específicamente, evitando fallos silenciosos.

#### 7.5 Implementación de registro de errores

📌 **Título:** Crear sistema de registro (logging) de errores

📝 **Descripción:** Implementar un sistema para registrar errores con fines de depuración y monitoreo, posiblemente enviando información a un servicio backend.

🏗️ **Archivos a modificar o crear:**
- Crear `src/services/logService.js`

📂 **Archivos de referencia:**
- `src/utils/errorHandler.js`

🔗 **Dependencias:** Subtareas 7.1 y 7.2

🎯 **Beneficio esperado:** Capacidad para registrar y analizar errores para diagnóstico y mejora continua.
