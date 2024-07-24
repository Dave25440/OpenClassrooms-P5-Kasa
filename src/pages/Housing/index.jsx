import { useParams } from "react-router-dom";
import housingList from "../../data/housingList.json";
import Slideshow from "../../components/Slideshow";

const Housing = () => {
    const { id } = useParams();

    return (
        <>
            {housingList.map(
                (housing) =>
                    housing.id === id && (
                        <Slideshow
                            title={housing.title}
                            pictures={housing.pictures}
                        />
                    )
            )}
        </>
    );
};

export default Housing;
