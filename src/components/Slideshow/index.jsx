import { useState } from "react";
import styles from "./Slideshow.module.scss";
import ChevronLeft from "../../assets/chevron-left.svg";
import SmallChevronLeft from "../../assets/chevron-left-small.svg";

const Slideshow = ({ title, pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevIndex = () => {
        setCurrentIndex((index) =>
            index === 0 ? pictures.length - 1 : index - 1
        );
    };

    const nextIndex = () => {
        setCurrentIndex((index) =>
            index === pictures.length - 1 ? 0 : index + 1
        );
    };

    return (
        <div className={styles.carousel}>
            <img
                src={pictures[currentIndex]}
                alt={title}
                className={styles.carousel__slide}
            />
            {pictures.length > 1 && (
                <div className={styles.carousel__controls}>
                    <button
                        className={`${styles.carousel__button} ${styles["carousel__button--left"]}`}
                        onClick={prevIndex}
                    >
                        <picture>
                            <source
                                srcSet={SmallChevronLeft}
                                media="(max-width: 768px)"
                            />
                            <img src={ChevronLeft} alt="Bouton Précédent" />
                        </picture>
                    </button>
                    <button
                        className={`${styles.carousel__button} ${styles["carousel__button--right"]}`}
                        onClick={nextIndex}
                    >
                        <picture>
                            <source
                                srcSet={SmallChevronLeft}
                                media="(max-width: 768px)"
                            />
                            <img src={ChevronLeft} alt="Bouton Suivant" />
                        </picture>
                    </button>
                    <p className={styles.carousel__number}>
                        {currentIndex + 1}/{pictures.length}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Slideshow;
