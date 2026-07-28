import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SOCIAL_LINKS, WHATSAPP_URL } from "../../data/portfolio";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand"><a href="#inicio" aria-label="Voltar ao início">Fábio<span>Dev</span></a><p>Desenvolvedor Full Stack e Python — sistemas, APIs e automações.</p></div>
        <nav className="footer-nav" aria-label="Navegação do rodapé"><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#tecnologias">Tecnologias</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></nav>
        <div className="footer-socials"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp"><FaWhatsapp aria-hidden="true" /></a><a href={SOCIAL_LINKS.email} aria-label="Enviar e-mail"><FaEnvelope aria-hidden="true" /></a><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Perfil de Fábio no LinkedIn"><FaLinkedinIn aria-hidden="true" /></a><a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="Perfil de Fábio no GitHub"><FaGithub aria-hidden="true" /></a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Fábio Rodrigues. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo ↑</a></div>
    </footer>
  );
}

export default Footer;
