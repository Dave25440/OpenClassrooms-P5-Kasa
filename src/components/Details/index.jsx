import Collapse from "../Collapse";
import styles from "./Details.module.scss";
import StarActive from "../../assets/star-active.svg";
import StarInactive from "../../assets/star-inactive.svg";

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
    const rate = [1, 2, 3, 4, 5];

    return (
        <section className={styles.detailsgrid}>
            <div className={styles.detailsgrid__titleblock}>
                <h1 className={styles.detailsgrid__title}>{title}</h1>
                <p className={styles.detailsgrid__location}>{location}</p>
            </div>
            <figure className={styles.detailsgrid__host}>
                <figcaption className={styles.detailsgrid__hostname}>
                    {hostName}
                </figcaption>
                <img
                    src={hostPicture}
                    alt={hostName}
                    className={styles.detailsgrid__hostpicture}
                />
            </figure>
            <ul className={styles.detailsgrid__list}>
                <li>
                    <ul className={styles.detailsgrid__tags}>
                        {tags.map((tag) => (
                            <li className={styles.detailsgrid__tag}>{tag}</li>
                        ))}
                    </ul>
                </li>
                <Collapse
                    title="Description"
                    titleClass="collapsebar__title--details"
                    content={description}
                />
            </ul>
            <ul className={styles.detailsgrid__list}>
                <li className={styles.detailsgrid__rating}>
                    {rate.map((rateValue) =>
                        rating >= rateValue ? (
                            <img src={StarActive} alt="Étoile active" />
                        ) : (
                            <img src={StarInactive} alt="Étoile inactive" />
                        )
                    )}
                </li>
                <Collapse
                    title="Équipements"
                    titleClass="collapsebar__title--details"
                    content={
                        <ul className={styles.detailsgrid__equipments}>
                            {equipments.map((equipment) => (
                                <li>{equipment}</li>
                            ))}
                        </ul>
                    }
                />
            </ul>
        </section>
    );
};

export default Details;
