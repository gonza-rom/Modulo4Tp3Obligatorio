import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-dark p-4 text-center mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <p className="mb-2">Hecho con ❤️ en React y Tailwind</p>
      <p className="mb-2">&copy;By Gonzalo Romero</p>
      <div className="flex justify-center space-x-4 text-xl">
        <a href="https://www.facebook.com/gonzalo.romero.35110/" className="hover:text-blue-400 transition cursor-pointer" target="_blank">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://github.com/gonza-rom" className="hover:text-white-300 transition cursor-pointer" target="_blank">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.instagram.com/gonza.romer0/" className="hover:text-pink-400 transition cursor-pointer" target="_blank">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
