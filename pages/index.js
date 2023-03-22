import style from '@/styles/Home.module.scss'
import SongCard from '@/components/SongCard'
import { useContext } from 'react'
import AppContext from '@/context/AppContext'

export default function Home() {
  const context = useContext(AppContext)
  return (
    <div className={style.container}>
      <button onClick={()=>{context.setSongList(["yo","nice"])}}>{context.state.songList}</button>
      <SongCard song={"Push"} artist={"Madonna"}/>
      <SongCard song={"Redbone"} artist={"Childish Gambino"}/>
      <SongCard song={"American Brazilian Indian Boy"} artist={"Estelle feat. Kanye West"}/>
      <SongCard song={"Heart to Heart"} artist={"Mac DeMarco"}/>
      <SongCard song={"Push"} artist={"Madonna"}/>
      <SongCard song={"Redbone"} artist={"Childish Gambino"}/>
      <SongCard song={"American Brazilian Indian Boy"} artist={"Estelle feat. Kanye West"}/>
      <SongCard song={"Heart to Heart"} artist={"Mac DeMarco"}/>
      <SongCard song={"Push"} artist={"Madonna"}/>
      <SongCard song={"Redbone"} artist={"Childish Gambino"}/>
      <SongCard song={"American Brazilian Indian Boy"} artist={"Estelle feat. Kanye West"}/>
      <SongCard song={"Heart to Heart"} artist={"Mac DeMarco"}/>
    </div>
  )
}
