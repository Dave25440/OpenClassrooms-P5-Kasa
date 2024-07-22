import aboutList from "../../data/aboutList.json";

const Collapse = () => {
    return (
        <>
            {aboutList.map((about) => (
                <li key={about.id}>
                    <h2>{about.title}</h2>
                    <p>{about.description}</p>
                </li>
            ))}
        </>
    );
};

export default Collapse;
