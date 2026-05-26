import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Projects from "./Pages/Projetos";
import About from "./Pages/About/About";
import Technologies from "./Pages/Technologies";
import Skills from "./Pages/Skills";
import Contato from "./Pages/Contato";

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <Services />
            <Projects />
            <About />
            <Technologies />
            <Skills />
            <Contato />
            <Footer />
        </>
    );
}

export default App;
