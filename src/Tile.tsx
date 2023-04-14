import './Tile.css'
import { useState } from 'react';
import { randomColor, Tile, Occupier } from './utils';

function TileComponent({ occupier, hint, explored, player }: Tile) {
    const [tile, setTile] = useState({
        occupier: occupier === undefined ? '' : Occupier[occupier],
        hint: hint,
        explored: explored ? randomColor() : 'black',
        player: player ? 'player' : ''
    })
    function handleClick() {

    }

  return (
      <div onClick={handleClick}
          className={`tile ${tile.occupier} ${tile.player}`}
          style={{ backgroundColor: tile.explored  }}>
          {/*{tile.hint>0 && tile.hint}  */}
      </div>
  )
}

export default TileComponent
