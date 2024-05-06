import Img1 from "../assets/about1.png";
import Img2 from "../assets/about2.png";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div className="md:w-1/2"
        
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        >
          <img src={Img1} alt="" />
        </motion.div>
        <motion.div
        
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}

        className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            Muchos años de experiencia  
            <span className="text-secondary leading-normal"> enriqueciendo mentes</span>
          </h2>
          <p className="text-tertiary text-lg mb-7">
          En Editorial Sami fomentamos la pasión por la lectura con libros que inspiran, educan y enriquecen. Somos tu mejor opción en cada página.
          </p>
          <button className="py-3 px-7 bg-primary font-semibold text-white rounded hover:bg-secondary transition-all duration-300">
            Nuestra historia
          </button>
        </motion.div>
      </div>

      <div className="my-12"></div>

      {/* 2nd about */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* img */}
        <motion.div 
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
        
        className="md:w-1/2">
          <img src={Img2} alt="" className="w-full" />
        </motion.div>
        <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
        className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
          Siguenos en nuestras redes sociales<br/>
            <span className="text-secondary leading-normal"> y eventos academicos</span>
          </h2>
          <p className="text-tertiary text-lg mb-7">
          Únete a la comunidad de lectores de Editorial Sami. Síguenos en redes sociales para estar al tanto de nuestras publicaciones, eventos académicos y descubrir historias que enriquecen la mente. ¡Te esperamos! 
          </p>
          <button className="py-3 px-7 bg-primary font-semibold text-white rounded hover:bg-secondary transition-all duration-300">
            Saber más
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
