import { useState } from 'react';
import { Heart } from 'lucide-react';
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState('Inicio');

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Navegación */}
      <nav
        className={`relative z-10 shadow-md ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-gray-100 to-gray-200'
          }`}
      >
        <div className="container mx-auto p-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className={`text-2xl font-bold tracking-wider ${darkMode
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500'
              : 'text-gray-800'
              }`}
          >
            Mario Suaza
          </a>

          {/* Menú */}
          <ul className="flex items-center space-x-6">
            {['Inicio', 'Portafolio', 'Contacto'].map((item) => (
              <li key={item}>
                <button
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-md ${selectedComponent === item
                    ? 'bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 text-white shadow-lg scale-105'
                    : darkMode
                      ? 'text-gray-200 hover:text-white hover:bg-gray-700'
                      : 'text-gray-800 hover:text-gray-900 hover:bg-gray-300'
                    }`}
                  onClick={() => setSelectedComponent(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          {/* Botón de modo oscuro */}
          <button
            className={`rounded-full p-3 transform transition-transform duration-300 ${darkMode
              ? 'bg-gray-700 text-gray-200 hover:bg-gray-600 hover:scale-110'
              : 'bg-gray-300 text-gray-800 hover:bg-gray-400 hover:scale-110'
              }`}
            onClick={handleDarkMode}
          >
            <Heart className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Fondo decorativo detrás del nav */}
      <div
        className={`absolute top-0 left-0 w-full h-16 z-0 blur-lg opacity-40 ${darkMode
          ? 'bg-gradient-to-r from-purple-500 to-pink-500'
          : 'bg-gradient-to-r from-blue-400 to-green-400'
          }`}
      ></div>

      {/* Componentes */}
      {selectedComponent === 'Inicio' && <Home darkMode={darkMode} />}
      {selectedComponent === 'Portafolio' && <Portfolio darkMode={darkMode} />}
      {selectedComponent === 'Contacto' && <Contact darkMode={darkMode} />}

      {/* Footer */}
      <footer className={`py-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <div className="container mx-auto text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            2023 Mario Suaza. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
