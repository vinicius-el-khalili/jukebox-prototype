import style from '@/styles/Home.module.scss'
import SongCard from '@/components/SongCard'
import { useContext } from 'react'
import AppContext from '@/context/AppContext'

export default function Profile() {
  const context = useContext(AppContext)
  return (
    <div className={style.container}>
      <div className={style.userImg} />
    </div>
  )
}
