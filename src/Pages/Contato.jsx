import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedinIn, FaGithub, FaArrowRight, FaFileAlt } from "react-icons/fa";
import useReveal from "../hooks/useReveal";
import { SOCIAL_LINKS, WHATSAPP_URL } from "../data/portfolio";

const contacts = [
  { icon: FaWhatsapp, title: "WhatsApp", text: "Converse comigo agora", href: WHATSAPP_URL },
  { icon: FaEnvelope, title: "E-mail", text: "fabiorodrigues.programasao@gmail.com", href: SOCIAL_LINKS.email },
  { icon: FaLinkedinIn, title: "LinkedIn", text: "linkedin.com/in/fabioprogramacao", href: SOCIAL_LINKS.linkedin },
  { icon: FaGithub, title: "GitHub", text: "github.com/fabiorodrigueslima", href: SOCIAL_LINKS.github },
];

function Contato() {
  useReveal();
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const update = ({ target }) => setForm((current) => ({ ...current, [target.name]: target.value }));
  const submit = (event) => { event.preventDefault(); const text = `Olá Fábio! Meu nome é ${form.nome.trim()}.\n\nE-mail: ${form.email.trim()}\n\n${form.mensagem.trim()}`; window.open(`https://wa.me/5561984882881?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer"); };

  return (
    <section className="contact section" id="contato">
      <div className="contact-intro reveal"><span>VAMOS CONVERSAR?</span><h2>Tem um projeto ou uma oportunidade?</h2><p>Conte o que você precisa resolver. Posso conversar sobre sites, sistemas, APIs, automações, trabalho como desenvolvedor ou uma possível parceria.</p><a className="btn btn-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" /> Falar com Fábio no WhatsApp</a></div>
      <div className="contact-content">
        <div className="contact-links reveal">
          {contacts.map(({ icon: Icon, title, text, href }) => <a className="contact-card" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} key={title}><div className="contact-icon"><Icon aria-hidden="true" /></div><div><strong>{title}</strong><span>{text}</span></div><FaArrowRight className="contact-arrow" aria-hidden="true" /></a>)}
          <a className="contact-card" href="#curriculo"><div className="contact-icon"><FaFileAlt aria-hidden="true" /></div><div><strong>Currículo</strong><span>Acessar opções do currículo</span></div><FaArrowRight className="contact-arrow" aria-hidden="true" /></a>
        </div>
        <form className="contact-form reveal" onSubmit={submit}><h3>Inicie uma conversa</h3><p className="form-help">Ao enviar, sua mensagem será preparada e aberta no WhatsApp.</p><label htmlFor="nome">Nome</label><input id="nome" name="nome" value={form.nome} onChange={update} autoComplete="name" placeholder="Como posso te chamar?" required /><label htmlFor="email">E-mail</label><input id="email" type="email" name="email" value={form.email} onChange={update} autoComplete="email" placeholder="voce@exemplo.com" required /><label htmlFor="mensagem">Mensagem</label><textarea id="mensagem" name="mensagem" value={form.mensagem} onChange={update} placeholder="Conte brevemente sobre o projeto ou oportunidade..." required></textarea><button type="submit">Continuar no WhatsApp <FaWhatsapp aria-hidden="true" /></button></form>
      </div>
    </section>
  );
}

export default Contato;
