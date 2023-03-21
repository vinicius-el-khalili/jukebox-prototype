import style from "@/styles/Layout.module.scss"
import Navbar from "./Navbar";
import NavButton from "./NavButton";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className={style.pageContainer}>
                {children}
            </div>
            <Footer/>
        </>
    );
}
 
export default Layout;