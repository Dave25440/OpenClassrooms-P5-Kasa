import Collapse from "../Collapse";
import styles from "./Details.module.scss";
import StarActive from "../../assets/star-active.svg";
import SmallStarActive from "../../assets/star-active-small.svg";
import StarInactive from "../../assets/star-inactive.svg";
import SmallStarInactive from "../../assets/star-inactive-small.svg";

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
            <ul className={styles.detailsgrid__tags}>
                {tags.map((tag) => (
                    <li className={styles.detailsgrid__tag}>{tag}</li>
                ))}
            </ul>
            <div className={styles.detailsgrid__rating}>
                {rate.map((rateValue) =>
                    rating >= rateValue ? (
                        <picture>
                            <source
                                srcSet={SmallStarActive}
                                media="(max-width: 768px)"
                            />
                            <img src={StarActive} alt="Étoile active" />
                        </picture>
                    ) : (
                        <picture>
                            <source
                                srcSet={SmallStarInactive}
                                media="(max-width: 768px)"
                            />
                            <img src={StarInactive} alt="Étoile inactive" />
                        </picture>
                    )
                )}
            </div>
            <ul className={styles.detailsgrid__collapses}>
                <Collapse
                    title="Description"
                    titleClass="collapsebar__title--medium"
                    content={description}
                />
                <Collapse
                    title="Équipements"
                    titleClass="collapsebar__title--medium"
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
