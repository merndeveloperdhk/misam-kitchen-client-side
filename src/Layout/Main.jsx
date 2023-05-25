import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Navbar/NavBar";
 


const Main = () => {
    /* const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') */
    return (
        <div>
            {/* {noHeaderFooter || <NavBar></NavBar>} */}
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;