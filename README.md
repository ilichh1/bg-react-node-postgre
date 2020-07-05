# Objetivo
Este proyecto tiene como finalidad poder montar un pequeño CRUD (intentando seguir los lineamientos de una REST API) de un objeto cualquiera para poder jugar con distitnas tecnologías, dichas tecnologías son:
* React.js (Para un simple frontned)
* Node.js (Como un simple backend)
* PostgreSQL (Como una simple BD)
* Docker (Para hechar a andar todo en contenedores y poder replicarlo en una instancia remota)

# Problematica
Gonzalo es una persona muy atareada y responsable, él siempre quiere cumplir con todas sus obgligaciones, compromisos y responsabilidades.  
Desafortunadamente Gonzalo no tiene buena memoria, es por eso que necesita una Single Page Application (SPA - React.js) para poder llevar un registro de sus pendientes (TODOs).  
Gonzalo quiere que sus pendientes (TODOs) se almacenen en una base de datos segura, robusta y eficiente (PostgreSQL), quiere que sus datos se procesen (en el backend) de una forma escalable y que pueda modificar su logica de negocios en algún futuro de forma sencilla (Node.js).     
Gonzalo espera que la arquitectura de su proyecto también sea escalable y fácil de replicar, por si algún día su proveedor de servicios en la nube (CloudCone) ya no puede cubrir sus necesidades y necesita más almacenamiento, más memoria, mas poder de computación... o si sencillamente desea pagar más.

## Versiones
* React 16.13.1 (w/ create-react-app)
* Node.js 12.18.2 (Docker image: node:12.18.2-alpine3.12)
* PostgreSQL 12.3 (Docker image: postgres:12.3-alpine)

### Mantainers
* Ilich Arredondo
* Bryan Góngora