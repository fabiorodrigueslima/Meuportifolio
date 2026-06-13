import { FaCheck, FaCode, FaMobileAlt, FaTachometerAlt } from "react-icons/fa";
import minhaFoto from "../../assets/images/minha-foto.jpg";
import useReveal from "../../hooks/useReveal";

function About() {
  useReveal();
  return (
    <section className="about section" id="sobre">
      <div className="about-image reveal">
        <div className="about-photo"><img src={minhaFoto} alt="Fábio Rodrigues trabalhando com desenvolvimento web" loading="lazy" /></div>
        <div className="about-experience"><strong>&lt;/&gt;</strong><span>Paixão por criar<br />soluções úteis</span></div>
      </div>
      <div className="about-content reveal">
        <span className="section-label">SOBRE MIM</span>
        <h2>Tecnologia com propósito e atenção aos detalhes</h2>
        <p>Sou Fábio Rodrigues, Desenvolvedor Full Stack apaixonado por tecnologia e por criar soluções que geram impacto positivo. Tenho experiência no desenvolvimento de sites e sistemas web, buscando sempre unir funcionalidade, desempenho e uma excelente experiência para o usuário.</p>
        <ul className="about-list"><li><FaCheck /> Código limpo e organizado</li><li><FaCheck /> Comunicação clara durante o projeto</li><li><FaCheck /> Foco na experiência do usuário</li></ul>
        <div className="about-features"><div><FaCode /><span>Desenvolvimento<br /><strong>sob medida</strong></span></div><div><FaMobileAlt /><span>Experiência<br /><strong>responsiva</strong></span></div><div><FaTachometerAlt /><span>Performance<br /><strong>otimizada</strong></span></div></div>
      </div>
    </section>
  );
}

export default About;
