import style from '@/styles/Home.module.scss'
import SongCard from '@/components/SongCard'
import { useContext } from 'react'
import AppContext from '@/context/AppContext'

export default function Home() {
  const context = useContext(AppContext)
  console.log(context.state.songCardFlag)

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
      Object.keys(context.state.songCardFlag).map((_id,index)=>(
        <p key={"p"+_id}>{_id} {context.state.songCardFlag[_id]?"True":"False"}</p> 
        ))
      }
      


    </div>
  )
}
