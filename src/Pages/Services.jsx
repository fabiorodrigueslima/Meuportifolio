import {
    FaCode,
    FaLaptopCode,
    FaRocket,
    FaMobileAlt
} from "react-icons/fa";

import useReveal from "../hooks/useReveal";

function Services() {

    useReveal();

    return (

        <section className="services" id="services">

            <div className="services-title reveal">

                <span>
                    SERVIÇOS
                </span>

                <h2>
                    O que posso construir para o seu negócio
                </h2>

                <p>
                    Soluções digitais com visual profissional, estrutura clara
                    e caminhos simples para o visitante entrar em contato.
                </p>

            </div>

            <div className="services-cards">

                <div className="service-card reveal">
                    <div className="service-icon">
                        <FaCode />
                    </div>

                    <h3>
                        Site institucional
                    </h3>

                    <p>
                        Páginas para apresentar sua empresa, serviços, diferenciais
                        e canais de contato com credibilidade.
                    </p>
                </div>

                <div className="service-card reveal">
                    <div className="service-icon">
                        <FaLaptopCode />
                    </div>

                    <h3>
                        Landing page
                    </h3>

                    <p>
                        Uma página objetiva para campanhas, captação de leads,
                        orçamentos e vendas pelo WhatsApp.
                    </p>
                </div>

                <div className="service-card reveal">
                    <div className="service-icon">
                        <FaRocket />
                    </div>

                    <h3>
                        Otimização
                    </h3>

                    <p>
                        Melhorias de velocidade, SEO básico, responsividade e
                        clareza visual em sites que já existem.
                    </p>
                </div>

                <div className="service-card reveal">
                    <div className="service-icon">
                        <FaMobileAlt />
                    </div>

                    <h3>
                        Sistema web
                    </h3>

                    <p>
                        Painel, cadastro, área administrativa, autenticação e
                        recursos sob medida para a rotina do negócio.
                    </p>
                </div>

            </div>

            <div className="process-section reveal" id="processo">
                <div className="process-heading">
                    <span>PROCESSO</span>
                    <h2>Como o projeto sai do papel</h2>
                </div>

                <div className="process-grid">
                    <div className="process-card">
                        <strong>01</strong>
                        <h3>Entendimento</h3>
                        <p>Conversamos sobre objetivo, público, referências e o que o site precisa gerar.</p>
                    </div>

                    <div className="process-card">
                        <strong>02</strong>
                        <h3>Proposta</h3>
                        <p>Defino escopo, páginas, funcionalidades, prazo e valor antes de começar.</p>
                    </div>

                    <div className="process-card">
                        <strong>03</strong>
                        <h3>Desenvolvimento</h3>
                        <p>Crio a interface responsiva, integro contatos e preparo a publicação.</p>
                    </div>

                    <div className="process-card">
                        <strong>04</strong>
                        <h3>Entrega</h3>
                        <p>Você recebe o site publicado, revisado e com suporte inicial para ajustes.</p>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default Services;
