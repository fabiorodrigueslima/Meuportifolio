import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt
} from "react-icons/fa";

import {
    SiPostgresql,
    SiVite
} from "react-icons/si";

import useReveal from "../hooks/useReveal";

function Technologies() {

    useReveal();

    return (

        <section
            className="technologies"
            id="tecnologias"
        >

            <div className="technologies-title reveal">

                <span>
                    TECNOLOGIAS
                </span>

                <h2>
                    Ferramentas que uso para entregar projetos modernos
                </h2>

                <p>
                    Trabalho com tecnologias atuais para criar sites rápidos,
                    interfaces responsivas, sistemas web e integrações sob medida.
                </p>

            </div>

            <div className="technologies-grid">

                <div className="tech-card reveal">
                    <FaHtml5 />
                    <span>HTML5</span>
                </div>

                <div className="tech-card reveal">
                    <FaCss3Alt />
                    <span>CSS3</span>
                </div>

                <div className="tech-card reveal">
                    <FaJs />
                    <span>JavaScript</span>
                </div>

                <div className="tech-card reveal">
                    <FaReact />
                    <span>React</span>
                </div>

                <div className="tech-card reveal">
                    <FaNodeJs />
                    <span>Node.js</span>
                </div>

                <div className="tech-card reveal">
                    <SiPostgresql />
                    <span>PostgreSQL</span>
                </div>

                <div className="tech-card reveal">
                    <FaGitAlt />
                    <span>Git</span>
                </div>

                <div className="tech-card reveal">
                    <SiVite />
                    <span>Vite</span>
                </div>

            </div>

        </section>

    );
}

export default Technologies;
