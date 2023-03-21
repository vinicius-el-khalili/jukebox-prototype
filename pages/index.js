import style from '@/styles/Home.module.scss'
import SongCard from '@/components/SongCard'

export default function Home() {
  return (
    <div className={style.container}>
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
