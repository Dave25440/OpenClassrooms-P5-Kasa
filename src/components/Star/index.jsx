import StarActive from "../../assets/star-active.svg";
import SmallStarActive from "../../assets/star-active-small.svg";
import StarInactive from "../../assets/star-inactive.svg";
import SmallStarInactive from "../../assets/star-inactive-small.svg";

const Star = ({ active }) => {
    return active ? (
        <picture>
            <source srcSet={SmallStarActive} media="(max-width: 768px)" />
            <img src={StarActive} alt="Étoile active" />
        </picture>
    ) : (
        <picture>
            <source srcSet={SmallStarInactive} media="(max-width: 768px)" />
            <img src={StarInactive} alt="Étoile inactive" />
        </picture>
    );
};

export default Star;
