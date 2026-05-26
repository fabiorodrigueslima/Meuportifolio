import logo from "../../assets/images/Logo-Portifolio.png";

function Navbar() {
    return (
        <header className="navbar">

            <div className="navbar-container">

                <a className="navbar-logo" href="/Home" aria-label="Ir para o início">
                    <img
                        src={logo}
                        alt="Logo Fábio Rodrigues"
                        className="logo-img"
                    />
                </a>

                <nav aria-label="Navegação principal">
                    <ul className="navbar-menu">

                        <li>
                            <a href="#services">Serviços</a>
                        </li>

                        <li>
                            <a href="#projetos">Projetos</a>
                        </li>

                        <li>
                            <a href="#processo">Processo</a>
                        </li>

                        <li>
                            <a href="#sobre">Sobre</a>
                        </li>

                        <li>
                            <a href="#contato">Contato</a>
                        </li>

                    </ul>
                </nav>

                <a
                    href="#contato"
                    className="navbar-button"
                >
                    Pedir orçamento
                </a>

            </div>

        </header>
    );
}

export default Navbar;
