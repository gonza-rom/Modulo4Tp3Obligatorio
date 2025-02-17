import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameList from './components/GameList';
import NavBar from './components/Navbar';
import { div } from 'framer-motion/client';

function App() {
  return (
    <div>
      <div className=" bg-gray-100">
      <NavBar/>
        <Header />
          <GameList />
        <Footer />
      </div>
    </div>
  );
}

export default App;