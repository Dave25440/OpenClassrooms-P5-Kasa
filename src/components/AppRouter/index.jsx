import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Housing from "../../pages/Housing";
import Error from "../Error";

const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/logement/:id" element={<Housing />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;
