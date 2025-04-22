## 🔶 TAREA 3: Mejora de la Separación de Responsabilidades en Composables

### 📌 Título
Refactorización de composables para mejor separación de responsabilidades

### 📝 Descripción
Reorganizar y refactorizar los composables existentes para que cada uno tenga una única responsabilidad bien definida, siguiendo el principio SRP (Single Responsibility Principle), mejorando su testabilidad y reutilización.

### 🏗️ Archivos a modificar o crear
- useVideoState.js
- useVideoStream.js
- useErrorHandling.js
- src/composables/useVideoLifecycle.js (nuevo)
- src/composables/useVideoSettings.js (nuevo)

### 📂 Archivos de referencia
- HomePage.vue
- videoStore.js
- configStore.js

### 🔗 Dependencias
Idealmente se realizaría después de la Tarea 2 para tener un contexto claro de dónde se utilizan los composables.

### 🎯 Beneficio esperado
Composables más cohesivos, testables y reutilizables, con responsabilidades claramente definidas.

#### Subtarea 3.1: Análisis de responsabilidades de composables existentes
- **Título**: Identificar responsabilidades mezcladas en composables actuales
- **Descripción**: Revisar los composables existentes para identificar cuando un composable maneja múltiples responsabilidades que deberían estar separadas
- **Archivos a analizar**: src/composables/*.js
- **Archivos de referencia**: src/components/*.vue, src/stores/*.js
- **Dependencias**: Ninguna
- **Beneficio esperado**: Mapa claro de responsabilidades para guiar la refactorización

#### Subtarea 3.2: Extracción de lógica de ciclo de vida del video
- **Título**: Crear composable para ciclo de vida del video
- **Descripción**: Extraer la lógica relacionada con el inicio, pausa y finalización de videos a un composable dedicado
- **Archivos a crear**: src/composables/useVideoLifecycle.js
- **Archivos a modificar**: useVideoState.js
- **Archivos de referencia**: videoStore.js
- **Dependencias**: Subtarea 3.1
- **Beneficio esperado**: Separación clara de la lógica de ciclo de vida del video

#### Subtarea 3.3: Creación de composable para configuración de video
- **Título**: Implementar composable para gestión de configuraciones
- **Descripción**: Extraer la lógica relacionada con la configuración del video (resolución, fps, etc.) a un composable dedicado
- **Archivos a crear**: src/composables/useVideoSettings.js
- **Archivos a modificar**: src/composables/useVideoState.js, useVideoStream.js
- **Archivos de referencia**: configStore.js
- **Dependencias**: Subtarea 3.1
- **Beneficio esperado**: Gestión de configuración de video desacoplada y reutilizable

#### Subtarea 3.4: Refactorización de useVideoState
- **Título**: Redefinir useVideoState para enfocarse solo en estado
- **Descripción**: Refactorizar useVideoState para que solo se encargue de proporcionar acceso reactivo al estado del video
- **Archivos a modificar**: useVideoState.js
- **Archivos de referencia**: videoStore.js
- **Dependencias**: Subtareas 3.2, 3.3
- **Beneficio esperado**: Composable con responsabilidad única para el acceso al estado

#### Subtarea 3.5: Refactorización de useVideoStream
- **Título**: Simplificar useVideoStream para enfocarse en streams
- **Descripción**: Refactorizar useVideoStream para que solo gestione la obtención y procesamiento de streams
- **Archivos a modificar**: useVideoStream.js
- **Archivos de referencia**: useVideoState.js
- **Dependencias**: Subtareas 3.2, 3.3, 3.4
- **Beneficio esperado**: Responsabilidad única para la gestión de streams de video

#### Subtarea 3.6: Mejora de useErrorHandling
- **Título**: Expandir useErrorHandling para centralizar manejo de errores
- **Descripción**: Refactorizar useErrorHandling para que sea un sistema centralizado de gestión de errores con capacidad de registro y notificación
- **Archivos a modificar**: useErrorHandling.js
- **Archivos a crear**: src/composables/useNotification.js (opcional)
- **Archivos de referencia**: notificationStore.js
- **Dependencias**: Subtarea 3.1
- **Beneficio esperado**: Sistema de manejo de errores más robusto y centralizado

#### Subtarea 3.7: Documentación de interfaces de composables
- **Título**: Documentar la API pública de cada composable
- **Descripción**: Añadir comentarios descriptivos sobre los parámetros, valores de retorno y comportamiento esperado de cada función exportada por los composables
- **Archivos a modificar**: Todos los composables
- **Archivos de referencia**: Ninguno
- **Dependencias**: Subtareas 3.2 - 3.6
- **Beneficio esperado**: Mayor claridad sobre cómo utilizar los composables







































## 🔶 TAREA 4: Reducción del Acoplamiento con Stores

### 📌 Título
Desacoplamiento entre componentes y stores

### 📝 Descripción
Reducir el acoplamiento directo entre componentes y stores mediante la implementación de abstracciones, adaptadores o inyección de dependencias, mejorando la testabilidad y flexibilidad de los componentes.

### 🏗️ Archivos a modificar o crear
- src/composables/adapters/useVideoStoreAdapter.js (nuevo)
- src/composables/adapters/useConfigStoreAdapter.js (nuevo)
- src/composables/adapters/useNotificationStoreAdapter.js (nuevo)
- src/components que acceden directamente a stores

### 📂 Archivos de referencia
- videoStore.js
- configStore.js
- notificationStore.js
- useVideoState.js

### 🔗 Dependencias
Esta tarea se beneficiaría después de completar la Tarea 2 y 3, ya que implica cambios en cómo los componentes acceden al estado.

### 🎯 Beneficio esperado
Componentes desacoplados de la implementación específica de gestión de estado, mayor facilidad para pruebas unitarias y flexibilidad para cambiar la implementación del estado.

#### Subtarea 4.1: Análisis de uso de stores
- **Título**: Mapear uso directo de stores en componentes y composables
- **Descripción**: Identificar todos los puntos donde se accede directamente a los stores desde componentes o composables
- **Archivos a analizar**: Todos los componentes y composables
- **Archivos de referencia**: src/stores/*.js
- **Dependencias**: Ninguna
- **Beneficio esperado**: Visibilidad de dónde se necesitan adaptadores o abstracciones

#### Subtarea 4.2: Creación de adaptador para videoStore
- **Título**: Implementar adaptador para videoStore
- **Descripción**: Crear un adaptador que encapsule el acceso a videoStore y exponga una interfaz consistente
- **Archivos a crear**: src/composables/adapters/useVideoStoreAdapter.js
- **Archivos de referencia**: videoStore.js
- **Dependencias**: Subtarea 4.1
- **Beneficio esperado**: Acceso desacoplado al estado del video

#### Subtarea 4.3: Creación de adaptador para configStore
- **Título**: Implementar adaptador para configStore
- **Descripción**: Crear un adaptador que encapsule el acceso a configStore y proporcione métodos para acceder y modificar la configuración
- **Archivos a crear**: src/composables/adapters/useConfigStoreAdapter.js
- **Archivos de referencia**: configStore.js
- **Dependencias**: Subtarea 4.1
- **Beneficio esperado**: Acceso desacoplado a la configuración

#### Subtarea 4.4: Creación de adaptador para notificationStore
- **Título**: Implementar adaptador para notificationStore
- **Descripción**: Crear un adaptador que encapsule el acceso a notificationStore y proporcione métodos para enviar y leer notificaciones
- **Archivos a crear**: src/composables/adapters/useNotificationStoreAdapter.js
- **Archivos de referencia**: notificationStore.js
- **Dependencias**: Subtarea 4.1
- **Beneficio esperado**: Sistema de notificaciones desacoplado y reutilizable

#### Subtarea 4.5: Refactorización de useVideoState para usar adaptadores
- **Título**: Actualizar useVideoState para utilizar el adaptador
- **Descripción**: Modificar useVideoState para que utilice useVideoStoreAdapter en lugar de acceder directamente al store
- **Archivos a modificar**: useVideoState.js
- **Archivos de referencia**: src/composables/adapters/useVideoStoreAdapter.js
- **Dependencias**: Subtarea 4.2
- **Beneficio esperado**: Composable de estado desacoplado de la implementación del store

#### Subtarea 4.6: Refactorización de componentes para usar adaptadores
- **Título**: Reemplazar uso directo de stores en componentes
- **Descripción**: Modificar componentes que acceden directamente a stores para usar los adaptadores correspondientes
- **Archivos a modificar**: Componentes identificados en subtarea 4.1
- **Archivos de referencia**: src/composables/adapters/*.js
- **Dependencias**: Subtareas 4.2, 4.3, 4.4
- **Beneficio esperado**: Componentes libres de dependencias directas a stores específicos

#### Subtarea 4.7: Implementación de inyección opcional de stores
- **Título**: Habilitar inyección de stores para testing
- **Descripción**: Modificar adaptadores para permitir la inyección opcional de stores, facilitando pruebas con mocks
- **Archivos a modificar**: src/composables/adapters/*.js
- **Archivos de referencia**: Ninguno
- **Dependencias**: Subtareas 4.2, 4.3, 4.4
- **Beneficio esperado**: Mayor facilidad para pruebas unitarias con mocks








































## 🔶 TAREA 5: Estandarización de Patrones de Comunicación entre Componentes

### 📌 Título
Definición e implementación de patrones consistentes de comunicación entre componentes

### 📝 Descripción
Establecer y aplicar patrones claros y consistentes para la comunicación entre componentes padres e hijos, entre componentes hermanos, y para la comunicación global, mejorando la previsibilidad y mantenibilidad del código.

### 🏗️ Archivos a modificar o crear
- src/utils/eventBus.js (opcional, para comunicación entre componentes no relacionados)
- Componentes que requieren comunicación

### 📂 Archivos de referencia
- src/components/*.vue
- src/containers/*.vue (después de Tarea 2)

### 🔗 Dependencias
Esta tarea se beneficiaría después de implementar el patrón Container/Presentational (Tarea 2).

### 🎯 Beneficio esperado
Comunicación predecible y consistente entre componentes, facilitando la depuración y reduciendo errores por comunicación incorrecta.

#### Subtarea 5.1: Documentación de patrones de comunicación actual
- **Título**: Analizar patrones de comunicación existentes
- **Descripción**: Revisar la base de código para identificar todos los métodos de comunicación entre componentes actualmente utilizados
- **Archivos a analizar**: Todos los componentes .vue
- **Archivos de referencia**: Ninguno
- **Dependencias**: Ninguna
- **Beneficio esperado**: Comprensión clara de los diferentes patrones utilizados actualmente

#### Subtarea 5.2: Definición de guía de comunicación entre componentes
- **Título**: Crear estándares para comunicación entre componentes
- **Descripción**: Documentar reglas claras sobre qué métodos de comunicación utilizar en diferentes situaciones (props/eventos, stores, servicios, etc.)
- **Archivos a crear**: docs/component-communication.md
- **Archivos de referencia**: Análisis de la subtarea 5.1
- **Dependencias**: Subtarea 5.1
- **Beneficio esperado**: Guía de referencia para mantener una comunicación consistente

#### Subtarea 5.3: Implementación de contratos de props y eventos
- **Título**: Definir contratos explícitos para props y eventos
- **Descripción**: Agregar validación de props y documentación de eventos en todos los componentes
- **Archivos a modificar**: Todos los componentes .vue
- **Archivos de referencia**: Documentación de Vue sobre validación de props
- **Dependencias**: Subtarea 5.2
- **Beneficio esperado**: Interfaces claras entre componentes que facilitan el mantenimiento

#### Subtarea 5.4: Creación de eventBus para comunicación global (opcional)
- **Título**: Implementar sistema de eventos globales
- **Descripción**: Crear un sistema de eventos globales para comunicación entre componentes no relacionados directamente, si es necesario
- **Archivos a crear**: src/utils/eventBus.js
- **Archivos de referencia**: Ninguno
- **Dependencias**: Subtarea 5.2
- **Beneficio esperado**: Método consistente para comunicación entre componentes no relacionados

#### Subtarea 5.5: Refactorización de comunicación padre-hijo
- **Título**: Estandarizar comunicación entre componentes padres e hijos
- **Descripción**: Revisar y refactorizar la comunicación ascendente y descendente entre componentes padres e hijos según los estándares definidos
- **Archivos a modificar**: Componentes con relaciones padre-hijo
- **Archivos de referencia**: docs/component-communication.md
- **Dependencias**: Subtareas 5.2, 5.3
- **Beneficio esperado**: Comunicación predecible y consistente entre componentes relacionados

#### Subtarea 5.6: Refactorización de comunicación entre componentes no relacionados
- **Título**: Estandarizar comunicación entre componentes no relacionados
- **Descripción**: Revisar y refactorizar la comunicación entre componentes que no tienen relación directa padre-hijo
- **Archivos a modificar**: Componentes que requieren comunicación indirecta
- **Archivos de referencia**: docs/component-communication.md, src/utils/eventBus.js
- **Dependencias**: Subtareas 5.2, 5.4
- **Beneficio esperado**: Comunicación coherente entre componentes no relacionados directamente

#### Subtarea 5.7: Documentación de flujos de comunicación
- **Título**: Crear diagrama de flujo de comunicación
- **Descripción**: Documentar visualmente los principales flujos de comunicación en la aplicación
- **Archivos a crear**: docs/communication-flow.md
- **Archivos de referencia**: docs/component-communication.md
- **Dependencias**: Subtareas 5.5, 5.6
- **Beneficio esperado**: Documentación visual que facilita la comprensión de cómo interactúan los componentes






































## 🔶 TAREA 6: Generalización de Componentes para Mayor Reutilización

### 📌 Título
Refactorización de componentes para hacerlos más genéricos y reutilizables

### 📝 Descripción
Identificar y refactorizar componentes específicos para hacerlos más genéricos y reutilizables, aplicando patrones de diseño como renderless components, scoped slots y composition functions.

### 🏗️ Archivos a modificar o crear
- VideoStream.vue
- VideoControls.vue
- src/components/ui/ (nuevo directorio para componentes UI genéricos)
- src/components/ui/Button.vue (nuevo)
- src/components/ui/Card.vue (nuevo)
- src/components/ui/Icon.vue (nuevo)

### 📂 Archivos de referencia
- src/components existentes
- Guías de mejores prácticas de Vue

### 🔗 Dependencias
Esta tarea se beneficiaría después de implementar el patrón Container/Presentational (Tarea 2).

### 🎯 Beneficio esperado
Mayor reutilización de código, menos duplicación, facilidad para implementar nuevas características con componentes existentes.

#### Subtarea 6.1: Identificación de oportunidades de generalización
- **Título**: Analizar componentes para detectar patrones comunes
- **Descripción**: Revisar los componentes existentes para identificar patrones de UI y comportamiento que podrían generalizarse
- **Archivos a analizar**: Todos los componentes .vue
- **Archivos de referencia**: Ninguno
- **Dependencias**: Ninguna
- **Beneficio esperado**: Mapa de oportunidades para crear componentes genéricos reutilizables

#### Subtarea 6.2: Creación de componente Button genérico
- **Título**: Implementar componente Button reutilizable
- **Descripción**: Crear un componente Button que admita diferentes estilos, tamaños y comportamientos
- **Archivos a crear**: src/components/ui/Button.vue
- **Archivos de referencia**: Componentes existentes que usan botones
- **Dependencias**: Subtarea 6.1
- **Beneficio esperado**: Consistencia visual y comportamental en todos los botones de la aplicación

#### Subtarea 6.3: Creación de componente Card genérico
- **Título**: Implementar componente Card reutilizable
- **Descripción**: Crear un componente Card que pueda usarse para contener diferentes tipos de contenido manteniendo un estilo consistente
- **Archivos a crear**: src/components/ui/Card.vue
- **Archivos de referencia**: Componentes existentes que usan estructuras tipo card
- **Dependencias**: Subtarea 6.1
- **Beneficio esperado**: Contenedores de contenido consistentes en toda la aplicación

#### Subtarea 6.4: Creación de componente Icon genérico
- **Título**: Implementar componente Icon reutilizable
- **Descripción**: Crear un componente Icon que pueda mostrar diferentes iconos según un parámetro
- **Archivos a crear**: src/components/ui/Icon.vue
- **Archivos de referencia**: Componentes existentes que usan iconos
- **Dependencias**: Subtarea 6.1
- **Beneficio esperado**: Sistema de iconos consistente y fácil de usar

#### Subtarea 6.5: Refactorización de VideoControls para usar componentes UI genéricos
- **Título**: Actualizar VideoControls con componentes UI genéricos
- **Descripción**: Refactorizar VideoControls para utilizar los nuevos componentes Button e Icon genéricos
- **Archivos a modificar**: VideoControls.vue
- **Archivos de referencia**: src/components/ui/Button.vue, src/components/ui/Icon.vue
- **Dependencias**: Subtareas 6.2, 6.4
- **Beneficio esperado**: Controles de video más mantenibles y consistentes con el resto de la UI

#### Subtarea 6.6: Generalización de VideoStream
- **Título**: Hacer VideoStream más genérico y configurable
- **Descripción**: Refactorizar VideoStream para que sea más configurable y pueda mostrar diferentes tipos de contenido de video
- **Archivos a modificar**: VideoStream.vue
- **Archivos de referencia**: Ninguno
- **Dependencias**: Subtarea 6.1
- **Beneficio esperado**: Componente de visualización de video más flexible y reutilizable

#### Subtarea 6.7: Implementación de renderless components para comportamientos complejos
- **Título**: Crear componentes sin renderizado para lógica reutilizable
- **Descripción**: Implementar componentes renderless para encapsular comportamientos complejos como drag-and-drop, gestión de formularios, etc.
- **Archivos a crear**: src/components/renderless/ (directorio)
- **Archivos de referencia**: Documentación de Vue sobre renderless components
- **Dependencias**: Subtarea 6.1
- **Beneficio esperado**: Reutilización de comportamientos complejos en diferentes componentes

#### Subtarea 6.8: Documentación de la biblioteca de componentes
- **Título**: Crear documentación para la biblioteca de componentes UI
- **Descripción**: Documentar cómo usar los componentes genéricos, incluyendo props, eventos y ejemplos
- **Archivos a crear**: docs/ui-components.md
- **Archivos de referencia**: src/components/ui/*.vue
- **Dependencias**: Subtareas 6.2 - 6.7
- **Beneficio esperado**: Facilitar la adopción y uso correcto de los componentes genéricos







































## 🔶 TAREA 7: Implementación de Sistema de Rutas (Vue Router)

### 📌 Título
Integración de Vue Router para navegación entre vistas

### 📝 Descripción
Incorporar Vue Router para permitir la navegación entre diferentes vistas de la aplicación, facilitando la escalabilidad y división de la aplicación en módulos funcionales.

### 🏗️ Archivos a modificar o crear
- package.json (agregar dependencia vue-router)
- src/router/index.js (nuevo)
- src/views/ (nuevo directorio para vistas)
- App.vue
- main.js

### 📂 Archivos de referencia
- HomePage.vue
- Documentación oficial de Vue Router

### 🔗 Dependencias
Esta tarea debería realizarse temprano en el proceso de refactorización, idealmente después de la Tarea 1.

### 🎯 Beneficio esperado
Capacidad para escalar la aplicación con múltiples vistas, mejor organización del código por funcionalidad, y navegación fluida sin recargas de página.

#### Subtarea 7.1: Instalación y configuración básica de Vue Router
- **Título**: Instalar Vue Router y configurar estructura básica
- **Descripción**: Agregar Vue Router como dependencia del proyecto y crear la estructura básica del router
- **Archivos a modificar**: package.json
- **Archivos a crear**: src/router/index.js
- **Archivos de referencia**: Documentación de Vue Router
- **Dependencias**: Ninguna
- **Beneficio esperado**: Infraestructura básica para la navegación entre vistas

#### Subtarea 7.2: Creación del directorio de vistas
- **Título**: Reorganizar componentes en vistas y componentes
- **Descripción**: Crear un directorio de vistas y mover los componentes de nivel superior (como HomePage) a este directorio
- **Archivos a crear**: src/views/HomePage.vue (o HomeView.vue)
- **Archivos a modificar**: Organización de archivos existentes
- **Archivos de referencia**: HomePage.vue
- **Dependencias**: Subtarea 7.1
- **Beneficio esperado**: Separación clara entre vistas principales y componentes reutilizables

#### Subtarea 7.3: Definición de rutas iniciales
- **Título**: Configurar rutas iniciales de la aplicación
- **Descripción**: Definir las rutas iniciales en el router, incluyendo la página principal y posibles nuevas páginas
- **Archivos a modificar**: src/router/index.js
- **Archivos de referencia**: src/views/
- **Dependencias**: Subtarea 7.2
- **Beneficio esperado**: Estructura de navegación básica de la aplicación

#### Subtarea 7.4: Integración del router en la aplicación
- **Título**: Conectar Vue Router con la aplicación
- **Descripción**: Modificar main.js para usar el router y actualizar App.vue para incluir RouterView
- **Archivos a modificar**: src/main.js, App.vue
- **Archivos de referencia**: src/router/index.js
- **Dependencias**: Subtarea 7.3
- **Beneficio esperado**: Router funcionando correctamente en la aplicación

#### Subtarea 7.5: Implementación de navegación
- **Título**: Crear componente de navegación con RouterLink
- **Descripción**: Desarrollar un componente de navegación que utilice RouterLink para la navegación entre vistas
- **Archivos a crear/modificar**: src/components/Navigation.vue
- **Archivos a modificar**: App.vue
- **Archivos de referencia**: src/router/index.js
- **Dependencias**: Subtarea 7.4
- **Beneficio esperado**: Interfaz de usuario para la navegación entre diferentes secciones

#### Subtarea 7.6: Configuración de rutas con parámetros
- **Título**: Implementar rutas con parámetros dinámicos
- **Descripción**: Configurar rutas que puedan aceptar parámetros para mostrar diferentes contenidos según el parámetro
- **Archivos a modificar**: src/router/index.js
- **Archivos a crear**: src/views/ (vistas adicionales que usan parámetros)
- **Archivos de referencia**: Documentación de Vue Router sobre rutas dinámicas
- **Dependencias**: Subtarea 7.4
- **Beneficio esperado**: Capacidad para mostrar contenido dinámico basado en la URL

#### Subtarea 7.7: Implementación de guardias de navegación
- **Título**: Configurar guardias de navegación para proteger rutas
- **Descripción**: Implementar guardias de navegación para controlar el acceso a ciertas rutas según el estado de la aplicación
- **Archivos a modificar**: src/router/index.js
- **Archivos de referencia**: Documentación de Vue Router sobre guardias
- **Dependencias**: Subtarea 7.4
- **Beneficio esperado**: Control de acceso a diferentes partes de la aplicación

#### Subtarea 7.8: Configuración de lazy loading para rutas
- **Título**: Implementar carga diferida de componentes de ruta
- **Descripción**: Configurar las rutas para usar lazy loading, mejorando el rendimiento inicial de la aplicación
- **Archivos a modificar**: src/router/index.js
- **Archivos de referencia**: Documentación de Vue Router sobre lazy loading
- **Dependencias**: Subtarea 7.4
- **Beneficio esperado**: Mejor rendimiento inicial al cargar solo las vistas necesarias







































## 🔶 TAREA 8: Reorganización del Proyecto por Dominios Funcionales

### 📌 Título
Reestructuración del proyecto siguiendo una arquitectura orientada a dominios

### 📝 Descripción
Reorganizar la estructura de archivos del proyecto para agrupar los recursos por dominio funcional en lugar de por tipo, mejorando la cohesión y facilitando la navegación y mantenimiento del código.

### 🏗️ Archivos a modificar o crear
- Toda la estructura de directorios del proyecto

### 📂 Archivos de referencia
- Estructura actual del proyecto
- Guías de mejores prácticas de Vue

### 🔗 Dependencias
Esta tarea debería realizarse después de tener una comprensión completa del sistema y preferiblemente después de implementar las mejoras arquitectónicas principales.

### 🎯 Beneficio esperado
Mejor organización del código, mayor facilidad para encontrar y modificar archivos relacionados, y mejor escalabilidad para el crecimiento futuro del proyecto.

#### Subtarea 8.1: Análisis de dominios funcionales
- **Título**: Identificar dominios funcionales de la aplicación
- **Descripción**: Analizar la aplicación para identificar los principales dominios funcionales (video, configuración, notificaciones, etc.)
- **Archivos a analizar**: Todo el proyecto
- **Archivos de referencia**: Ninguno
- **Dependencias**: Ninguna
- **Beneficio esperado**: Mapa claro de dominios funcionales para guiar la reorganización

#### Subtarea 8.2: Diseño de estructura de directorios por dominio
- **Título**: Crear plan detallado de nueva estructura de directorios
- **Descripción**: Diseñar una nueva estructura de directorios basada en dominios funcionales, documentando la ubicación prevista para cada archivo
- **Archivos a crear**: docs/project-structure.md
- **Archivos de referencia**: Resultado del análisis de la subtarea 8.1
- **Dependencias**: Subtarea 8.1
- **Beneficio esperado**: Plan claro para la reorganización física de archivos

#### Subtarea 8.3: Creación de estructura base de directorios
- **Título**: Implementar estructura base de directorios
- **Descripción**: Crear la estructura base de directorios según el plan, sin mover archivos aún
- **Archivos a crear**: Nuevos directorios según el plan
- **Archivos de referencia**: docs/project-structure.md
- **Dependencias**: Subtarea 8.2
- **Beneficio esperado**: Estructura física lista para la migración de archivos

#### Subtarea 8.4: Migración de dominio de video
- **Título**: Reorganizar archivos relacionados con el dominio de video
- **Descripción**: Mover componentes, composables, stores y servicios relacionados con la funcionalidad de video a su directorio de dominio
- **Archivos a mover**: Archivos relacionados con video
- **Archivos de referencia**: docs/project-structure.md
- **Dependencias**: Subtarea 8.3
- **Beneficio esperado**: Cohesión de archivos relacionados con el procesamiento de video

#### Subtarea 8.5: Migración de dominio de configuración
- **Título**: Reorganizar archivos relacionados con configuración
- **Descripción**: Mover componentes, composables, stores y servicios relacionados con la configuración a su directorio de dominio
- **Archivos a mover**: Archivos relacionados con configuración
- **Archivos de referencia**: docs/project-structure.md
- **Dependencias**: Subtarea 8.3
- **Beneficio esperado**: Cohesión de archivos relacionados con la configuración del sistema

#### Subtarea 8.6: Migración de dominio de notificaciones
- **Título**: Reorganizar archivos relacionados con notificaciones
- **Descripción**: Mover componentes, composables, stores y servicios relacionados con las notificaciones a su directorio de dominio
- **Archivos a mover**: Archivos relacionados con notificaciones
- **Archivos de referencia**: docs/project-structure.md
- **Dependencias**: Subtarea 8.3
- **Beneficio esperado**: Cohesión de archivos relacionados con el sistema de notificaciones

#### Subtarea 8.7: Creación de directorio shared para recursos compartidos
- **Título**: Implementar estructura para recursos compartidos
- **Descripción**: Crear un directorio shared para componentes, utilidades y otros recursos utilizados por múltiples dominios
- **Archivos a crear/mover**: src/shared/ y subdirectorios
- **Archivos de referencia**: docs/project-structure.md
- **Dependencias**: Subtarea 8.3
- **Beneficio esperado**: Organización clara de recursos compartidos entre dominios

#### Subtarea 8.8: Actualización de importaciones
- **Título**: Corregir todas las importaciones tras la reorganización
- **Descripción**: Actualizar todas las rutas de importación en el código para reflejar la nueva estructura de directorios
- **Archivos a modificar**: Todos los archivos con importaciones
- **Archivos de referencia**: docs/project-structure.md
- **Dependencias**: Subtareas 8.4 - 8.7
- **Beneficio esperado**: Proyecto funcional con la nueva estructura organizada por dominio