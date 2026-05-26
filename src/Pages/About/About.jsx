import minhaFoto from "../../assets/images/minha-foto.jpg";

import {
    FaLaptopCode,
    FaLightbulb,
    FaRocket
} from "react-icons/fa";

import useReveal from "../../hooks/useReveal";

function About() {

    useReveal();

    return (

        <section
            className="about"
            id="sobre"
        >

            <div className="about-image reveal">

                <div className="about-image-box">

                    <img
                        src={minhaFoto}
                        alt="Fábio Rodrigues"
                    />

                </div>

            </div>

            <div className="about-content reveal">

                <span>
                    SOBRE MIM
                </span>

                <h2>
                    Um desenvolvedor que pensa em site como ferramenta de venda
                </h2>

                <p>
                    Meu foco é criar experiências digitais que parecem profissionais,
                    carregam bem no celular e deixam claro o próximo passo do visitante:
                    conhecer o serviço, confiar na marca e chamar para conversar.
                </p>

                <div className="about-cards">

                    <div className="about-card reveal">

                        <FaLaptopCode />

                        <h3>
                            Estrutura clara
                        </h3>

                        <p>
                            Organizo o conteúdo para o cliente entender rápido
                            quem você é, o que oferece e como contratar.
                        </p>

                    </div>

                    <div className="about-card reveal">

                        <FaLightbulb />

                        <h3>
                            Visual sob medida
                        </h3>

                        <p>
                            Crio interfaces alinhadas ao tipo de negócio, sem
                            depender de aparência genérica de template.
                        </p>

                    </div>

                    <div className="about-card reveal">

                        <FaRocket />

                        <h3>
                            Entrega objetiva
                        </h3>

                        <p>
                            Trabalho com etapas simples, revisão durante o processo
                            e publicação preparada para uso real.
                        </p>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default About;
