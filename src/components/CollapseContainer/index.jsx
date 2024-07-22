import Collapse from "../Collapse";
import styles from "./CollapseContainer.module.scss";

const CollapseContainer = () => {
    return (
        <section>
            <ul className={styles.collapselist}>
                <Collapse />
            </ul>
        </section>
    );
};

export default CollapseContainer;
