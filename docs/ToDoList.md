## 📋 Listado Detallado de Tareas y Subtareas

---

### **Tarea 1: Limpieza de Interfaces y Eliminación de Parámetros No Usados**

#### 📝 Descripción
Eliminar parámetros y contratos no utilizados en las interfaces y servicios, especialmente aquellos que generan advertencias de ESLint (`dependencies`), para mejorar la claridad y evitar confusión en la arquitectura.

#### 🏗️ Archivos a modificar o crear
- IErrorHandler.js
- IHttpService.js
- IVideoService.js
- errorHandler.js
- http.js
- videoService.js
- serviceFactory.js
- mocks
- useErrorHandling.js
- useVideoMediator.js
- useVideoState.js

#### 📂 Archivos de referencia
- Implementaciones de servicios en services
- Factories y mocks en services
- Composables relacionados en composables

#### 🔗 Dependencias
- Ninguna directa, pero puede afectar a cualquier componente o módulo que consuma estos servicios.

#### 🎯 Beneficio esperado
- Código más limpio y mantenible, reducción de errores de lint, mayor claridad en los contratos de servicios.

##### **Subtareas**
1. **Revisión y actualización de interfaces**
   - Eliminar parámetros no utilizados en las definiciones de interfaces.
   - Archivos: IErrorHandler.js, IHttpService.js, IVideoService.js
   - Beneficio: Contratos claros y precisos.

2. **Actualización de implementaciones de servicios**
   - Ajustar las firmas de las funciones de creación de servicios para reflejar los cambios en las interfaces.
   - Archivos: errorHandler.js, http.js, videoService.js
   - Beneficio: Coherencia entre interfaces y sus implementaciones.

3. **Revisión y ajuste del factory de servicios**
   - Asegurarse de que el factory no pase dependencias innecesarias.
   - Archivos: serviceFactory.js
   - Beneficio: Simplificación de la creación de servicios.

4. **Actualización de mocks de servicios**
   - Revisar y ajustar los mocks para que no dependan de contratos obsoletos.
   - Archivos: `mocks/`
   - Beneficio: Mocks alineados con la arquitectura real.

5. **Revisión de composables relacionados**
   - Verificar que los composables no dependan de contratos eliminados o modificados.
   - Archivos: `useErrorHandling.js`, useVideoMediator.js, `useVideoState.js`
   - Beneficio: Evitar errores de integración y mantener la cohesión.

---

### **Tarea 2: Refuerzo de la Separación Presentacional/Contenedor**

#### 📝 Descripción
Asegurar que los componentes presentacionales no contengan lógica de negocio y que toda la lógica esté en contenedores o composables, siguiendo el patrón Presentational/Container.

#### 🏗️ Archivos a modificar o crear
- components
- containers
- composables

#### 📂 Archivos de referencia
- Componentes y contenedores existentes.
- Composables reutilizados.

#### 🔗 Dependencias
- Depende de la limpieza de interfaces para evitar referencias a contratos obsoletos.

#### 🎯 Beneficio esperado
- Mejor mantenibilidad, testabilidad y reutilización de componentes.

##### **Subtareas**
1. **Auditoría de componentes presentacionales**
   - Revisar que no contengan lógica de negocio.
   - Archivos: `components/`, especialmente `presentational/`
   - Beneficio: Componentes más simples y reutilizables.

2. **Auditoría de contenedores**
   - Verificar que la lógica de negocio esté centralizada en los contenedores.
   - Archivos: `containers/`
   - Beneficio: Separación clara de responsabilidades.

3. **Revisión de composables utilizados**
   - Asegurar que la lógica compartida esté en composables y no duplicada en componentes.
   - Archivos: `composables/`
   - Beneficio: Reutilización y reducción de duplicidad.

4. **Refactorización incremental**
   - Mover lógica de negocio de componentes presentacionales a contenedores o composables.
   - Archivos: Según auditoría.
   - Beneficio: Arquitectura más limpia y escalable.
