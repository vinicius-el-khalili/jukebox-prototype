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

      { 
        Object.keys(context.state.songCardFlag).map((_id,index)=>{
          if (context.state.songCardFlag[_id]){
            let song = context.songs.filter(s=>{return context.songs[parseInt(_id)]._id ===_id})
            console.log("hmm")
            return(
              <div key={"kwp"+_id}>
                Hey
              </div>
            )
          }
        }) 
      
      }

    </div>
  )
}
