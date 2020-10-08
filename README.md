# informes_app
App informes automáticos

# Descripción
Este aplicación es dependiente de nuestras APIs. Mediante JWT (auth02), tiene la inteligencia de manejar usuarios (tusuarios en database) y almacena su token en la store de redux.
En la etapa V1 de este proyecto se consultan los datos según un dominio y luego aplicar la lógica necesaria para mostrar la información en el infome de una manera adecuada para el cliente.

# Tecnologías
- JS
- Reactjs con components (no hooks), Redux (store, actions, etc.), Middlewares como Thunk
- Babel 
- Jsx
- HTML + CSS

# Configuración entorno
Cabe destacar que como soy el único desarrollador la configuración nunca fue probada, pero no debería ser muy complicado iniciar el proyecto ya que es bastante pequeño.
Debemos tener instalado npm (entiendo que con yarn podría funcionar de la misma manera).

- clonar el proyecto
- npm start
- en este punto no debería haber mayor inconveniente con los paquetes. Si llega a faltar la instalación de los mismo, ejecutarla por npm hasta que no tire ningún missing


# Links
EL proyecto se puede ver funcionando en: https://master.d2siwdxrnf37sh.amplifyapp.com/login
La lógica del informe se puede ver en el siguiente link: https://docs.google.com/spreadsheets/d/1CI9zBXVMJxsDazImpTXFsLWrs35CiZvWjzWJ_lhGAPI/edit?usp=sharing.

# Notas
Es importante el archivo webpack.config.js ya que tiene toda la configuración de la app.
