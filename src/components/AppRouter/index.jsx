import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Housing from "../../pages/Housing";
import Error from "../Error";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/logement/:id" element={<Housing />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
