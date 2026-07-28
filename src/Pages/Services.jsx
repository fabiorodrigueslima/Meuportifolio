import { FaLaptopCode, FaPython, FaLayerGroup, FaPlug, FaTools, FaDatabase } from "react-icons/fa";
import useReveal from "../hooks/useReveal";

const services = [
  { icon: FaLaptopCode, title: "Sites profissionais", text: "Sites institucionais e páginas responsivas para empresas e profissionais apresentarem seus serviços com clareza, credibilidade e um contato fácil." },
  { icon: FaLayerGroup, title: "Sistemas web personalizados", text: "Painéis, cadastros e fluxos digitais sob medida para organizar informações e substituir tarefas manuais do dia a dia." },
  { icon: FaPython, title: "Automações com Python", text: "Rotinas para reduzir trabalho repetitivo, processar dados e tornar operações internas mais rápidas e consistentes." },
  { icon: FaPlug, title: "APIs e integrações", text: "Conexões entre sistemas e serviços para centralizar dados, evitar digitação duplicada e apoiar novos recursos." },
  { icon: FaDatabase, title: "Dados com PostgreSQL", text: "Estruturação de bancos de dados para aplicações que precisam armazenar, consultar e manter informações organizadas." },
  { icon: FaTools, title: "Manutenção e evolução", text: "Correções, melhorias de desempenho e novos recursos para sites e sistemas que precisam continuar seguros, úteis e atualizados." },
];

function Services() {
  useReveal();
  return (
    <section className="services section" id="servicos">
      <div className="section-heading reveal"><span>SERVIÇOS</span><h2>Tecnologia aplicada a problemas reais</h2><p>Soluções para profissionais, pequenas empresas e cooperativas que precisam apresentar melhor o negócio, organizar processos ou ganhar eficiência.</p></div>
      <div className="services-grid">
        {services.map(({ icon: Icon, title, text }) => <article className="service-card reveal" key={title}><div className="card-icon"><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
  );
}

export default Services;
