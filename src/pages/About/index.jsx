import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        document.title = "Kasa - À Propos";
    }, []);

    return (
        <div>
            <h1>À Propos</h1>
        </div>
    );
};

export default About;
