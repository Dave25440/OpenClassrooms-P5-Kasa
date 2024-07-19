import styles from "./Footer.module.scss";
import WhiteLogo from "../../assets/kasa-white-logo.png";

const Footer = () => {
    return (
        <footer className={styles.footerblock}>
            <img
                src={WhiteLogo}
                alt="Kasa"
                className={styles.footerblock__logo}
            />
            <p>© 2024 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
