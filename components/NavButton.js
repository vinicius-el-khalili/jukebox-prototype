import style from "@/styles/NavButton.module.scss"

const NavButton = ({activate}) => {
    return (
        <div className={
            activate?
            `${style.navButtonContainer} ${style.on}`:
            style.navButtonContainer
        }>
            <div className={style.bar}/>
            <div className={style.bar}/>
            <div className={style.bar}/>
        </div>
    );
}
 
export default NavButton;