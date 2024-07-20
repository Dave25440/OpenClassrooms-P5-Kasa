import { Link } from "react-router-dom";
import housingList from "../../data/housingList.json";
import styles from "./Card.module.scss";

const Card = () => {
    return (
        <>
            {housingList.map((housing) => (
                <Link
                    to={`/logement/${housing.id}`}
                    key={housing.id}
                    className={styles.cardblock}
                >
                    <article>
                        <img
                            src={housing.cover}
                            alt={housing.title}
                            className={styles.cardblock__cover}
                        />
                        <p className={styles.cardblock__title}>
                            {housing.title}
                        </p>
                    </article>
                </Link>
            ))}
        </>
    );
};

export default Card;
