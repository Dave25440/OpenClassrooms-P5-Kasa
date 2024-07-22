import housingList from "../../data/housingList.json";
import Card from "../Card";
import styles from "./CardContainer.module.scss";

const CardContainer = () => {
    return (
        <section className={styles.cardsection}>
            {housingList.map((housing) => (
                <Card
                    key={housing.id}
                    id={housing.id}
                    title={housing.title}
                    cover={housing.cover}
                />
            ))}
        </section>
    );
};

export default CardContainer;
