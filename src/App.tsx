import { useState } from 'react'
import './App.css'
import Grid from './Grid'
import { initializeGrid, Tile } from './utils';



function App() {
  const [grid, setGrid] = useState(initializeGrid);
    console.log("Hi")
    console.log(grid);

  return (
    <div className="App">
      <h1>Disco Dance Floor</h1>
          {/*<Tile explored occupiers={['player']} />*/}
          {/*<Tile explored occupiers={['flag']} />*/}
          {/*<Tile explored occupiers={['mine']} />*/}
          {/*<Tile explored occupiers={['goal']} />*/}
          {/*<Tile explored hint={1} />*/}
          {/*<Tile explored hint={4} />*/}
          {/*<Tile explored />*/}
          {/*<Tile />*/}
          <Grid grid={grid} />
    </div>
  )
}

export default App
