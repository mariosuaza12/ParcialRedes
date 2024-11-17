const Portfolio = ({ darkMode }) => {
  return (
    <section className={`py-12 m-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            Portafolio de Mario Alberto Suaza Echeverry
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Experiencia y proyectos destacados.
          </p>
        </div>

        <div className={`p-6 rounded-xl shadow-lg  ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
          <h3 className="text-2xl font-semibold mb-4">Experiencia en varios ámbitos:</h3>

          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">1. Desarrollo de Software:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>Actualmente trabajo en proyectos de software utilizando tecnologías como:</li>
              <ul className="list-inside ml-6">
                <li>Springboot, Docker, PostgreSQL y Java con Spring.</li>
              </ul>
              <li>Desarrollo de APIs e implementación de arquitecturas como:</li>
              <ul className="list-inside ml-6">
                <li>Clean y por Capas.</li>
              </ul>
              <li>Creación de un portafolio personal desplegado en contenedores Docker.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-4 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold">Tecnologías</h4>
              <p>Sprinboot, Docker, PostgreSQL, Java Spring</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white p-4 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold">Arquitecturas</h4>
              <p>Clean, por Capas</p>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white p-4 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold">Pruebas</h4>
              <p>Pruebas Unitarias</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white p-4 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold">Portafolio</h4>
              <p>Despliegue en contenedores Docker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
