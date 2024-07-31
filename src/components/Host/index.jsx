import styles from "./Host.module.scss";

const Host = ({ name, picture }) => {
    return (
        <>
            <figcaption className={styles.hostname}>{name}</figcaption>
            <img src={picture} alt={name} className={styles.hostpicture} />
        </>
    );
};

export default Host;
