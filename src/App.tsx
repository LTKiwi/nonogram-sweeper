import { useState } from 'react'
import './App.css'
import Grid from './Grid'
import { initializeGrid, Tile } from './utils';



function App() {
    const [grid, setGrid] = useState(initializeGrid);
    

  return (
    <div className="App">
      <h1>Disco Dance Floor</h1>
          <Grid grid={grid} />
    </div>
  )
}

export default App
