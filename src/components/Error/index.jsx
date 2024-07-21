import { useEffect } from "react";

const Error = () => {
    useEffect(() => {
        document.title = "Kasa - Oups! La page que vous demandez n'existe pas.";
    }, []);

    return (
        <div>
            <h1>404</h1>
        </div>
    );
};

export default Error;
