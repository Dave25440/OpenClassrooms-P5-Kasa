import aboutList from "../../data/aboutList.json";
import Collapse from "../Collapse";
import styles from "./CollapseContainer.module.scss";

const CollapseContainer = () => {
    return (
        <section>
            <ul className={styles.collapselist}>
                {aboutList.map((about) => (
                    <Collapse
                        key={about.id}
                        title={about.title}
                        content={<p>{about.content}</p>}
                    />
                ))}
            </ul>
        </section>
    );
};

export default CollapseContainer;
