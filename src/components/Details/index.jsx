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
            <ul>
                <li>
                    <h1>{title}</h1>
                    <p>{location}</p>
                </li>
                <li>{tags}</li>
                <Collapse title="Description" content={description} />
            </ul>
            <ul>
                <li>
                    <figure>
                        <img src={hostPicture} alt={hostName} />
                        <figcaption>{hostName}</figcaption>
                    </figure>
                </li>
                <li>{rating}</li>
                <Collapse title="Équipements" content={equipments} />
            </ul>
        </section>
    );
};

export default Details;
