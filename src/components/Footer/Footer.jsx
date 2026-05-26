import {
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">

                    <h2>
                        Fábio<span>Dev</span>
                    </h2>

                    <p>
                        Desenvolvimento de sites, landing pages e sistemas web
                        para negócios que precisam de presença digital clara,
                        profissional e preparada para gerar contatos.
                    </p>

                </div>

                <div className="footer-links">

                    <h3>
                        Navegação
                    </h3>

                    <ul>

                        <li>
                            <a href="#services">Serviços</a>
                        </li>

                        <li>
                            <a href="#projetos">Projetos</a>
                        </li>

                        <li>
                            <a href="#processo">Processo</a>
                        </li>

                        <li>
                            <a href="#sobre">Sobre</a>
                        </li>

                        <li>
                            <a href="#contato">Contato</a>
                        </li>

                    </ul>

                </div>

                <div className="footer-contact">

                    <h3>
                        Contato
                    </h3>

                    <p>
                        <FaMapMarkerAlt />
                        Brasília - DF
                    </p>

                    <p>
                        <FaEnvelope />
                        fabiorodrigues.programasao@gmail.com
                    </p>

                    <p>
                        <FaPhoneAlt />
                        (61) 98488-2881
                    </p>

                    <div className="footer-socials">

                        <a
                            href="https://instagram.com/fabioprogramacao"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram de Fábio Rodrigues"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://linkedin.com/in/fabioprogramacao"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn de Fábio Rodrigues"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="https://github.com/fabioprogramacao"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub de Fábio Rodrigues"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://wa.me/5561984882881?text=Ol%C3%A1%20F%C3%A1bio!%20Tenho%20interesse%20em%20criar%20um%20site%20profissional.%20Podemos%20conversar?"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Conversar com Fábio Rodrigues pelo WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>

                    </div>

                </div>

            </div>

            <div className="footer-bottom">

                <span>
                    © 2026 Fábio Rodrigues. Todos os direitos reservados.
                </span>

            </div>

        </footer>
    );
}

export default Footer;
