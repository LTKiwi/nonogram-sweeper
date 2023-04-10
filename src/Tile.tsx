import './Tile.css'
import { randomColor } from './utils';

function Tile({ occupiers=[''], hint=0 }) {

  return (
      <div className={`tile ${occupiers.join(' ') }`}
          style={{ backgroundColor: randomColor() }}>
          {hint>0 && hint}  
      </div>
  )
}

export default Tile
