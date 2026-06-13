import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import useReveal from "../hooks/useReveal";

const projects = [
    { name: "Cooperativa Ecolimpo", category: "Site institucional", image: "/project-ecolimpo.svg", description: "Site institucional voltado para educação ambiental, coleta seletiva e apresentação dos serviços da cooperativa.", techs: ["React", "CSS3", "Vite"], live: "https://site-ecolimpo.vercel.app/" },
    { name: "Enlace das Arteiras", category: "Plataforma criativa", image: "/project-enlace.svg", description: "Plataforma criada para valorizar o trabalho das artesãs, divulgar produtos e facilitar o contato com clientes.", techs: ["React", "Responsivo", "UX/UI"], live: "https://enlacedasarteiras.com.br" },
    { name: "Portfólio Pessoal", category: "Marca pessoal", image: "/project-portfolio.svg", description: "Projeto desenvolvido para apresentar meus serviços, habilidades e projetos de forma profissional e estratégica.", techs: ["React", "Vite", "JavaScript"], live: "#inicio", repo: "https://github.com/fabiorodrigueslima/Meuportifolio" },
];

function Projects() {
    useReveal();
    return (
        <section className="projects section" id="projetos">
            <div className="section-heading reveal"><span>PROJETOS</span><h2>Projetos que unem design e propósito</h2><p>Conheça algumas soluções desenvolvidas para criar presença digital, comunicar valor e aproximar marcas de seus públicos.</p></div>
            <div className="projects-grid">
                {projects.map((project) => <article className="project-card reveal" key={project.name}><a className="project-image" href={project.live} target={project.live.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={`Visualizar ${project.name}`}><img src={project.image} alt={`Prévia do projeto ${project.name}`} loading="lazy" /></a><div className="project-body"><span className="project-category">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.techs.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-actions"><a href={project.live} target={project.live.startsWith("http") ? "_blank" : undefined} rel="noreferrer">Ver projeto <FaArrowUpRightFromSquare aria-hidden="true" /></a>{project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="repo-link"><FaGithub aria-hidden="true" /> Repositório</a>}</div></div></article>)}
            </div>
        </section>
    );
}

export default Projects;
