# Backend de la prueba técnica para la vacante Desarrollador Semi-Senior en Cymetria

## Cómo usar la api
1. Clona el repositorio en tu máquina local utilizando el siguiente comando:
  ```
  git clone https://github.com/dieramirezma/cymetria-backend.git
  ```

2. Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo desde el sitio web oficial de Node.js.

3. Asegúrate de tener instalado MySQL en tu sistema. Puedes descargarlo desde el sitio web oficial de MySQL.

4. Abre una terminal y navega hasta la carpeta del repositorio clonado.

5. Ejecuta el siguiente comando para instalar las dependencias del proyecto:
  ```
  npm install
  ```

6. Crea un archivo de configuración `.env` en la raíz del proyecto y configura las variables de entorno necesarias, como las credenciales de la base de datos u otras configuraciones específicas. El siguiente es un ejemplo:

```
 DB_HOST=localhost
 DB_USER=root
 DB_PASS=tupassword
 DB_NAME=tudb
 DB_PORT=3306
 SECRET_KEY_JWT=X
 SALT_ROUNDS=X
 PORT_BACK=3000
```
7. Una vez que hayas configurado todas las variables de entorno necesarias, puedes ejecutar el proyecto utilizando el siguiente comando:
  ```
  npm start
  ```

7. El proyecto se ejecutará y podrás acceder a él a través de tu navegador web en la dirección `http://localhost:3000/api` (o la dirección especificada en la configuración de puerto que hayas establecido en `env`).

Aquí tendras acceso a los endpoints:
```
  POST: http://localhost:3000/api/user/register - requiere los campos name, email y password
  
  POST: http://localhost:3000/api/user/login - requiere los campos  email y password

  GET: http://localhost:3000/api/user/students - requiere como parametro de la url document
```