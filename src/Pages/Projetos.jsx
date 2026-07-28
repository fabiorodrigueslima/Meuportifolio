import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import useReveal from "../hooks/useReveal";

const projects = [
    { name: "Cooperativa Ecolimpo", category: "Site institucional", image: "/project-ecolimpo.svg", problem: "A cooperativa precisava comunicar sua atuação ambiental e tornar seus serviços mais fáceis de conhecer.", description: "Desenvolvi uma presença digital responsiva que organiza informações sobre coleta seletiva, educação ambiental e formas de contato.", role: "Planejamento da interface e desenvolvimento do site.", status: "Publicado", techs: ["React", "CSS", "Vite"], live: "https://site-ecolimpo.vercel.app/" },
    { name: "Enlace das Arteiras", category: "Plataforma criativa", image: "/project-enlace.svg", problem: "O trabalho das artesãs precisava de um espaço digital claro para ganhar visibilidade e aproximar potenciais clientes.", description: "Criei uma experiência responsiva para apresentar o coletivo, valorizar os produtos artesanais e facilitar o contato.", role: "Planejamento da interface e desenvolvimento do site.", status: "Publicado", techs: ["React", "CSS", "UX/UI"], live: "https://enlacedasarteiras.com.br" },
    { name: "Portfólio FábioDev", category: "Marca profissional", image: "/project-portfolio.svg", problem: "Era necessário reunir serviços, conhecimentos e projetos em uma apresentação profissional acessível em qualquer dispositivo.", description: "Estruturei este portfólio para comunicar meu posicionamento, demonstrar soluções desenvolvidas e facilitar novas conversas profissionais.", role: "Estratégia, UX/UI, desenvolvimento e publicação.", status: "Em evolução", techs: ["React", "Vite", "JavaScript"], live: "#inicio", repo: "https://github.com/fabiorodrigueslima/Meuportifolio" },
];

function Projects() {
    useReveal();
    return (
        <section className="projects section" id="projetos">
            <div className="section-heading reveal"><span>PROJETOS</span><h2>Soluções desenvolvidas para necessidades reais</h2><p>Cada projeto parte de um problema de comunicação ou organização e transforma essa necessidade em uma experiência digital clara e funcional.</p></div>
            <div className="projects-grid">
                {projects.map((project) => <article className="project-card reveal" key={project.name}><a className="project-image" href={project.live} target={project.live.startsWith("http") ? "_blank" : undefined} rel={project.live.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={`Visualizar ${project.name}`}><img src={project.image} alt={`Prévia do projeto ${project.name}`} loading="lazy" /></a><div className="project-body"><div className="project-meta"><span className="project-category">{project.category}</span><span className="project-status">{project.status}</span></div><h3>{project.name}</h3><p><strong>Desafio:</strong> {project.problem}</p><p><strong>Solução:</strong> {project.description}</p><p className="project-role"><strong>Minha participação:</strong> {project.role}</p><div className="project-tags" aria-label={`Tecnologias utilizadas em ${project.name}`}>{project.techs.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-actions"><a href={project.live} target={project.live.startsWith("http") ? "_blank" : undefined} rel={project.live.startsWith("http") ? "noopener noreferrer" : undefined}>Ver projeto <FaArrowUpRightFromSquare aria-hidden="true" /></a>{project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="repo-link"><FaGithub aria-hidden="true" /> Código no GitHub</a>}</div></div></article>)}
            </div>
        </section>
    );
}

export default Projects;
