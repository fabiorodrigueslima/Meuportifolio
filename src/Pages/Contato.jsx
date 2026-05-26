import {
    FaWhatsapp,
    FaEnvelope,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa";

import { useState } from "react";

import useReveal from "../hooks/useReveal";

function Contato() {

    useReveal();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    function enviarMensagem(e) {

        e.preventDefault();

        const texto = `Olá Fábio! Meu nome é ${nome.trim()}.

Email: ${email.trim()}

Quero falar sobre um projeto:
${mensagem.trim()}`;

        const whatsappURL =
            `https://wa.me/5561984882881?text=${encodeURIComponent(texto)}`;

        window.open(whatsappURL, "_blank");
    }

    return (

        <section
            className="contact"
            id="contato"
        >

            <div className="contact-title reveal">

                <span>
                    CONTATO
                </span>

                <h2>
                    Pronto para tirar seu site do papel?
                </h2>

                <p>
                    Me conte o que você precisa. Eu retorno com uma orientação
                    clara sobre escopo, prazo e próximos passos.
                </p>

            </div>

            <div className="contact-container">

                <div className="contact-info reveal">

                    <div className="contact-card contact-highlight">

                        <FaWhatsapp />

                        <div>

                            <h3>
                                WhatsApp
                            </h3>

                            <p>
                                Resposta direta para orçamentos e dúvidas iniciais.
                            </p>

                            <a href="https://wa.me/5561984882881?text=Ol%C3%A1%20F%C3%A1bio!%20Quero%20fazer%20um%20or%C3%A7amento%20para%20um%20site." target="_blank" rel="noreferrer">
                                Chamar agora
                            </a>

                        </div>

                    </div>

                    <div className="contact-card">

                        <FaEnvelope />

                        <div>

                            <h3>
                                Email
                            </h3>

                            <p>
                                fabiorodrigues.programasao@gmail.com
                            </p>

                        </div>

                    </div>

                    <div className="contact-card">

                        <FaInstagram />

                        <div>

                            <h3>
                                Instagram
                            </h3>

                            <p>
                                @fabioprogramacao
                            </p>

                        </div>

                    </div>

                    <div className="contact-card">

                        <FaLinkedinIn />

                        <div>

                            <h3>
                                LinkedIn
                            </h3>

                            <p>
                                linkedin.com/in/fabioprogramacao
                            </p>

                        </div>

                    </div>

                </div>

                <form
                    className="contact-form reveal"
                    onSubmit={enviarMensagem}
                >

                    <label>
                        <span>Nome</span>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Seu nome"
                            autoComplete="name"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        <span>Email</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="seuemail@exemplo.com"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        <span>Mensagem</span>
                        <textarea
                            placeholder="Ex: preciso de um site institucional para minha empresa..."
                            name="mensagem"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            required
                        ></textarea>
                    </label>

                    <button type="submit">
                        Enviar pelo WhatsApp
                    </button>

                    <small>
                        Você será direcionado para o WhatsApp com a mensagem pronta.
                    </small>

                </form>

            </div>

        </section>

    );
}

export default Contato;
