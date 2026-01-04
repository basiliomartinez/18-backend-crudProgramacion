# 💻 Backend - CRUD de Servicios de Programación
Un servicio backend robusto para gestionar servicios de programación, construido con tecnologías modernas y escalables.

# 🚀 Tecnologías Utilizadas

- Node.js - Entorno de ejecución de JavaScript
- Express - Framework web minimalista
- MongoDB - Base de datos NoSQL
- Mongoose - ODM para MongoDB

# 🔧 Middlewares Implementados
- Morgan - Logging de peticiones HTTP
- CORS - Permite peticiones desde otros dominios
- Express.json() - Parseo de JSON en el body
- Manejo de errores - Middleware para errores personalizados

# 📋 Prerrequisitos

- Node.js (v14 o superior)
- MongoDB (local o Atlas)
- npm o yarn


## ⚙️ Instalación

1. Clonar el repositorio
``` 
git clone https://github.com/basiliomartinez/18-backend-crudProgramacion
cd backend-crudProgramacion
```
2. Instalar dependencias
```
npm install
```
3. Variables de entorno necesarias

usa la estructura del archivo .env.example y reemplazalo con tus valores

```nodejs
PORT=3000
MONGODB=mongodb://localhost:27017/servicios-programacion
```

# 🚀 Ejectutar el proyecto

- comando para probar el proyecto en producción
```
npm start
```

- Comando para probar el proyecto en desarrollo
```
npm run dev
```

# 📡 Endpoints de la API

## Servicios

URL: /api/servicios

### Listar servicios
Listar todos los servicios del proyecto

- URL: http://localhost:3000/api/servicios
- method: GET

Respuesta:

    - 200: Ok
    - 500: Error interno del servidor
    
### Crear servicio
Podemos crear un servicio enviando una solicitud del siguiente tipo:

- URL: http://localhost:3000/api/servicios
- method: POST
- headers: Content-Type: application/json
- body:
```json
{
    "servicio": "Mantenimiento de sitio web",
    "precio": "50",
    "imagen": "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg",
    "categoria": "Desarrollo Web",
    "descripcion_breve": "Web profesional *responsive* con secciones clave: Inicio, Servicios, Quiénes Somos, Contacto y Blog (sin funcionalidad de publicación).",
    "descripcion_amplia": "Desarrollo de un sitio web corporativo **moderno y optimizado para SEO**. Incluye diseño personalizado basado en plantillas, integración de formulario de contacto, galería de imágenes, y hasta 7 páginas principales. Ideal para empresas que necesitan una fuerte presencia digital."
}
```

Respuesta:

    - 201: Creado
    - 400: Bad request
    - 500: Error interno del servidor

### Editar servicio
Podemos editar todos los datos de un servicio enviando una solicitud del siguiente tipo:

- URL: ```http://localhost:3000/api/servicios/{servicio_id}```
- method: PUT
- headers: Content-Type: application/json
- body:
```json
{
    "servicio": "Mantenimiento de sitio web",
    "precio": "50",
    "imagen": "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg",
    "categoria": "Desarrollo Web",
    "descripcion_breve": "Web profesional *responsive* con secciones clave: Inicio, Servicios, Quiénes Somos, Contacto y Blog (sin funcionalidad de publicación).",
    "descripcion_amplia": "Desarrollo de un sitio web corporativo **moderno y optimizado para SEO**. Incluye diseño personalizado basado en plantillas, integración de formulario de contacto, galería de imágenes, y hasta 7 páginas principales. Ideal para empresas que necesitan una fuerte presencia digital."
}
```

Respuesta:

    - 200: OK
    - 400: Bad request
    - 404: Servicio no encontrado
    - 500: Error interno del servidor

### Borrar un servicio
Podemos borrar un servicio mediante su id:

- URL: ```http://localhost:3000/api/servicios/{servicio_id}```
- method: DELETE

Respuesta:

    - 200: OK
    - 400: Bad request
    - 404: Servicio no encontrado
    - 500: Error interno del servidor

## Usuarios
proximamente 

# 👨‍💻 Autor

- Basilio Martinez

