import { FaQuoteLeft, FaStar } from "react-icons/fa";
import useReveal from "../hooks/useReveal";

const testimonials = [
  { text: "Fábio transformou nossas ideias em um site claro, bonito e fácil de navegar. O processo foi muito organizado e o resultado valorizou nosso trabalho.", name: "Equipe Ecolimpo", role: "Cooperativa de reciclagem", initials: "EC" },
  { text: "O projeto conseguiu transmitir a essência do trabalho artesanal e deixou nossos produtos muito mais bem apresentados no ambiente digital.", name: "Enlace das Arteiras", role: "Coletivo de artesãs", initials: "EA" },
  { text: "Profissional atento, comprometido e sempre aberto ao diálogo. Entregou uma solução responsiva e alinhada ao que precisávamos.", name: "Parceiro de projeto", role: "Colaboração profissional", initials: "PP" },
];

function Testimonials() {
  useReveal();
  return <section className="testimonials section" aria-labelledby="testimonials-title"><div className="section-heading reveal"><span>DEPOIMENTOS</span><h2 id="testimonials-title">Confiança construída em cada entrega</h2><p>Parcerias baseadas em escuta, transparência e compromisso com um resultado de qualidade.</p></div><div className="testimonials-grid">{testimonials.map((item) => <article className="testimonial-card reveal" key={item.name}><FaQuoteLeft className="quote-icon" aria-hidden="true" /><div className="stars" aria-label="5 de 5 estrelas">{[1,2,3,4,5].map((star) => <FaStar key={star} />)}</div><blockquote>“{item.text}”</blockquote><div className="testimonial-author"><span>{item.initials}</span><div><strong>{item.name}</strong><small>{item.role}</small></div></div></article>)}</div></section>;
}

export default Testimonials;
