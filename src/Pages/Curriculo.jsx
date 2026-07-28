import { FaDownload, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";
import useReveal from "../hooks/useReveal";
import {
  RESUME_AVAILABLE,
  RESUME_DOWNLOAD_NAME,
  RESUME_URL,
} from "../data/portfolio";

function Curriculo() {
  useReveal();

  return (
    <section className="resume section" id="curriculo" aria-labelledby="resume-title">
      <div className="resume-card reveal">
        <div className="resume-icon" aria-hidden="true">
          <FaFileAlt />
        </div>

        <div className="resume-content">
          <span className="section-label">CURRÍCULO</span>
          <h2 id="resume-title">Minha trajetória profissional em um só lugar</h2>
          <p>
            Acesse meu currículo para conhecer minha formação, competências,
            experiências e projetos profissionais.
          </p>

          {RESUME_AVAILABLE ? (
            <div className="resume-actions">
              <a
                className="btn btn-primary"
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visualizar currículo de Fábio Rodrigues em PDF em uma nova aba"
              >
                <FaExternalLinkAlt aria-hidden="true" />
                Visualizar currículo
              </a>
              <a
                className="btn btn-secondary resume-download"
                href={RESUME_URL}
                download={RESUME_DOWNLOAD_NAME}
                aria-label="Baixar currículo de Fábio Rodrigues em PDF"
              >
                <FaDownload aria-hidden="true" />
                Baixar currículo
              </a>
            </div>
          ) : (
            <div className="resume-pending" role="status">
              <strong>Currículo pronto para ser publicado</strong>
              <span>
                TODO: adicionar o currículo em
                {" "}
                <code>public/curriculo-fabio-rodrigues.pdf</code>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Curriculo;
