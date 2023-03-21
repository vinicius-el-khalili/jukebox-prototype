import style from "@/styles/Navbar.module.scss"
import NavButton from "./NavButton";
const Navbar = () => {
    return ( <>
    
        <div className={style.navBarContainer}>
            <h2 className={style.navTitle}>JukeBurger</h2>
            <NavButton activate={false}/>
        </div>

    </> );
}

export default Navbar;