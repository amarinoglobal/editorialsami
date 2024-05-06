import banner from '../assets/newsletter.png';
import Banner from '../shared/Banner';

const Newsletter = () => {
    return (
<div className="md:px-14 p-4 max-w-screen-2xl my-12 mx-auto">
      <Banner banner={banner} heading={"Impulsando el Éxito Académico de los Estudiantes"} subheading="Editorial Sami: Enriqueciendo estudiantes con recursos de calidad, fomentando el éxito y la pasión por el aprendizaje en cada etapa educativa." btn1="Redes sociales" btn2="Eventos"/>
    </div>
    );
};

export default Newsletter;