import './Tile.css'
import { randomColor } from './utils';

function Tile() {

    const props = {
        text: ':)',
        classes: ['player','mine','hidden','goal']
    }

  return (
      <div className="tile"
          style={{ backgroundColor: randomColor() }}>
          <h1>{props.text}</h1>
      </div>
  )
}

export default Tile
