import { FaComments, FaClipboardList, FaCode, FaRocket } from "react-icons/fa";
import useReveal from "../hooks/useReveal";

const steps = [
  { icon: FaComments, title: "Entendimento", text: "Conversamos sobre seu negócio, público, objetivos e as necessidades reais do projeto." },
  { icon: FaClipboardList, title: "Planejamento", text: "Organizo o escopo, a estrutura, as funcionalidades e o cronograma de desenvolvimento." },
  { icon: FaCode, title: "Desenvolvimento", text: "Transformo o planejamento em uma solução rápida, responsiva e fácil de usar." },
  { icon: FaRocket, title: "Entrega", text: "Reviso, publico e entrego o projeto pronto, com orientação e suporte inicial." },
];

function Process() {
  useReveal();
  return <section className="process section" id="processo"><div className="section-heading reveal"><span>MEU PROCESSO</span><h2>Clareza em cada etapa do projeto</h2><p>Um processo simples e colaborativo para você acompanhar a evolução e ter segurança do início ao lançamento.</p></div><div className="process-grid">{steps.map(({ icon: Icon, title, text }, index) => <article className="process-card reveal" key={title}><span className="process-number">0{index + 1}</span><div className="process-icon"><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>;
}

export default Process;
