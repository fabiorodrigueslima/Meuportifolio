import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaSalesforce } from "react-icons/fa";
import { SiPostgresql, SiVercel, SiVite } from "react-icons/si";
import useReveal from "../hooks/useReveal";

const groups = [
  { title: "Frontend", items: [[FaReact, "React"], [SiVite, "Vite"], [FaJs, "JavaScript"], [FaHtml5, "HTML"], [FaCss3Alt, "CSS"]] },
  { title: "Backend e dados", items: [[FaPython, "Python"], [FaNodeJs, "Node.js"], [SiPostgresql, "PostgreSQL"]] },
  { title: "Ferramentas", items: [[FaGitAlt, "Git"], [FaGithub, "GitHub"], [SiVercel, "Vercel"]] },
  { title: "Em formação", items: [[FaSalesforce, "Salesforce"]] },
];

function Technologies() {
  useReveal();
  return <section className="technologies section" id="tecnologias"><div className="section-heading reveal"><span>TECNOLOGIAS E CONHECIMENTOS</span><h2>Do front-end à automação de processos</h2><p>Organizo minha atuação por áreas para deixar claro onde aplico cada tecnologia — e sinalizo com transparência o que ainda está em desenvolvimento.</p></div><div className="technology-groups">{groups.map((group) => <div className="technology-group reveal" key={group.title}><h3>{group.title}</h3><div className="technologies-grid">{group.items.map(([Icon, name]) => <div className="tech-card" key={name}><Icon aria-hidden="true" /><span>{name}</span>{name === "Salesforce" && <small>Formação em andamento</small>}</div>)}</div></div>)}</div></section>;
}

export default Technologies;
