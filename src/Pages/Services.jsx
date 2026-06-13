import { FaLaptopCode, FaBullseye, FaLayerGroup, FaTools } from "react-icons/fa";
import useReveal from "../hooks/useReveal";

const services = [
  { icon: FaLaptopCode, title: "Desenvolvimento de Sites", text: "Sites profissionais, responsivos e otimizados para apresentar sua empresa com credibilidade e transformar visitas em oportunidades." },
  { icon: FaBullseye, title: "Landing Pages", text: "Páginas estratégicas para campanhas, lançamentos e captação de leads, criadas com foco em conversão e uma chamada para ação clara." },
  { icon: FaLayerGroup, title: "Sistemas Web", text: "Aplicações sob medida, painéis administrativos, autenticação e integrações para simplificar processos do seu negócio." },
  { icon: FaTools, title: "Manutenção e Suporte", text: "Correções, melhorias de desempenho, atualizações e suporte técnico para manter seu projeto seguro e funcionando bem." },
];

function Services() {
  useReveal();
  return (
    <section className="services section" id="servicos">
      <div className="section-heading reveal"><span>SERVIÇOS</span><h2>Soluções digitais para o seu negócio crescer</h2><p>Do primeiro clique à entrega final, desenvolvo experiências rápidas, intuitivas e alinhadas aos objetivos da sua marca.</p></div>
      <div className="services-grid">
        {services.map(({ icon: Icon, title, text }) => <article className="service-card reveal" key={title}><div className="card-icon"><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
  );
}

export default Services;
