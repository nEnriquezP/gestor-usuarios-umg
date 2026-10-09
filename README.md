# Gestor de Usuarios UMG

## Datos del estudiante

**Estudiante:** Nelson Fernando Enríquez Portillo
**Carrera:** Ingeniería en Sistemas de Información y Ciencias de la Computación 
**Universidad:** Universidad Mariano Gálvez de Guatemala  
**Ciclo:** VIII
**Curso:** Desarrollo Web  
**CAT:** Ing. Elder Amilcar Herrera

---

## Descripción

Gestor de Usuarios UMG es una aplicación web desarrollada con Vue 3
como práctica integradora del curso de Desarrollo Web.

El proyecto permite consultar usuarios obtenidos desde una API REST,
mostrar la información mediante componentes reutilizables y navegar
hacia una vista de detalle de cada usuario.

La aplicación integra componentes, props, eventos, Vue Router, Pinia,
fetch y manejo de información JSON.

Se utilizó Git y GitHub para registrar el desarrollo de esta tarea mediante
commits realizados durante las diferentes etapas de construcción.
La URL del repositorio es: https://github.com/nEnriquezP/gestor-usuarios-umg
(lo dejaré como público para que pueda evaluarlo)
---

## Tecnologías utilizadas

- Vue 3
- Vite
- JavaScript
- Vue Router
- Pinia
- REST API
- Fetch API
- JSON
- HTML
- CSS
- Git
- GitHub

---

## API utilizada

El proyecto utiliza la API pública JSONPlaceholder:

```text
https://jsonplaceholder.typicode.com/users
```

Esta API proporciona información de usuarios en formato JSON.

---

## Arquitectura

El flujo principal de la aplicación es:

```text
App.vue
   ↓
Vue Router
   ↓
UsuariosView
   ↓
usuariosStore (Pinia)
   ↓
fetch()
   ↓
REST API
   ↓
JSON
   ↓
UsuarioCard
```

Al seleccionar un usuario:

```text
UsuarioCard
   ↓
Evento personalizado
   ↓
UsuariosView
   ↓
Vue Router
   ↓
/usuarios/:id
   ↓
UsuarioDetalleView
```

---

## Estructura principal

```text
src/
├── assets/
│   └── main.css
├── components/
│   └── UsuarioCard.vue
├── router/
│   └── index.js
├── stores/
│   └── usuarios.js
├── views/
│   ├── HomeView.vue
│   ├── UsuariosView.vue
│   ├── UsuarioDetalleView.vue
│   └── AboutView.vue
├── App.vue
└── main.js
```

---

## Funcionalidades

La aplicación permite:

- Navegar entre diferentes vistas mediante Vue Router.
- Consultar usuarios desde una API REST.
- Administrar usuarios mediante un store de Pinia.
- Mostrar estados de carga y errores.
- Crear tarjetas reutilizables mediante componentes.
- Enviar información del padre al hijo mediante Props.
- Enviar información del hijo al padre mediante eventos.
- Mostrar el detalle de un usuario mediante una ruta dinámica.
- Manejar parámetros mediante `/usuarios/:id`.

---

## Rutas disponibles

| Ruta | Descripción |
|---|---|
| `/` | Página principal |
| `/usuarios` | Lista de usuarios |
| `/usuarios/:id` | Detalle de un usuario |
| `/about` | Información acerca del proyecto |

---

## Requisitos

Para ejecutar el proyecto es necesario tener instalado:

- Node.js
- npm

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/nEnriquezP/gestor-usuarios-umg
```

Entrar a la carpeta:

```bash
cd gestor-usuarios-umg
```

Instalar las dependencias:

```bash
npm install
```

---

## Ejecutar en desarrollo

```bash
npm run dev
```

Vite mostrará una dirección similar a:

```text
http://localhost:5173/
```

Abrir esa dirección desde un navegador.

---

## Verificación del código

Ejecutar el linter:

```bash
npm run lint
```

Formatear el proyecto:

```bash
npm run format
```

Crear la versión de producción:

```bash
npm run build
```

---

## Conceptos aplicados

### Componentes

`UsuarioCard.vue` funciona como componente reutilizable para representar
a cada usuario.

### Props

`UsuariosView.vue` envía información hacia `UsuarioCard.vue`.

### Eventos

`UsuarioCard.vue` emite el evento `ver-usuario` al presionar el botón
"Ver usuario".

### Vue Router

Permite navegar entre las vistas y utilizar la ruta dinámica:

```text
/usuarios/:id
```

### Pinia

`usuarios.js` administra globalmente los usuarios, el estado de carga y
los errores.

### REST API y JSON

La aplicación utiliza `fetch()` para obtener usuarios desde
JSONPlaceholder y convertir la respuesta mediante `response.json()`.

---

## Control de versiones

El proyecto utiliza Git y GitHub para registrar el desarrollo mediante
commits realizados durante las diferentes etapas de construcción.