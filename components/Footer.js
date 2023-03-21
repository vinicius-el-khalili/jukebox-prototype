import style from "@/styles/Footer.module.scss"
import Image from "next/image"

const Footer = () => {
    const iconSize = 25
    return (
        <>

        <div className={style.container}>    

            <div className={style.icon}>
                <Image src={"/home.svg"} width={iconSize} height={iconSize}/>
                Home
            </div>

            <div className={style.icon}>
                <Image src={"/search.svg"} width={iconSize} height={iconSize}/>
                Procurar
            </div>
            
            <div className={style.icon}>
                <Image src={"/library.svg"} width={iconSize} height={iconSize}/>
                Músicas
            </div>

        </div>
        
        </>
    );
}
 
export default Footer;