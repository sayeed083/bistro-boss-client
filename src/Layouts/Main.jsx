import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {

    const location = useLocation();

    const noHeader = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            {noHeader || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeader || <Footer></Footer>}
        </div>
    );
};

export default Main;