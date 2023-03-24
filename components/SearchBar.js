import Image from "next/image"
import style from "@/styles/SearchBar.module.scss"

import { useState, useContext } from "react"
import AppContext from "@/context/AppContext"

import List from "./List"

export default function SearchBar(){
    const context = useContext(AppContext)
    const [results,setResults] = useState(context.songs)
    const onChange = (e) => {
        var lowerCase = e.target.value.toLowerCase()
        let search = context.songs.filter( song => {
            return song.title.toLowerCase().includes(lowerCase)||song.artist.toLowerCase().includes(lowerCase)
        })
        setResults(search)
    }

    return(
        <div className={style.container}>
        
            <div className={style.barContainer}>
                <input type="text" onChange={e=>onChange(e)} className={style.input} />
                <div className={style.svg}>
                    <Image src={"/search.svg"} height={30} width={30} alt="lupa"/>
                </div>  
            </div>
    
            <div className={style.songsContainer}>
                <List searchResults={results} />
            </div>

        </div>
    )
}