import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      className="bg-gray-900 text-white p-6 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2  }}
    >
      <h1 className="text-4xl font-bold">🎮 GameStore</h1>
      <p className="text-lg mt-2">Compra los mejores videojuegos al mejor precio.</p>
    </motion.header>
  );
};

export default Header;
