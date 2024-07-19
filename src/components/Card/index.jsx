import styles from "./Card.module.scss";

const Card = () => {
    return (
        <article className={styles.cardblock}>
            <p className={styles.cardblock__title}>Titre de la location</p>
        </article>
    );
};

export default Card;
