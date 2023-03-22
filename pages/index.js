import style from '@/styles/Home.module.scss'
import SongCard from '@/components/SongCard'
import { useContext } from 'react'
import AppContext from '@/context/AppContext'

export default function Home() {
  const context = useContext(AppContext)
  var myPlaylist = []
  Object.keys(context.state.songCardFlag).map((key,index)=>{
    console.log(key,context.state.songCardFlag[key],parseInt(key))
    if (context.state.songCardFlag[key]){
      console.log(context.songs[key])
      myPlaylist = [...myPlaylist, ...[context.songs[key]]]
      console.log(myPlaylist)
    }
  })

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

      <div className={style.myPlaylist} >
      {
        myPlaylist.map( song => (
          <div className={style.songText} key={"myplaylis_"+song._id}>
            <p>{song.title}</p>
            <div className={style.dot}/>
            <p>{song.artist}</p>
          </div>
        ))
      }
      </div>

    </div>
  )
}
