import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import minhaFoto from "../assets/images/minha-foto.jpg";
import { WHATSAPP_URL } from "../data/portfolio";

function Home() {
  return (
    <main className="home" id="inicio">
      <div className="home-orb home-orb-one"></div><div className="home-orb home-orb-two"></div>
      <section className="home-container" aria-labelledby="home-title">
        <div className="home-content">
          <span className="eyebrow">DESENVOLVEDOR FULL STACK</span>
          <h1 id="home-title">Transformando ideias em <em>soluções digitais.</em></h1>
          <p>Olá, eu sou Fábio Rodrigues, Desenvolvedor Full Stack especializado na criação de sites e sistemas web modernos, responsivos e voltados para resultados.</p>
          <div className="home-actions">
            <a href="#projetos" className="btn btn-primary">Ver Projetos <FaArrowRight aria-hidden="true" /></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-secondary"><FaWhatsapp aria-hidden="true" /> Solicitar Orçamento</a>
          </div>
          <div className="home-stats" aria-label="Diferenciais">
            <div><strong>Full Stack</strong><span>Soluções completas</span></div>
            <div><strong>100%</strong><span>Design responsivo</span></div>
            <div><strong>Direto</strong><span>Atendimento pessoal</span></div>
          </div>
        </div>
        <div className="home-image-area">
          <div className="home-photo-ring"><img src={minhaFoto} alt="Fábio Rodrigues, Desenvolvedor Full Stack" fetchPriority="high" /></div>
          <div className="home-badge"><span></span> Disponível para novos projetos</div>
          <div className="code-card" aria-hidden="true"><i>&lt;/&gt;</i><small>Sites que geram resultados</small></div>
        </div>
      </section>
    </main>
  );
}

export default Home;
