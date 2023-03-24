import style from '@/styles/Songs.module.scss'
import { useContext } from 'react'
import AppContext from '@/context/AppContext'

import SearchBar from '@/components/SearchBar'

export default function Home() {
  const context = useContext(AppContext)
  return (
    <div className={style.container}>
      <SearchBar/>
    </div>
  )
}
