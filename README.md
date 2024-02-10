# PoC Ecs Fargate + Service Connect 

Este repositorio contiene el código fuente de la app de backend para la creación y configuración de la aplicación en ECS Fargate, así como la pipeline de GitHub Actions para automatizar el proceso de despliegue.

## Estructura del Repositorio

- **server.js:** Código del back en node que levantará un server web para recibir las peticiones
- **.github/workflows:** Aquí se encuentra la pipeline necesaria para construir nuestra imagen y subirla al ECR deseado (Recuerda modificar el valor corresposdiente en la pipeline)
- **Dockerfile:** Dockerfile para construir nuestra imagen de docker

## Código Backend

**Nota:** El código del back de la aplicación no está incluido en este repositorio. Lo podréis encontrar en el siguiente repositorio:
- [Frontend] (https://github.com/ragerdevops/ecs-front-dummy)

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [GIT] (https://git-scm.com/)

## Despliegue de la Aplicación

1. **Configuración de las Credenciales en GitHub:**
   - Configura las [GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) con las credenciales de AWS necesarias para la pipeline. En este caso deberás de configurarlas en tu repositorio.

## Importante: Entorno de Prueba (PoC)

Este repositorio está destinado para propósitos de prueba y es un entorno de prueba de concepto (PoC). No se recomienda utilizar este entorno para aplicaciones de producción. Asegúrate de comprender las limitaciones y configuraciones específicas para PoC antes de implementar en entornos de producción.

## Contribuciones

¡Contribuciones son bienvenidas! Si encuentras algún problema o deseas mejorar este proyecto, siéntete libre de abrir un problema o enviar un pull request.

## Licencia

Este proyecto está bajo la licencia [Apache2.0](LICENSE).
