import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../../assets/kasa-logo.png";
import SmallLogo from "../../assets/kasa-logo-small.png";

const Header = () => {
    return (
        <header className={styles.headblock}>
            <picture>
                <source srcset={SmallLogo} media="(max-width: 375px)" />
                <img src={Logo} alt="Kasa" />
            </picture>
            <nav>
                <Link
                    to="/"
                    className={`${styles.headblock__link} ${styles["headblock__link--underline"]}`}
                >
                    Accueil
                </Link>
                <Link to="/a-propos" className={styles.headblock__link}>
                    À Propos
                </Link>
            </nav>
        </header>
    );
};

export default Header;
