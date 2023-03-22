import Image from "next/image";
import style from "@/styles/SongCard.module.scss"
import { useState } from "react";
import { useContext } from "react";
import AppContext from "@/context/AppContext";

const SongCard = ({song}) => {
    const context = useContext(AppContext)
    const [added,setAdded] = useState(false)
    function handleClick(){

        added?
        setAdded(false):
        setAdded(true);

    }
    return (
        <>
        
        <div className={style.container}
        style={added?{backgroundColor:"#DDDDDD"}:{}}
        >
            <Image className={style.imgContainer} src={song.img} height={60} width={60}></Image>
            <div className={style.info}>
                <h1>{song.title}</h1>
                <p>{song.artist}</p>
            </div>
            <div
            className={style.addButton}
            onClick={handleClick}
            >
                <div className={added?style.minus:style.plus}/>
                <div className={added?style.minus:style.plus}/>
            </div>
        </div>

        </>
    );
}
 
export default SongCard;