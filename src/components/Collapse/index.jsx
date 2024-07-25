import { useState } from "react";
import styles from "./Collapse.module.scss";
import ChevronUp from "../../assets/chevron-up.svg";
import SmallChevronUp from "../../assets/chevron-up-small.svg";

const Collapse = ({ title, titleClass, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className={styles.collapsebar}>
            <h2
                className={`${styles.collapsebar__title} ${
                    titleClass && styles[titleClass]
                }`}
            >
                {title}
                <button
                    className={`${styles.collapsebar__button} ${
                        isOpen && styles["collapsebar__button--open"]
                    }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <picture>
                        <source
                            srcSet={SmallChevronUp}
                            media="(max-width: 768px)"
                        />
                        <img src={ChevronUp} alt="Bouton d'affichage" />
                    </picture>
                </button>
            </h2>
            <div
                className={`${styles.collapsebar__wrapper} ${
                    isOpen && styles["collapsebar__wrapper--open"]
                }`}
            >
                <p className={styles.collapsebar__text}>{content}</p>
            </div>
        </li>
    );
};

export default Collapse;
