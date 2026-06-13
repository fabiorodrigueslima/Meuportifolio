import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Process from "./Pages/Process";
import Projects from "./Pages/Projetos";
import Technologies from "./Pages/Technologies";
import About from "./Pages/About/About";
import Testimonials from "./Pages/Testimonials";
import Contato from "./Pages/Contato";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Process />
      <Projects />
      <Technologies />
      <About />
      <Testimonials />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
