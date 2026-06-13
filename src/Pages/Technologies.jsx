import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiPostgresql, SiVercel } from "react-icons/si";
import useReveal from "../hooks/useReveal";

const technologies = [[FaHtml5, "HTML5"], [FaCss3Alt, "CSS3"], [FaJs, "JavaScript"], [FaReact, "React"], [FaNodeJs, "Node.js"], [SiPostgresql, "PostgreSQL"], [FaGitAlt, "Git"], [FaGithub, "GitHub"], [SiVercel, "Vercel"]];

function Technologies() {
  useReveal();
  return <section className="technologies section" id="tecnologias"><div className="section-heading reveal"><span>TECNOLOGIAS</span><h2>Ferramentas para construir soluções completas</h2><p>Uma stack moderna para desenvolver interfaces rápidas, back-ends robustos e projetos prontos para produção.</p></div><div className="technologies-grid">{technologies.map(([Icon, name]) => <div className="tech-card reveal" key={name}><Icon aria-hidden="true" /><span>{name}</span></div>)}</div></section>;
}

export default Technologies;
