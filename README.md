### Landing Page de Venta de Videojuegos - React + Vite

#### 📌 Tecnologías Utilizadas:
- **React + Vite**
- **Tailwind CSS** (Estilos)
- **Bootstrap Icons** (Íconos)
- **Framer Motion** (Animaciones)

#### 📌 Estructura del Proyecto:

📂 `src/components`
- `Header.jsx` → Contiene el encabezado de la página.
- `GameList.jsx` → Muestra la lista de videojuegos usando `.map()`git a.
- `Footer.jsx` → Contiene el pie de página.
- `NavBar.jsx` → Contiene el navbar de página.

📂 `src/pages`
- `App.jsx` → Página principal que importa y ensambla los componentes.

📂 `src`
- `App.jsx` → Importa `Home.jsx` y maneja el estado global si es necesario.

#### 📌 Características Principales:
✅ **Componentes Reutilizables** (`Header`, `GameList`, `Footer`).
✅ **Lista Dinámica** (`.map()`) para mostrar juegos.
✅ **Botón Interactivo** con `onClick` para mostrar/ocultar precios.
✅ **Renderizado Condicional** con `useState`.
✅ **Animaciones** con `Framer Motion`.
