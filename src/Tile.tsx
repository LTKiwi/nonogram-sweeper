import './Tile.css'
import { useState } from 'react';
import { randomColor, Tile, Occupier } from './utils';

function TileComponent({ occupier, hint, explored, player }: Tile) {
    const [tile, setTile] = useState({
        occupier: occupier,
        hint: hint,
        explored: explored,
        player: player,
        flag: false
    })

    function handlePlayerVisit() {
        if (!tile.explored) {
            setTile({
                ...tile,
                explored: true
            })
        }
    }

    function handleClick() {
        handlePlayerVisit()
    }

    function handleFlag() {
        setTile({
            ...tile,
            flag: !tile.flag
        })
    }


    return (
      <div onClick={handleClick}
            className={`tile ${tile.occupier === undefined || !tile.explored ? '' : Occupier[tile.occupier]} ${tile.player ? 'player' : ''} ${tile.flag ? 'Flag': ''}`}
            style={{ backgroundColor: tile.explored ? randomColor() : 'black'  }}>
          {/*{tile.hint>0 && tile.hint}  */}
      </div>
  )
}

export default TileComponent
