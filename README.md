# HelpDesk SaaS - Frontend MVP

Plataforma de gestión de incidencias (Tickets) e inventario de hardware (Equipos) diseñada como una Single Page Application (SPA). Este proyecto representa el cliente frontend para consumir una API RESTful construida en Django.

## 🚀 Arquitectura y Tecnologías

El proyecto fue inicializado con **Vite** para optimizar los tiempos de construcción y desarrollo.

* **Core:** React 18, JavaScript (ES6+).
* **Enrutamiento:** React Router DOM v6 (Implementación de Layouts anidados y rutas protegidas).
* **Estilos:** Tailwind CSS (Diseño utility-first, interfaces responsivas y modo oscuro por defecto).
* **Cliente HTTP:** Axios (Configurado con interceptores globales).
* **Iconografía:** Material Symbols Outlined.

## 🧠 Patrones de Diseño Implementados

1. **Optimistic UI / Actualización Local:** Las acciones destructivas (Soft Delete de equipos) y de creación (Nuevos comentarios) se reflejan instantáneamente en la memoria de React, evitando recargas innecesarias (`GET`) contra el servidor y mejorando drásticamente la UX.
2. **Elevación de Estado (Lifting State Up):** Gestión centralizada del estado del menú lateral móvil (Sidebar) en el `MainLayout` para evitar colisiones entre componentes hermanos.
3. **Interceptores de Axios:** Inyección automática del token JWT (`Bearer`) en las cabeceras de todas las peticiones salientes, garantizando que ninguna ruta autenticada falle por omisión manual.
4. **UI Defensiva:** Prevención de Condiciones de Carrera (Race Conditions) mediante el bloqueo de botones de envío (Login, Creación de Tickets) y renderizado de estados de carga (`spinners`) mientras las promesas están en vuelo.

## 🛠️ Instalación y Configuración Local

### Prerrequisitos
* Node.js (v18+ recomendado)
* Backend de Django corriendo localmente o en la nube.

### Pasos
1. Clonar el repositorio.
2. Instalar las dependencias: `npm install`
3. Crear un archivo `.env` en la raíz del proyecto (al mismo nivel que `package.json`). Este archivo **no** debe subirse al control de versiones.
4. Definir las variables de entorno obligatorias:
    
    VITE_API_URL=http://localhost:8000/api

5. Levantar el servidor de desarrollo: `npm run dev`

## 📦 Despliegue en Producción (Vercel)

Este proyecto está configurado para desplegarse sin fricción en Vercel. 
**Nota Crítica:** Dado que React Router maneja el enrutamiento en el lado del cliente (Client-Side Routing), se incluyó un archivo `vercel.json` en la raíz para redirigir todo el tráfico entrante a `index.html`. Sin esto, la aplicación devolverá un Error 404 al recargar cualquier sub-ruta.

Las variables de entorno (`VITE_API_URL`) deben configurarse manualmente en el panel de Vercel apuntando a la URL del backend en producción.
