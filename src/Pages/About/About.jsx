import { FaCheck, FaCode, FaMobileAlt, FaTachometerAlt } from "react-icons/fa";
import minhaFoto from "../../assets/images/minha-foto-optimized.jpg";
import useReveal from "../../hooks/useReveal";

function About() {
  useReveal();
  return (
    <section className="about section" id="sobre">
      <div className="about-image reveal">
        <div className="about-photo"><img src={minhaFoto} alt="Fábio Rodrigues, desenvolvedor de sistemas web" width="760" height="1013" loading="lazy" /></div>
        <div className="about-experience"><strong>&lt;/&gt;</strong><span>Paixão por criar<br />soluções úteis</span></div>
      </div>
      <div className="about-content reveal">
        <span className="section-label">SOBRE MIM</span>
        <h2>Transformo necessidades em soluções digitais úteis</h2>
        <p>Sou Fábio Rodrigues, Desenvolvedor Full Stack com foco em Python, React e soluções web. Meu contato com necessidades de empresas e cooperativas orienta uma forma prática de desenvolver: entender o problema, organizar a informação e construir uma solução clara, responsiva e possível de evoluir.</p>
        <p>Busco oportunidades como desenvolvedor, projetos freelancer e parcerias nas quais eu possa aplicar meus conhecimentos em sistemas, APIs e automações — enquanto continuo ampliando minha formação técnica.</p>
        <ul className="about-list"><li><FaCheck aria-hidden="true" /> Escuta e comunicação clara</li><li><FaCheck aria-hidden="true" /> Código organizado e fácil de evoluir</li><li><FaCheck aria-hidden="true" /> Foco no problema antes da tecnologia</li></ul>
        <div className="about-features"><div><FaCode /><span>Desenvolvimento<br /><strong>sob medida</strong></span></div><div><FaMobileAlt /><span>Experiência<br /><strong>responsiva</strong></span></div><div><FaTachometerAlt /><span>Performance<br /><strong>otimizada</strong></span></div></div>
      </div>
    </section>
  );
}

export default About;
