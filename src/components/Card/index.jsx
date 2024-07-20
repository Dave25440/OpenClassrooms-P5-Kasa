import housingList from "../../data/housingList.json";
import styles from "./Card.module.scss";

const Card = () => {
    return (
        <>
            {housingList.map((housing) => (
                <article key={housing.id} className={styles.cardblock}>
                    <p className={styles.cardblock__title}>{housing.title}</p>
                </article>
            ))}
        </>
    );
};

export default Card;
