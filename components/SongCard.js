import Image from "next/image";
import style from "@/styles/SongCard.module.scss"
import { useState } from "react";
import { useContext } from "react";
import AppContext from "@/context/AppContext";

const SongCard = ({song}) => {
    const context = useContext(AppContext)
    const [added,setAdded] = useState(context.state.songCardFlag[song._id])
    function handleClick(){

        if (!added){
            setAdded(true)
            context.setSongList([...context.state.songList,...[song]])
            context.setSongCardFlag[song._id](true)
            context.setCoins(context.state.coins-1)
        }else{
            setAdded(false)
            context.setSongCardFlag[song._id](false)
            context.setCoins(context.state.coins+1)
        }
        
    }
    return (
        <>
        
        <div className={style.container}
        style={added?{backgroundColor:"#91f291"}:{}}
        >
            <Image className={style.imgContainer} src={song.img} height={60} width={60} alt={"cover"}></Image>
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