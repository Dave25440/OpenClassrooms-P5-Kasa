import styles from "./Banner.module.scss";

const Banner = () => {
    return (
        <aside className={styles.bannerblock}>
            <p className={styles.bannerblock__text}>
                Chez vous, partout et ailleurs
            </p>
        </aside>
    );
};

export default Banner;
