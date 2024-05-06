import banner from "../assets/banner.png"
import Banner from "../shared/Banner";


const Home = () => {
  return (
    <div className="md:px-14 p-4 pt-28 max-w-screen-2xl mx-auto" id="home">
      <Banner banner={banner} heading={"Plan Lector 2025"} subheading="El Plan Lector en Perú es una estrategia fundamental para desarrollar la capacidad de leer y el hábito lector en los estudiantes. A través de la lectura, se mejora la comprensión, se accede a otros aprendizajes y se fomenta la creatividad" btn1="Aprender más" btn2="Publicaciones"/>
    </div>
  );
};

export default Home;
