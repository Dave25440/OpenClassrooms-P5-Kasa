import Host from "../Host";
import Tag from "../Tag";
import Star from "../Star";
import Collapse from "../Collapse";
import styles from "./Details.module.scss";

const Details = ({
    title,
    description,
    hostName,
    hostPicture,
    rating,
    location,
    equipments,
    tags
}) => {
    const range = [1, 2, 3, 4, 5];

    return (
        <section className={styles.detailsgrid}>
            <div className={styles.detailsgrid__titleblock}>
                <h1 className={styles.detailsgrid__title}>{title}</h1>
                <p className={styles.detailsgrid__location}>{location}</p>
            </div>
            <figure className={styles.detailsgrid__host}>
                <Host name={hostName} picture={hostPicture} />
            </figure>
            <ul className={styles.detailsgrid__tags}>
                {tags.map((tag, index) => (
                    <Tag key={index} text={tag} />
                ))}
            </ul>
            <div className={styles.detailsgrid__rating}>
                {range.map((rangeValue, index) =>
                    rating >= rangeValue ? (
                        <Star key={index} active={true} />
                    ) : (
                        <Star key={index} active={false} />
                    )
                )}
            </div>
            <ul className={styles.detailsgrid__collapses}>
                <Collapse
                    title="Description"
                    titleClass="collapsebar__title--medium"
                    content={<p>{description}</p>}
                />
                <Collapse
                    title="Équipements"
                    titleClass="collapsebar__title--medium"
                    content={
                        <ul className={styles.detailsgrid__equipments}>
                            {equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    }
                />
            </ul>
        </section>
    );
};

export default Details;
