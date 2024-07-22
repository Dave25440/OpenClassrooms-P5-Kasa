import { useEffect } from "react";
import Banner from "../../components/Banner";
import CollapseContainer from "../../components/CollapseContainer";

const About = () => {
    useEffect(() => {
        document.title = "Kasa - À Propos";
    }, []);

    return (
        <>
            <Banner />
            <CollapseContainer />
        </>
    );
};

export default About;
