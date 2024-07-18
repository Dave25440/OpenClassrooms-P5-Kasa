import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">À Propos</Link>
            </nav>
        </header>
    );
};

export default Header;
