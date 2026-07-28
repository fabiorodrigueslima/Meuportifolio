import { FaBookOpen, FaSalesforce } from "react-icons/fa";
import useReveal from "../hooks/useReveal";

function ProfessionalDevelopment() {
  useReveal();

  return (
    <section className="development section" id="formacao" aria-labelledby="development-title">
      <div className="section-heading reveal">
        <span>DESENVOLVIMENTO PROFISSIONAL</span>
        <h2 id="development-title">Aprendizado contínuo, com transparência</h2>
        <p>Amplio meus conhecimentos para criar soluções cada vez mais completas, sem apresentar como experiência profissional aquilo que ainda está em formação.</p>
      </div>
      <article className="development-card reveal">
        <div className="development-icon"><FaSalesforce aria-hidden="true" /></div>
        <div>
          <span className="development-status">Em formação</span>
          <h3>Salesforce — formação em andamento</h3>
          <p>Estudos práticos na plataforma Salesforce e no Trailhead, desenvolvendo conhecimentos em CRM, gerenciamento de dados, personalização da plataforma, relatórios, segurança, automações e administração Salesforce.</p>
          <p className="development-note"><FaBookOpen aria-hidden="true" /> Conhecimento em desenvolvimento; não corresponde a emprego formal ou atuação como especialista.</p>
        </div>
      </article>
    </section>
  );
}

export default ProfessionalDevelopment;
