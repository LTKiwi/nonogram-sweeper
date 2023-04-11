import { useState } from 'react'
import './App.css'
import Grid from './Grid'


const initialGrid = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
];

function App() {
  const [list, setList] = useState(
    initialList
  );
  

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
          <Grid />
    </div>
  )
}

export default App
