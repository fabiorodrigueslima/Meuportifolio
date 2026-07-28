import { FaArrowRight, FaFileAlt, FaWhatsapp } from "react-icons/fa";
import minhaFoto from "../assets/images/minha-foto-optimized.jpg";
import { WHATSAPP_URL } from "../data/portfolio";

function Home() {
  return (
    <main className="home" id="inicio">
      <div className="home-orb home-orb-one"></div><div className="home-orb home-orb-two"></div>
      <section className="home-container" id="conteudo" aria-labelledby="home-title">
        <div className="home-content">
          <span className="eyebrow">DESENVOLVEDOR FULL STACK E PYTHON</span>
          <h1 id="home-title">Sistemas e automações que <em>simplificam o seu negócio.</em></h1>
          <p>Sou Fábio Rodrigues. Desenvolvo sites, sistemas web, APIs e automações com foco em organizar processos, economizar tempo e transformar necessidades reais em soluções digitais.</p>
          <div className="home-actions">
            <a href="#projetos" className="btn btn-primary">Ver Projetos <FaArrowRight aria-hidden="true" /></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary"><FaWhatsapp aria-hidden="true" /> Entrar em contato</a>
            <a href="#curriculo" className="btn btn-tertiary" aria-label="Ir para a seção de currículo"><FaFileAlt aria-hidden="true" /> Currículo</a>
          </div>
          <div className="home-stats" aria-label="Diferenciais">
            <div><strong>Python</strong><span>Automações e APIs</span></div>
            <div><strong>Full Stack</strong><span>Do front-end aos dados</span></div>
            <div><strong>Direto</strong><span>Comunicação pessoal</span></div>
          </div>
        </div>
        <div className="home-image-area">
          <div className="home-photo-ring"><img src={minhaFoto} alt="Fábio Rodrigues, Desenvolvedor Full Stack e Python" width="760" height="1013" fetchPriority="high" /></div>
          <div className="home-badge"><span></span> Disponível para novos projetos</div>
          <div className="code-card" aria-hidden="true"><i>&lt;/&gt;</i><small>Soluções pensadas para o negócio</small></div>
        </div>
      </section>
    </main>
  );
}

export default Home;
