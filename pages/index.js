import style from '@/styles/Home.module.scss'
import SongCard from '@/components/SongCard'
import { useContext } from 'react'
import AppContext from '@/context/AppContext'
import Image from 'next/image'

export default function Home() {
  const context = useContext(AppContext)
  var myPlaylist = []
  Object.keys(context.state.songCardFlag).map((key,index)=>{
    //console.log(key,context.state.songCardFlag[key],parseInt(key))
    if (context.state.songCardFlag[key]){
      //console.log(context.songs[key])
      myPlaylist = [...myPlaylist, ...[context.songs[key-1]]]
      //console.log(myPlaylist)
    }
  })

  return (
    <div className={style.container}>
      
      <div className={style.userCard}>
        <div className={style.userName}>Username</div>
        <div className={style.userCoins}>
          <p>Fichas:</p>
          <p>{context.state.coins}</p>
        </div>
      </div>

      {myPlaylist.length === 0 ? "":(
        <h1 style={{padding:"2.5rem"}}>Fila</h1>
      )}

      <div className={style.myPlaylist} >
      {  
        myPlaylist.map( song => (

          <div className={style.queuedSong} key={"queue_" + song._id}>

            <Image src={song.img} height={50} width={50} alt={"img"+song._id} />
            <div className={style.textContainer}>
              <p className={style.title}>{song.title}</p>
              <p className={style.artist}>{song.artist}</p>
            </div>

          </div>
          
        ))
      }
      </div>

    </div>
  )
}
