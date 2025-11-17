# Avra-Studio E-Commerce

Aplicación demo de un e-commerce que consume la API https://dummyjson.com para obtener una lista de productos y cuenta con una base de datos en firebase para manejar el sistema de usuarios, login y guardado del carrito de compras del usuario logueado.

## [Demo de la App](https://avra-studio.vercel.app)

### Requisitos

-   NodeJS: v22.15.0

### Estructura del proyecto

Árbol del proyecto que muestra de forma clara y concisa la estructura del mismo. Se encuentran los assets, components, context, hooks, firebase y css
Cada `*.module.css` se encuentra en la misma dirección que su archivo `*.jsx`

```bash
src/
|   App.jsx
|   Index.css
|   main.jsx
|
+---assets
|       Avra-Studio-Full-Logo.png
|       Avra-Studio-Solo-Logo.png
|       Avra-Studio-Solo-Text.png
|
+---components
|   +---CategorySelector
|   |       CategorySelector.jsx
|   |       CategorySelector.module.css
|   |
|   +---LogIn
|   |       LogIn.jsx
|   |       LogIn.module.css
|   |
|   +---MainContainer
|   |   |   MainContainer.jsx
|   |   |   MainContainer.module.css
|   |   |
|   |   +---Details
|   |   |       Details.jsx
|   |   |       Details.module.css
|   |   |
|   |   +---ItemListContainer
|   |   |       ItemListContainer.jsx
|   |   |       ItemListContainer.module.css
|   |   |
|   |   +---Page404
|   |   |       Page404.jsx
|   |   |       Page404.module.css
|   |   |
|   |   \---Products
|   |           Products.jsx
|   |           Products.module.css
|   |
|   +---NavContainer
|   |   |   NavContainer.jsx
|   |   |   NavContainer.module.css
|   |   |
|   |   \---NavLinkContainer
|   |       |   NavLinkContainer.jsx
|   |       |   NavLinkContainer.module.css
|   |       |
|   |       \---CartWidget
|   |           |   CartWidget.jsx
|   |           |   CartWidget.module.css
|   |           |
|   |           \---ItemWidget
|   |                   ItemWidget.jsx
|   |                   ItemWidget.module.css
|   |
|   +---SideLogo
|   |       SideLogo.jsx
|   |       SideLogo.module.css
|   |
|   \---SignUp
|           SignUp.jsx
|           SignUp.module.css
|
+---context
|       CartContext.jsx
|       CartProvider.jsx
|       UserContext.jsx
|
+---css
|       loader.module.css
|
+---firebase
|       config.js
|
\---hooks
        useFetch.jsx
```

### Paquetes adicionales

```bash
firebase@12.5.0
lucide-react@0.544.0
react-router-dom@7.9.5
```

### Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/FCampo7/CreaTuLanding-Campo.git
```

2. Ingresar al directorio

```bash
cd CreaTuLanding-Campo
```

3. Instalar las dependencias

```bash
npm install
```

4. Ejecutar el proyecto

```bash
npm run dev
```

5. Abrir http://localhost:5173/ en tu navegador para ver la aplicación.

6. La base de datos ya cuenta con un usuario test@test.com y contraseña test123 para realizar pruebas sin necesidad de crear un usuario nuevo, pero si se desea crear uno ya es completamente funcional.

## Licencia

Licenciado bajo la MIT License.
