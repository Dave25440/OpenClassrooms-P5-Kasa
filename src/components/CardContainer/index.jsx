import Card from "../Card";
import styles from "./CardContainer.module.scss";

const CardContainer = () => {
    return (
        <section className={styles.cardsection}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
    );
};

export default CardContainer;
