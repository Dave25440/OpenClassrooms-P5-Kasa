import styles from "./Tag.module.scss";

const Tag = ({ text }) => {
    return <li className={styles.tagblock}>{text}</li>;
};

export default Tag;
