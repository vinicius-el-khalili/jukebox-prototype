import SearchBar from "@/components/SearchBar"
import style from "@/styles/Search.module.scss"

export default function Search(){
    return(
    <div className={style.container}>
        <SearchBar/>
    </div>
    )
}