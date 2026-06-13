import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedinIn, FaGithub, FaArrowRight } from "react-icons/fa";
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
      <div className="contact-intro reveal"><span>VAMOS CONVERSAR?</span><h2>Seu próximo projeto pode começar agora.</h2><p>Conte um pouco sobre a sua ideia. Vou entender sua necessidade e indicar o melhor caminho para transformar o projeto em uma solução digital eficiente.</p><a className="btn btn-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><FaWhatsapp /> Solicitar orçamento pelo WhatsApp</a></div>
      <div className="contact-content">
        <div className="contact-links reveal">{contacts.map(({ icon: Icon, title, text, href }) => <a className="contact-card" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" key={title}><div className="contact-icon"><Icon /></div><div><strong>{title}</strong><span>{text}</span></div><FaArrowRight className="contact-arrow" /></a>)}</div>
        <form className="contact-form reveal" onSubmit={submit}><h3>Fale sobre o seu projeto</h3><label htmlFor="nome">Nome</label><input id="nome" name="nome" value={form.nome} onChange={update} autoComplete="name" placeholder="Como posso te chamar?" required /><label htmlFor="email">E-mail</label><input id="email" type="email" name="email" value={form.email} onChange={update} autoComplete="email" placeholder="voce@exemplo.com" required /><label htmlFor="mensagem">Mensagem</label><textarea id="mensagem" name="mensagem" value={form.mensagem} onChange={update} placeholder="Conte brevemente sobre o projeto..." required></textarea><button type="submit">Enviar mensagem <FaArrowRight /></button></form>
      </div>
    </section>
  );
}

export default Contato;
