import TileComponent from './Tile'
import { Tile } from './utils';

interface GridProps {
    grid: Tile[][];
}

function Grid({grid}:GridProps ) {
    const listTiles = grid.map((row: Tile[], index) => (
        <div key={index}>
            Row {index}
            {grid[index].map((tile, column) => (
                <div key={column}>
                    {tile.occupier} {`${tile.explored}`} {`${tile.player}`} {`${tile.hint}`}
                </div>
            ))}

        </div>));
    return (
        <div>
            {listTiles}
      </div>
  )
}

export default Grid
