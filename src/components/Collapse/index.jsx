import aboutList from "../../data/aboutList.json";
import styles from "./Collapse.module.scss";

const Collapse = () => {
    return (
        <>
            {aboutList.map((about) => (
                <li key={about.id} className={styles.collapsebar}>
                    <h2 className={styles.collapsebar__title}>{about.title}</h2>
                    <p className={styles.collapsebar__text}>
                        {about.description}
                    </p>
                </li>
            ))}
        </>
    );
};

export default Collapse;
