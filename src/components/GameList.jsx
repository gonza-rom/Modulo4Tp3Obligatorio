import { motion } from "framer-motion"; // Importamos el paquete para animaciones
import { useState } from "react"; // Importamos useState para gestionar el estado

// Datos de los juegos en un array de objetos, agregando una propiedad 'image' con la URL de cada imagen
const games = [
  { id: 1, title: "The Legend of Zelda", price: "$20.999", image: "1644881648-1637878298-the-legend-of-zelda-breath-of-the-wild.jpg" },
  { id: 2, title: "Elden Ring", price: "$59.999", image: "elden-ring.jpg" },
  { id: 3, title: "Cyberpunk 2077", price: "$39.999", image: "1730416844-cyberpunk-2077-ps4-0.webp" },
  { id: 4, title: "GTA V", price: "$59.999", image: "gtav.jpg" },
  { id: 5, title: "Red Redemption II", price: "$59.999", image: "rd2.jpg" }
];

const GameList = () => {
  // Estado para mostrar u ocultar los precios
  const [showPrices, setShowPrices] = useState(false);

  return (
    <section className="p-6 text-center">
      {/* Botón que alterna el estado showPrices */}
      <button
        onClick={() => setShowPrices(!showPrices)} // Cambia el estado al hacer clic
        className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700 transition"
      >
        {/* Cambia el texto del botón según el estado */}
        {showPrices ? "Ocultar Precios" : "Mostrar Precios"}
      </button>

      {/* Contenedor con animación de Framer Motion */}
      <motion.div 
        className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }} // Inicializa con opacidad 0
        animate={{ opacity: 1 }} // Animación hacia opacidad 1 (aparece)
        transition={{ duration: 0.7 }} // Duración de la animación
      >
        {/* Recorremos el array de juegos para renderizar cada uno */}
        {games.map((game) => (
          <motion.div
            key={game.id} // Usamos la id como clave única
            className="bg-gray-800 text-white p-4 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }} // Escala el tamaño al pasar el mouse (hover)
          >
            {/* Imagen del juego */}
            <img
              src={game.image} // La URL de la imagen se toma de la propiedad 'image'
              alt={game.title} // El texto alternativo es el título del juego
              className="w-full h-48 object-cover rounded-lg" // Estilos para la imagen
            />
            <h2 className="text-xl font-semibold mt-4">{game.title}</h2>
            {/* Renderizado condicional: muestra el precio solo si showPrices es true */}
            {showPrices && <p className="text-yellow-400 mt-2">{game.price}</p>}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GameList;
