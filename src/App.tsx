import { useState } from 'react'
import './App.css'
import Tile from './Tile'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Disco Dance Floor</h1>
          <Tile explored occupiers={['player']} />
          <Tile explored occupiers={['flag']} />
          <Tile explored occupiers={['mine']} />
          <Tile explored occupiers={['goal']} />
          <Tile explored hint={1} />
          <Tile explored hint={4} />
          <Tile explored />
          <Tile />
    </div>
  )
}

export default App
