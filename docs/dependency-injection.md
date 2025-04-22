# Sistema de Inyección de Dependencias

## Introducción

Este documento describe el sistema de inyección de dependencias implementado en el proyecto de Visión Artificial. Este sistema permite desacoplar los servicios entre sí y de los componentes que los utilizan, mejorando la testabilidad, mantenibilidad y flexibilidad del código.

## Estructura General

El sistema de inyección de dependencias se basa en tres componentes principales:

1. **Interfaces**: Definen los contratos que deben cumplir las implementaciones.
2. **Implementaciones**: Proporcionan la funcionalidad real de los servicios.
3. **Factory**: Centraliza la creación y gestión de las dependencias.

## Interfaces Disponibles

Las interfaces se encuentran en la carpeta `src/services/interfaces/`:

- `IHttpService`: Define métodos para realizar peticiones HTTP.
- `IVideoService`: Define métodos para gestionar streams de video.
- `IErrorHandler`: Define métodos para el manejo centralizado de errores.

## Cómo Usar el Service Factory

### Obtener un Servicio

```javascript
import serviceFactory from '@/services/serviceFactory';

// Obtener el servicio HTTP
const httpService = serviceFactory.getHttpService();

// Obtener el servicio de video
const videoService = serviceFactory.getVideoService();

// Obtener el manejador de errores
const errorHandler = serviceFactory.getErrorHandler();
```

### Uso en Composables

```javascript
export function useMyFeature() {
  // Obtenemos los servicios que necesitamos
  const videoService = serviceFactory.getVideoService();
  
  function doSomething() {
    const url = videoService.getVideoStreamUrl('original');
    // ...resto del código
  }
  
  return { doSomething };
}
```

### Uso en Componentes

Se recomienda no utilizar directamente los servicios en componentes, sino a través de composables o stores.

```javascript
// ❌ No recomendado en componentes
import serviceFactory from '@/services/serviceFactory';

// ✅ Mejor usar un composable
import { useMyFeature } from '@/composables/useMyFeature';
```

## Cómo Usar los Mocks para Pruebas

Para pruebas unitarias, puedes utilizar los mocks proporcionados en `src/services/mocks/`:

```javascript
import { createHttpServiceMock } from '@/services/mocks/httpServiceMock';
import { createVideoServiceMock } from '@/services/mocks/videoServiceMock';
import serviceFactory from '@/services/serviceFactory';

// Configurar mock para HTTP
const httpMock = createHttpServiceMock({
  '/api/example': { data: 'mocked data' }
});

// Configurar mock para video
const videoMock = createVideoServiceMock({
  originalUrl: 'mock-original-url',
  processedUrl: 'mock-processed-url'
});

// Establecer los mocks en el factory
serviceFactory.setMocks({
  httpService: httpMock,
  videoService: videoMock
});

// Después de las pruebas, restablecer los servicios reales
afterAll(() => {
  serviceFactory.resetServices();
});
```

## Añadir Nuevos Servicios

Para añadir un nuevo servicio al sistema:

1. Crea una interfaz en `src/services/interfaces/`.
2. Implementa el servicio basado en la interfaz.
3. Añade métodos getter y setter al `serviceFactory`.
4. Opcionalmente, crea un mock para pruebas.

## Beneficios del Sistema

- **Desacoplamiento**: Los servicios no dependen directamente unos de otros.
- **Testabilidad**: Facilita la creación de mocks para pruebas.
- **Mantenibilidad**: Centraliza la gestión de dependencias.
- **Flexibilidad**: Permite cambiar implementaciones sin afectar el resto del código.