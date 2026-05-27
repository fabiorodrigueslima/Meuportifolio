import useReveal from "../hooks/useReveal";

const projects = [
    {
        category: "Rede social",
        name: "Postfan",
        description: "Plataforma social com feed, curtidas, comentários, perfil de usuário e salas virtuais.",
        result: "Projeto com foco em comunidade, interação e experiência logada.",
        techs: ["React", "Node", "UX"],
        href: "#",
        tone: "blue"
    },
    {
        category: "Site institucional",
        name: "Ecolimpo",
        description: "Site para cooperativa com serviços, coleta seletiva e conteúdo de educação ambiental.",
        result: "Presença digital mais clara para apresentar serviços e gerar contato.",
        techs: ["SEO", "Responsivo", "Institucional"],
        href: "https://site-ecolimpo.vercel.app/",
        tone: "green"
    },
    {
        category: "Vitrine comercial",
        name: "Enlace das Arteiras",
        description: "Site para divulgar produtos artesanais, serviços criativos e canais de atendimento.",
        result: "Organização visual para mostrar produtos e facilitar conversas com clientes.",
        techs: ["Vitrine", "WhatsApp", "Mobile"],
        href: "https://enlacedasarteiras.com.br",
        tone: "rose"
    },
    {
        category: "E-commerce",
        name: "RustiCerrado",
        description: "Loja virtual em desenvolvimento com catálogo, carrinho, checkout e área do cliente.",
        result: "Estrutura preparada para vender online com jornada simples de compra.",
        techs: ["Catálogo", "Checkout", "Cliente"],
        href: "https://rusticerrado.vercel.app/",
        tone: "gold"
    }
];

function Projects() {
    useReveal();

    return (
        <section className="projects" id="projetos">

            <div className="projects-title reveal">
                <span>PROJETOS</span>

                <h2>Trabalhos que mostram o que eu entrego</h2>

                <p>
                    Cada projeto abaixo representa um tipo de solução que posso
                    adaptar para empresas, marcas pessoais, lojas e serviços locais.
                </p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`project-card reveal project-${project.tone}`}
                        key={project.name}
                    >
                        <div className="project-preview" aria-hidden="true">
                            <div className="preview-bar"></div>
                            <div className="preview-hero"></div>
                            <div className="preview-lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <div className="project-content">
                            <span>{project.category}</span>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>

                            <strong>{project.result}</strong>

                            <div className="project-tags">
                                {project.techs.map((tech) => (
                                    <small key={tech}>{tech}</small>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>

        </section>
    );
}

export default Projects;
