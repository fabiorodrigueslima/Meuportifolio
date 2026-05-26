import minhaFoto from "../assets/images/minha-foto.jpg";

function Home() {
    return (
        <main className="home" id="home">
            <div className="home-bg home-bg-one"></div>
            <div className="home-bg home-bg-two"></div>

            <section className="home-container">
                <div className="home-image-area">
                    <div className="home-photo-box">
                        <img src={minhaFoto} alt="Foto de Fábio Rodrigues" />
                    </div>

                    <div className="home-badge">
                        Atendimento direto pelo WhatsApp
                    </div>
                </div>

                <div className="home-content">
                    <span className="home-subtitle">DESENVOLVEDOR FULL STACK</span>

                    <h1>
                        Sites profissionais para negócios que querem vender mais.
                    </h1>

                    <p>
                        Sou Fábio Rodrigues. Crio sites, landing pages e sistemas web
                        com foco em velocidade, boa apresentação e contato fácil com o
                        cliente pelo WhatsApp.
                    </p>

                    <div className="home-actions">
                        <a href="#projetos" className="btn-primary">
                            Ver trabalhos
                        </a>

                        <a href="#contato" className="btn-secondary">
                            Pedir orçamento
                        </a>
                    </div>

                    <div className="home-stats">
                        <div>
                            <strong>4+</strong>
                            <span>Projetos publicados</span>
                        </div>

                        <div>
                            <strong>7d</strong>
                            <span>Início rápido</span>
                        </div>

                        <div>
                            <strong>100%</strong>
                            <span>Mobile first</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
