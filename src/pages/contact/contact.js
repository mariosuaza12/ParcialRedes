const Contact = ({ darkMode }) => {
    return (
      <section className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              Contáctame
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              ¿Tienes alguna pregunta o deseas trabajar conmigo? Envíame un mensaje.
            </p>
          </div>
  
          <div
            className={`p-6 rounded-xl shadow-lg max-w-3xl mx-auto ${
              darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
            }`}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full p-3 rounded-lg border ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'
                  }`}
                  placeholder="Tu nombre"
                  required
                />
              </div>
  
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full p-3 rounded-lg border ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'
                  }`}
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </div>
  
              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={`w-full p-3 rounded-lg border ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'
                  }`}
                  placeholder="Escribe tu mensaje aquí..."
                  required
                ></textarea>
              </div>
  
              <div className="text-center">
                <button
                  type="submit"
                  className={`px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transform transition-all duration-300 ${
                    darkMode
                      ? 'bg-blue-500 text-gray-200 hover:bg-blue-400 hover:scale-105'
                      : 'bg-blue-600 text-white hover:bg-blue-500 hover:scale-105'
                  }`}
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  