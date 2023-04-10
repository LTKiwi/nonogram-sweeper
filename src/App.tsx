import { useState } from 'react'
import './App.css'
import Tile from './Tile'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Disco Dance Floor</h1>
          <Tile occupiers={['player']} />
          <Tile occupiers={['flag']} />
          <Tile occupiers={['mine']} />
          <Tile occupiers={['goal']} />
          <Tile hint={1} />
          <Tile hint={4} />
          <Tile />
    </div>
  )
}

export default App
