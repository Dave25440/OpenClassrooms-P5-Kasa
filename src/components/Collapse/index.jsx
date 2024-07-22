import aboutList from "../../data/aboutList.json";
import styles from "./Collapse.module.scss";
import ChevronUp from "../../assets/chevron-up.png";

const Collapse = () => {
    return (
        <>
            {aboutList.map((about) => (
                <li key={about.id} className={styles.collapsebar}>
                    <h2 className={styles.collapsebar__title}>{about.title}</h2>
                    <img
                        src={ChevronUp}
                        alt="Bouton d'affichage"
                        className={styles.collapsebar__button}
                    />
                    <p className={styles.collapsebar__text}>
                        {about.description}
                    </p>
                </li>
            ))}
        </>
    );
};

export default Collapse;
