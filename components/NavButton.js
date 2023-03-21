import style from "@/styles/NavButton.module.scss"

const NavButton = ({activate,handle}) => {
    return (
        <div
        className={activate?`${style.navButtonContainer} ${style.on}`:style.navButtonContainer}
        onClick={handle}    
        >
            <div className={style.bar}/>
            <div className={style.bar}/>
            <div className={style.bar}/>
        </div>
    );
}
 
export default NavButton;