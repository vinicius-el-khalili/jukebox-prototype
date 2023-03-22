import style from '@/styles/Home.module.scss'
import SongCard from '@/components/SongCard'
import { useContext } from 'react'
import AppContext from '@/context/AppContext'

export default function Home() {
  const context = useContext(AppContext)
  return (
    <div className={style.container}>
      
      <div className={style.userCard}>
        <div className={style.userImg} />
        <div className={style.userName}>Username</div>
        <div className={style.userCoins}>
          <p>Fichas:</p>
          <p>{context.state.coins}</p>
        </div>
      </div>

      {context.state.songList.map(song=>( <p key={"queued_"+song._id} >{song.title},{song.artist}</p> ))}


    </div>
  )
}
