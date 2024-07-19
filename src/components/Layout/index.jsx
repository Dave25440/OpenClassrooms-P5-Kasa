import Header from "../Header";
import Footer from "../Footer";
import "./Layout.module.scss";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
