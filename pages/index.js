import style from '@/styles/Home.module.scss'
import SongCard from '@/components/SongCard'

export default function Home() {
  return (
    <div className={style.container}>
      <SongCard song={"Push Me"} artist={"Madonna"}/>
      <SongCard song={"Redbone"} artist={"Childish Gambino"}/>
      <SongCard song={"American Boy"} artist={"Estelle feat. Kanye West"}/>
      <SongCard song={"Heart to Heart"} artist={"Mac DeMarco"}/>
    </div>
  )
}
