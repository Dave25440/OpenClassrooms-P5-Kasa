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
                <li className={styles.detailsgrid__tags}>{tags}</li>
                <Collapse title="Description" content={description} />
            </ul>
            <ul className={styles.detailsgrid__list}>
                <li className={styles.detailsgrid__rating}>{rating}</li>
                <Collapse title="Équipements" content={equipments} />
            </ul>
        </section>
    );
};

export default Details;
