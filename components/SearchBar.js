import Image from "next/image"
import style from "@/styles/SearchBar.module.scss"

import { useState, useContext } from "react"
import AppContext from "@/context/AppContext"


export default function SearchBar(){

    const context = useContext(AppContext)
    const [value,setValue] = useState("")
    const [songList,setSongList] = useState([])

    const onChange = (event)=>{
        console.log("---------------------------------------------------------")
        setValue(event.target.value.toLowerCase())
        const s = search()
    }

    const search = () => {
        const result = context.songs.filter(song => {
            console.log(song.title,value,song.title.toLowerCase().includes(value))
            return song.title.includes(value)
        })
        return result
    }

    return(
        <>
        
        <div className={style.container}>
            <input type="text" onChange={onChange} className={style.input} />
            <div className={style.svg}>
                <Image src={"/search.svg"} height={30} width={30} alt="lupa"/>
            </div>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
            
        </div>

        </>
    )
}