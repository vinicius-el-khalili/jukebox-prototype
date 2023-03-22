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
          <SongCard song={song.title} artist={song.artist} key={"songCard_"+song._id} img={song.img} />
          )
      })}
    </div>
  )
}
