# Proyecto de Microservicios: Login, Autenticación y CRUD de Camisas - Grupo 3

## Descripción del Proyecto

Este proyecto implementa una arquitectura basada en microservicios para gestionar la autenticación de usuarios y un CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de camisas. El proyecto consta de dos microservicios principales:

- **Servicio de Autenticación y Login**: Maneja el registro y la autenticación de usuarios, generando tokens JWT para las sesiones.
- **Servicio CRUD de Camisas**: Gestiona las operaciones CRUD para las camisas, validando todas las solicitudes utilizando los tokens JWT generados por el servicio de autenticación.

Ambos microservicios están diseñados para funcionar de manera independiente, pero se comunican entre sí a través de HTTP y JSON Web Tokens (JWT) para asegurar la autenticación y autorización de los usuarios.

## Instrucciones para Ejecutar el Proyecto

### Requisitos Previos

- **Docker** y **Docker Compose** instalados en tu sistema.
- **Node.js (versión 14 o superior)** instalado en tu sistema.
- **NestJS CLI** instalado globalmente para el desarrollo local (opcional).
### Pasos para Ejecutar el Proyecto
1. **Clonar el Repositorio**
 ```bash
git clone https://github.com/esmora2/G3_2Microservicios.git
```
 ```bash
 cd G3_2Microservicios
 ```
2. **Construir y Ejecutar los Contenedores**

En la raíz del proyecto (donde está ubicado el archivo docker-compose.yml), ejecuta:
 ```bash
docker-compose up --build
```
Este comando descargará las imágenes necesarias, construirá los microservicios, y levantará los contenedores para MySQL y ambos microservicios.

3. **Acceder a los Microservicios**
#### Autenticación y Login
- http://localhost:3001/api/v1/auth/register
- http://localhost:3001/api/v1/auth/login
#### CRUD de Camisas
- http://localhost:3000/api/v1/camisas

### Peticiones HTTP Disponibles
#### Servicio de Autenticación y Login (MICROSERVICIO_1)
- **POST /register:** Registro de nuevos usuarios.
 ```
{
  "name": "usuario",
  "email": "usuario@example.com",
  "password": "contraseña"
}
```
- **POST /login:** Autenticación de usuarios.
 ```
{
  "email": "usuario@example.com",
  "password": "contraseña"
}
```
#### Servicio CRUD de Camisas (MICROSERVICIO_2)
- **POST /camisas** Crear una nueva camisa (requiere token JWT).
 ```
{
  "idCliente": "Token",
  "color": "Rojo",
  "talla": "M",
  "precio": "25.99",
  "ImagenEstampado": "https://example.com/images/estampado1.png"
}
```
- **GET /camisas** Obtener la lista de camisas

- **PUT /camisas/#id** Actualizar una camisa existente

- **DELETE /camisas/#id** Eliminar una camisa 

## Para Detener el Proyecto
Para detener los contenedores y liberar los recursos, ejecuta:
 ```bash
docker-compose down
```
## Dependencias Necesarias
El proyecto requiere las siguientes dependencias, que serán instaladas automáticamente al construir los contenedores:

### Servicio de Autenticación y Login (MICROSERVICIO_1)

- **jsonwebtoken:** Librería para manejar tokens JWT.
- **typeorm:** ORM para la base de datos.
- **mysql2:** Conector para MySQL.
- **class-validator:** Para la validación de datos.

### Servicio CRUD de Camisas (MICROSERVICIO_2)

- **typeorm:** ORM para la base de datos.
- **mysql2:** Conector para MySQL.
- **class-validator:** Para la validación de datos.
- **jsonwebtoken:** Para validar tokens JWT en las solicitudes.

## Herramientas Adicionales
- **Docker:** Para la creación y gestión de contenedores.
- **Docker Compose:** Para la orquestación de múltiples contenedores.


> [!NOTE]
> Este `README.md` proporciona toda la información necesaria para entender, ejecutar y contribuir al proyecto, con un enfoque particular en cómo interactuar con los microservicios mediante las peticiones HTTP. 