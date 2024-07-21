import { useEffect } from "react";
import Banner from "../../components/Banner";

const About = () => {
    useEffect(() => {
        document.title = "Kasa - À Propos";
    }, []);

    return (
        <>
            <Banner />
        </>
    );
};

export default About;
