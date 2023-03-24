import Image from "next/image"
import style from "@/styles/SearchBar.module.scss"

import { useState, useContext } from "react"
import AppContext from "@/context/AppContext"

export default function SearchBar(){
    const context = useContext(AppContext)
    const onChange = (e) => {
        var lowerCase = e.target.value.toLowerCase()
        console.log(lowerCase)
    }
    return(
        <>
        
        <div className={style.container}>
            <input type="text" onChange={onChange} className={style.input} />
            <div className={style.svg}>
            </div>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
        </div>

        </>
    )
}