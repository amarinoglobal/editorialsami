import logo from "../assets/logo.webp";

// social icons
import fb from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import twiteer from '../assets/twiter.png'
import linkdin from '../assets/linkedIn.png'

const Footer = () => {
  return (
    <div className="bg-primary md:px-14 p-4 max-w-screen-2xl mx-auto">
      <div className="my-12 text-white flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3 mt-5"
          >
            <img src={logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-white">Editorial Sami</span>
          </a>
          <p className="items-justify md:w-1/2">
          ¿Quieres estar al día con las últimas novedades,¡Entonces nuestra newsletter es para ti!<br/>
          🌟 Suscríbete a Nuestro Boletín 🌟<br/>
          </p>
          <div>
            <input
              type="email"
              placeholder="Your email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md"
            />
            <input
              type="submit"
              value="Subscribe"
              className="py-2 px-4 rounded-md bg-secondary -ml-2"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Plataforma</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                Plan lector
              </a>
              <a href="/" className="block hover:text-gray-300">
                Mundo Pre-universitario
              </a>
              <a href="/" className="block hover:text-gray-300">
                Quiénes sómos
              </a>
              <a href="/" className="block hover:text-gray-300">
                Publicaciones
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Recursos</h4>
            <ul className="space-y-3">
              <a href="/" className="block">
                ¿Como funciona?
              </a>
              <a href="/" className="block">
                ¿Donde preguntar?
              </a>
              <a href="/" className="block">
                ¿Cómo empezar?
              </a>
              <a href="/" className="block">
                ¿Qué necesito para empezar?
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contacto</h4>
            <ul className="space-y-3">
              <p>(+51) 999-999-999</p>
              <p>contacto@editorialsami.com</p>
              <p>Lima, Perú</p>
            </ul>
          </div>
        </div>
      </div>
      <hr className=""/>

      <div className="text-white flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p> &copy; Editorial Sami - 2024. Todos los derechos reservados.</p>
        <div className="flex items-center space-x-5">
            <img src={fb} alt="" className="w-8"/>
            <img src={insta} alt="" className="w-8"/>
            <img src={twiteer} alt="" className="w-8"/>
            <img src={linkdin} alt="" className="w-8"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
