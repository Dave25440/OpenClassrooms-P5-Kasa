import { useLocation } from "react-router-dom";
import styles from "./Banner.module.scss";

const Banner = () => {
    const location = useLocation();

    return (
        <aside
            className={`${styles.bannerblock} ${
                location.pathname === "/a-propos" && styles["bannerblock--alt"]
            }`}
        >
            <h1
                className={`${styles.bannerblock__text} ${
                    location.pathname === "/a-propos" &&
                    styles["bannerblock__text--hidden"]
                }`}
            >
                Chez vous, partout et ailleurs
            </h1>
        </aside>
    );
};

export default Banner;
