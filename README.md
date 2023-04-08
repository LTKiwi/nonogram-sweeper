# nonogram-sweeper
Lizzie's Crossing Clone


TODO:
PHASE ONE
- Set up React.js
- Create Tile Component
- Create grid of Tile Components
- Change display of tile Components based on properties
- Deploy on glitch.io or some other platform

PHASE TWO 
- Functions for Tile Components
  - Expose: Makes a tile hidden:false, like stepping on a tile or beginning on map
  - Marker: Puts a symbol on a tile, like flagging or question mark when clicked
  - Player: Makes a tile player:true, for movement about map.
  - Initialize: set the properties of a tile - random(blank or mine), path (start,end,??guaranteed safe path of forced blanks??)

PHASE THREE
- Figure out how to guarantee a safe path. Gonna need a CompSci degree for this. Make a random walk start at random location?
- Trigger Tile Component functions via input - have a global variable of "coordinates" for the players location which is changed by arrow keys
- Create border component which is a nonogram counter. It counts consecutive runs of mines down each axis of grid.
- Create life counter and points/level display
