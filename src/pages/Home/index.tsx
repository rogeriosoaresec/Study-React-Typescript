import { useState } from 'react'
import { NavBar } from '../../componets/NavBar'
import './styles.css'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <NavBar />
        <h1>Managment page</h1>
      </header>

      <div id="container">

      </div>

      <footer>

      </footer>
    </>
  )
}
