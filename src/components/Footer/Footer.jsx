import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SOCIAL_LINKS, WHATSAPP_URL } from "../../data/portfolio";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand"><a href="#inicio" aria-label="Voltar ao início">Fábio<span>Dev</span></a><p>Desenvolvedor Full Stack | Criando soluções digitais modernas.</p></div>
        <nav className="footer-nav" aria-label="Navegação do rodapé"><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#processo">Processo</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></nav>
        <div className="footer-socials"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a><a href={SOCIAL_LINKS.email} aria-label="E-mail"><FaEnvelope /></a><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a><a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Fábio Rodrigues. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo ↑</a></div>
    </footer>
  );
}

export default Footer;
