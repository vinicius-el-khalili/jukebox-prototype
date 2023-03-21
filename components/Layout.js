import style from "@/styles/Layout.module.scss"
import Navbar from "./Navbar";
import NavButton from "./NavButton";
const Layout = ({children}) => {
    return (
        <>
        <Navbar/>
        <div className={style.layoutContainer}>
            {children}
        </div>
        </>
    );
}
 
export default Layout;