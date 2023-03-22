import style from "@/styles/Navbar.module.scss"
import { useState } from "react";

import NavButton from "./NavButton";

const Navbar = () => {
    const [mode,setMode] = useState(false)
    function toggle(){
        mode?
        setMode(false):
        setMode(true)
    }
    return ( <>
    
        <div className={style.navBarContainer}>
            <h2 className={style.navTitle}>
                JukeBox
            </h2>
            <NavButton activate={mode} handle={toggle}/>
        </div>
        <div className={
            mode?
            style.navMenuOn:style.navMenuOff
        }>

            <div className={style.menuButton}>Logout</div>
        </div>

    </> );
}

export default Navbar;