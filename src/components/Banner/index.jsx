import styles from "./Banner.module.scss";

const Banner = () => {
    return (
        <aside className={styles.bannerblock}>
            <h1 className={styles.bannerblock__text}>
                Chez vous, partout et ailleurs
            </h1>
        </aside>
    );
};

export default Banner;
