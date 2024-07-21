import { useEffect } from "react";
import Banner from "../../components/Banner";
import CardContainer from "../../components/CardContainer";

const Home = () => {
    useEffect(() => {
        document.title = "Kasa - Chez vous, partout et ailleurs";
    }, []);

    return (
        <>
            <Banner />
            <CardContainer />
        </>
    );
};

export default Home;
