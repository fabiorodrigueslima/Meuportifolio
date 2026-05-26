import {
    FaPaintBrush,
    FaServer,
    FaMobileAlt,
    FaSearch,
    FaDatabase,
    FaCode
} from "react-icons/fa";

import useReveal from "../hooks/useReveal";

function Skills() {

    useReveal();

    return (

        <section
            className="skills"
            id="habilidades"
        >

            <div className="skills-title reveal">

                <span>
                    DIFERENCIAIS
                </span>

                <h2>
                    O que eu cuido além do visual
                </h2>

                <p>
                    Um bom site precisa ser bonito, mas também precisa ser claro,
                    rápido, fácil de manter e preparado para receber clientes.
                </p>

            </div>

            <div className="skills-grid">

                <div className="skill-card reveal">

                    <div className="skill-icon">
                        <FaPaintBrush />
                    </div>

                    <h3>
                        Interface profissional
                    </h3>

                    <p>
                        Layout com hierarquia, contraste e experiência pensada
                        para quem acessa pelo celular.
                    </p>

                </div>

                <div className="skill-card reveal">

                    <div className="skill-icon">
                        <FaServer />
                    </div>

                    <h3>
                        Back-end sob demanda
                    </h3>

                    <p>
                        APIs, autenticação, formulários, painéis e integrações
                        quando o projeto precisa ir além de páginas estáticas.
                    </p>

                </div>

                <div className="skill-card reveal">

                    <div className="skill-icon">
                        <FaDatabase />
                    </div>

                    <h3>
                        Dados organizados
                    </h3>

                    <p>
                        Modelagem com PostgreSQL para sistemas que precisam
                        guardar cadastros, pedidos ou informações internas.
                    </p>

                </div>

                <div className="skill-card reveal">

                    <div className="skill-icon">
                        <FaMobileAlt />
                    </div>

                    <h3>
                        Responsividade real
                    </h3>

                    <p>
                        Telas adaptadas para celular, tablet e desktop sem
                        quebrar textos, botões ou seções importantes.
                    </p>

                </div>

                <div className="skill-card reveal">

                    <div className="skill-icon">
                        <FaSearch />
                    </div>

                    <h3>
                        Base para SEO
                    </h3>

                    <p>
                        Títulos, descrição, estrutura semântica e performance
                        para o site nascer mais preparado para o Google.
                    </p>

                </div>

                <div className="skill-card reveal">

                    <div className="skill-icon">
                        <FaCode />
                    </div>

                    <h3>
                        Código organizado
                    </h3>

                    <p>
                        Componentes separados, estilos consistentes e estrutura
                        mais simples de evoluir depois da entrega.
                    </p>

                </div>

            </div>

        </section>

    );
}

export default Skills;
