import style from "@/styles/Footer.module.scss"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    const iconSize = 25
    return (
        <>

        <div className={style.container}>    

        <Link href={"/"} className={style.link}>
            <div className={style.icon}>
                <Image src={"/home.svg"} width={iconSize} height={iconSize} alt={"icon"} />
                Home
            </div>
        </Link>
        
        <Link href={"/songs"} className={style.link}>
            <div className={style.icon}>
                <Image src={"/library.svg"} width={iconSize} height={iconSize} alt={"icon"} />
                Músicas
            </div>
        </Link>

        </div>
        
        </>
    );
}
 
export default Footer;