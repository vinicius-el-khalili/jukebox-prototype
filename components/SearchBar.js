import Image from "next/image"
import style from "@/styles/SearchBar.module.scss"

import { useState, useContext } from "react"
import AppContext from "@/context/AppContext"

const FilteredList = ({songList}) => {
    return (
        <>
        
        {
            songList.map( song => (
                <div key={"9r5h"+song._id}>
                    <p>{song.title}</p>
                </div>
            ))
        }

        </>
    )
}

export default function SearchBar(){

    const context = useContext(AppContext)
    const [value,setValue] = useState("")
    const [songList,setSongList] = useState([])

    const onChange = (event)=>{
        setValue(event.target.value.toLowerCase())
        console.log(value)
        const result = search()
        setSongList(result)
    }

    const search = () => {
        const result = context.songs.filter(song => {
            if (value==""){
                return false
            }
            return song.title.includes(value)
        })
        return result
    }

    return(
        <>
        
        <div className={style.container}>
            <input type="text" onChange={onChange} className={style.input} />
            <div className={style.svg}>
                <Image src={"/search.svg"} height={30} width={30} alt="icon" />
            </div>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
            <FilteredList songList={songList} />
        </div>

        </>
    )
}