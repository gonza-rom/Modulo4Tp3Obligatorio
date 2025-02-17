# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### Landing Page de Venta de Videojuegos - React + Vite

#### 📌 Tecnologías Utilizadas:
- **React + Vite**
- **Tailwind CSS** (Estilos)
- **Bootstrap Icons** (Íconos)
- **Framer Motion** (Animaciones)

#### 📌 Estructura del Proyecto:

📂 `src/components`
- `Header.jsx` → Contiene el encabezado de la página.
- `GameList.jsx` → Muestra la lista de videojuegos usando `.map()`.
- `Footer.jsx` → Contiene el pie de página.

📂 `src/pages`
- `Home.jsx` → Página principal que importa y ensambla los componentes.

📂 `src`
- `App.jsx` → Importa `Home.jsx` y maneja el estado global si es necesario.

#### 📌 Características Principales:
✅ **Componentes Reutilizables** (`Header`, `GameList`, `Footer`).
✅ **Lista Dinámica** (`.map()`) para mostrar juegos.
✅ **Botón Interactivo** con `onClick` para mostrar/ocultar precios.
✅ **Renderizado Condicional** con `useState`.
✅ **Animaciones** con `Framer Motion`.
