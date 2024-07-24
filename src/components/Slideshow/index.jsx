import styles from "./Slideshow.module.scss";
import ChevronLeft from "../../assets/chevron-left.svg";

const Slideshow = ({ title, pictures }) => {
    return (
        <div className={styles.carousel}>
            <img
                src={pictures[0]}
                alt={title}
                className={styles.carousel__slide}
            />
            <div className={styles.carousel__controls}>
                <button
                    className={`${styles.carousel__button} ${styles["carousel__button--left"]}`}
                >
                    <img src={ChevronLeft} alt="Bouton Précédent" />
                </button>
                <button
                    className={`${styles.carousel__button} ${styles["carousel__button--right"]}`}
                >
                    <img src={ChevronLeft} alt="Bouton Suivant" />
                </button>
                <p className={styles.carousel__number}>1/{pictures.length}</p>
            </div>
        </div>
    );
};

export default Slideshow;
