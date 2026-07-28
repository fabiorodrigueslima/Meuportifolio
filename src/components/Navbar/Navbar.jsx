import { useEffect, useState } from "react";
import logo from "../../assets/images/logo-optimized.png";
import { WHATSAPP_URL } from "../../data/portfolio";

const links = [
  ["Início", "#inicio"], ["Serviços", "#servicos"], ["Projetos", "#projetos"],
  ["Tecnologias", "#tecnologias"], ["Sobre", "#sobre"], ["Currículo", "#curriculo"],
  ["Contato", "#contato"],
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a className="navbar-logo" href="#inicio" aria-label="Ir para o início" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="FábioDev" className="logo-img" width="500" height="250" />
        </a>

        <button className={`menu-toggle ${isOpen ? "is-open" : ""}`} type="button" aria-label={isOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isOpen} aria-controls="main-menu" onClick={() => setIsOpen((open) => !open)}>
          <span></span><span></span><span></span>
        </button>

        <nav id="main-menu" className={isOpen ? "is-open" : ""} aria-label="Navegação principal">
          <ul className="navbar-menu">
            {links.map(([label, href]) => <li key={href}><a href={href} onClick={() => setIsOpen(false)}>{label}</a></li>)}
          </ul>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="navbar-button navbar-button-mobile">Pedir orçamento</a>
        </nav>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="navbar-button navbar-button-desktop">Pedir orçamento</a>
      </div>
    </header>
  );
}

export default Navbar;
