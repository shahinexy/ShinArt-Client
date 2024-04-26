import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";
import ThemeToggle from './../components/ThemeToggle';


const Root = () => {
    return (
        <div>
            <ThemeToggle></ThemeToggle>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;