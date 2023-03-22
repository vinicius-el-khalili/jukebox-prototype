import style from '@/styles/Home.module.scss'
import SongCard from '@/components/SongCard'
import { useContext } from 'react'
import AppContext from '@/context/AppContext'

export default function Home() {
  const context = useContext(AppContext)
  return (
    <div className={style.container}>
      {context.songs.map(song=>{
        return(
          <SongCard song={song} key={"songCard_"+song._id}/>
          )
      })}
    </div>
  )
}
