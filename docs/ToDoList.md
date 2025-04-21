## 📌 Tarea 2: Estandarizar el uso de Composition API

**📝 Descripción:** Actualmente, el proyecto mezcla Options API (en App.vue) y Composition API (en otros componentes), lo que genera inconsistencia en el estilo de código y dificulta el mantenimiento. Esta tarea busca estandarizar el uso de Composition API en todos los componentes para mejorar la coherencia, facilitar el mantenimiento y aprovechar las ventajas de la Composition API.

**🎯 Beneficio esperado:** 
- Coherencia en el estilo de código en toda la aplicación
- Facilita la comprensión y mantenimiento del código
- Permite aprovechar mejor las características de la Composition API
- Mejora la reutilización de lógica entre componentes

### Subtarea 2.1: Migrar App.vue a Composition API con script setup

**📌 Título:** Migrar App.vue a Composition API con script setup

**📝 Descripción:** Convertir el componente App.vue que actualmente usa Options API a Composition API con sintaxis `<script setup>`, manteniendo la misma funcionalidad pero aprovechando las ventajas de la nueva sintaxis.

**🏗️ Archivos a modificar:**
- App.vue

**📂 Archivos de referencia:**
- HomePage.vue (como ejemplo de componente con script setup)

**🔗 Dependencias:**
- Ninguna, puede realizarse independientemente de otras tareas

**🎯 Beneficio esperado:** 
- Código más conciso y declarativo
- Consistencia con el resto de componentes
- Facilita futuras refactorizaciones

### Subtarea 2.2: Verificar importaciones automáticas en todos los componentes

**📌 Título:** Verificar y estandarizar importaciones en componentes

**📝 Descripción:** Revisar todos los componentes para asegurar que utilizan correctamente las importaciones automáticas de la Composition API y que no hay mezcla de estilos o imports redundantes. Esto incluye asegurar que todos los componentes utilizan los comentarios globales apropiados para definir props y emits.

**🏗️ Archivos a modificar:**
- VideoStream.vue
- VideoControls.vue
- HomePage.vue

**📂 Archivos de referencia:**
- Documentación oficial de Vue 3 sobre script setup

**🔗 Dependencias:**
- Subtarea 2.1 (Migración de App.vue)

**🎯 Beneficio esperado:** 
- Coherencia en el estilo de código
- Elimina código redundante
- Mejora la legibilidad del código

































## 📌 Tarea 3: Implementar gestión adecuada de configuración

**📝 Descripción:** Actualmente, la aplicación presenta inconsistencias en cómo se accede a la configuración. Existe un configStore.js pero no se utiliza consistentemente, y hay valores hardcodeados en componentes como VideoStream.vue. Esta tarea busca centralizar toda la configuración en el configStore y asegurar que todos los componentes accedan a ella a través de este store.

**🎯 Beneficio esperado:** 
- Centralización de la configuración
- Eliminación de valores hardcodeados
- Mayor facilidad para cambiar la configuración en un único lugar
- Facilita pruebas y entornos de desarrollo/producción

### Subtarea 3.1: Centralizar URLs de API en configStore

**📌 Título:** Centralizar configuración de URLs en configStore

**📝 Descripción:** Asegurar que todas las URLs de API se definan en el configStore y se eliminen valores hardcodeados de componentes y servicios. Esto incluye revisar cómo se construyen las URLs en VideoStream.vue y videoService.js.

**🏗️ Archivos a modificar:**
- configStore.js
- videoService.js
- VideoStream.vue

**📂 Archivos de referencia:**
- .env (para configuraciones de entorno)
- http.js (para ver cómo se maneja actualmente la base URL)

**🔗 Dependencias:**
- Ninguna, puede realizarse independientemente

**🎯 Beneficio esperado:** 
- Eliminación de valores hardcodeados
- Centralización de configuración
- Mayor facilidad para cambiar entornos

### Subtarea 3.2: Estandarizar acceso a configuración en servicios

**📌 Título:** Estandarizar acceso a configuración desde servicios

**📝 Descripción:** Revisar todos los servicios para asegurar que obtienen su configuración del configStore en lugar de importar directamente variables de entorno o usar configuraciones hardcodeadas. Esto incluye actualizar videoService.js y http.js para que utilicen el configStore.

**🏗️ Archivos a modificar:**
- videoService.js
- http.js
- configService.js (evaluar si sigue siendo necesario)

**📂 Archivos de referencia:**
- configStore.js

**🔗 Dependencias:**
- Subtarea 3.1 (Centralización de URLs)

**🎯 Beneficio esperado:** 
- Coherencia en cómo se accede a la configuración
- Eliminación de posibles duplicidades
- Mayor facilidad para pruebas al permitir mockear la configuración

### Subtarea 3.3: Evaluar y posiblemente eliminar configService redundante

**📌 Título:** Evaluar redundancia entre configStore y configService

**📝 Descripción:** Analizar si configService.js es necesario dado que existe configStore.js. Si se determina que hay duplicación de responsabilidades, se debe migrar toda la funcionalidad al configStore y eliminar o refactorizar el configService.

**🏗️ Archivos a modificar o eliminar:**
- configService.js
- configStore.js (si se agregan funcionalidades)

**📂 Archivos de referencia:**
- Todos los archivos que importan configService

**🔗 Dependencias:**
- Subtareas 3.1 y 3.2

**🎯 Beneficio esperado:** 
- Eliminación de duplicidad de código
- Mayor claridad sobre dónde debe gestionarse la configuración
- Simplificación de la arquitectura






































## 📌 Tarea 4: Implementar uso consistente de composables

**📝 Descripción:** El proyecto tiene definidos varios composables (`useVideoState.js`, useVideoStream.js, useErrorHandling.js) pero no se utilizan de manera consistente en los componentes. Esta tarea busca implementar el uso efectivo de estos composables para extraer y reutilizar lógica común, mejorando la separación de responsabilidades.

**🎯 Beneficio esperado:** 
- Mayor reutilización de código
- Mejor separación de responsabilidades
- Reducción de código en componentes
- Mayor facilidad para pruebas unitarias
- Componentes más enfocados en la presentación

### Subtarea 4.1: Implementar useVideoState en HomePage

**📌 Título:** Integrar useVideoState en HomePage

**📝 Descripción:** Implementar el composable useVideoState en HomePage.vue para gestionar el estado de los streams de video a través del store. Esto implica revisar y adaptar el composable actual para que utilice el videoStore en lugar de gestionar su propio estado.

**🏗️ Archivos a modificar:**
- useVideoState.js
- HomePage.vue

**📂 Archivos de referencia:**
- videoStore.js

**🔗 Dependencias:**
- Tarea 1 (Eliminar duplicidad de estado)

**🎯 Beneficio esperado:** 
- Extracción de lógica de gestión de estado del componente
- Mayor reutilización de código
- Componente más enfocado en la presentación

### Subtarea 4.2: Implementar useErrorHandling para gestión de errores

**📌 Título:** Integrar useErrorHandling con notificationStore

**📝 Descripción:** Adaptar el composable useErrorHandling para que utilice el notificationStore para mostrar errores al usuario. Actualmente, los errores se manejan de forma inconsistente y el composable no se utiliza en los componentes.

**🏗️ Archivos a modificar:**
- useErrorHandling.js
- HomePage.vue (para implementar el composable)
- notificationStore.js (posiblemente para agregar métodos específicos)

**📂 Archivos de referencia:**
- errorHandler.js

**🔗 Dependencias:**
- Tarea 1 (para el manejo de errores)

**🎯 Beneficio esperado:** 
- Gestión coherente de errores en toda la aplicación
- Mejor experiencia de usuario al mostrar errores
- Separación de lógica de errores de los componentes

### Subtarea 4.3: Implementar useVideoStream para manejo del stream

**📌 Título:** Implementar useVideoStream en componentes de video

**📝 Descripción:** Adaptar e implementar el composable useVideoStream en los componentes que manipulan streams de video para encapsular la lógica relacionada con el manejo del stream, como iniciar, detener y manejar errores.

**🏗️ Archivos a modificar:**
- useVideoStream.js
- VideoStream.vue

**📂 Archivos de referencia:**
- videoService.js

**🔗 Dependencias:**
- Subtarea 4.1 y 4.2 (para integración con estado y errores)

**🎯 Beneficio esperado:** 
- Encapsulación de lógica específica de streams
- Componentes más ligeros y enfocados en presentación
- Mayor facilidad para pruebas unitarias































