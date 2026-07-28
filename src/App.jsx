import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Process from "./Pages/Process";
import Projects from "./Pages/Projetos";
import Technologies from "./Pages/Technologies";
import About from "./Pages/About/About";
import ProfessionalDevelopment from "./Pages/ProfessionalDevelopment";
import Curriculo from "./Pages/Curriculo";
import Contato from "./Pages/Contato";

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <Process />
      <Technologies />
      <About />
      <ProfessionalDevelopment />
      <Curriculo />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
