// src/components/Home.js
import React from 'react';

import imgUno from '../../images/image1.jpg';
import imgDos from '../../images/image2.jpg';


const Home = ({ darkMode }) => {
  // Variables para las URLs de las imágenes locales
  const imageUrls = [imgUno, imgDos];

  return (
    <section
      className={`relative py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'
        } overflow-hidden`}
    >
      {/* Fondo decorativo con degradados */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 opacity-10 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto relative z-10">
        {/* Encabezado */}
        <div className="text-center">
          <h1
            className={`text-5xl font-extrabold ${darkMode ? 'text-gray-200' : 'text-gray-800'
              }`}
          >
            Bienvenido, soy{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mario Alberto Suaza Echeverry
            </span>
          </h1>
          <p
            className={`mt-4 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
          >
            Estudiante de desarrollo de Software y Administrador de Empresas.
          </p>
        </div>

        {/* Imágenes decorativas */}
        <div className="mt-12 flex justify-center gap-4">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Decoración de inicio ${index + 1}`}
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-[400px] h-[600px] object-cover"
            />
          ))}
        </div>
      </div>

      {/* Elementos decorativos adicionales */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 rounded-full blur-3xl transform -translate-y-12 -translate-x-12"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-green-500 opacity-20 rounded-full blur-3xl transform translate-y-12 translate-x-12"></div>
    </section>
  );
};

export default Home;
