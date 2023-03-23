import Image from "next/image"
import style from "@/styles/SearchBar.module.scss"
import { useState } from "react"

export default function SearchBar(){

    const [value,setValue] = useState("")
    const onChange = (event)=>{
        setValue(event.target.value)
    }
    return(
        <>
        
        <div className={style.container}>
            <input type="text" value={value} onChange={onChange} className={style.input} />
            <div className={style.svg}>
                <Image src={"/search.svg"} height={30} width={30}/>
            </div>
        </div>

        </>
    )
}