import './Tile.css'
import { randomColor } from './utils';

function TileComponent({ occupiers=[''], hint=0, explored=false }) {

  return (
      <div className={`tile ${occupiers.join(' ') }`}
          style={{ backgroundColor: explored? randomColor() : 'black'  }}>
          {hint>0 && hint}  
      </div>
  )
}

export default TileComponent
