import { useState } from 'react'
import './App.css'
import Tile from './Tile'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Disco Dance Floor</h1>
          <Tile /> <Tile /> <Tile /><Tile /><Tile /><Tile /><Tile />
    </div>
  )
}

export default App
