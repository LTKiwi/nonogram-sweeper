import './Grid.css'
import TileComponent from './Tile'
import { Tile } from './utils';

interface GridProps {
    grid: Tile[][];
}

function Grid({grid}:GridProps ) {
    const listTiles = grid.map((row: Tile[], index) => (
        <div className="row" key={index}>
            {grid[index].map((tile, column) => (
                <TileComponent key={column} {...tile } /> 
            ))}
        </div>));
    return (
        <div className="grid">
            {listTiles}
        </div>
  )
}

export default Grid
