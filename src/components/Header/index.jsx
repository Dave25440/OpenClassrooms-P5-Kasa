import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../../assets/kasa-logo.png";
import SmallLogo from "../../assets/kasa-logo-small.png";

const Header = () => {
    return (
        <header className={styles.headblock}>
            <picture>
                <source srcSet={SmallLogo} media="(max-width: 375px)" />
                <img src={Logo} alt="Kasa" />
            </picture>
            <nav>
                <ul className={styles.headblock__list}>
                    <li>
                        <Link
                            to="/"
                            className={`${styles.headblock__link} ${styles["headblock__link--underline"]}`}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/a-propos" className={styles.headblock__link}>
                            À Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
