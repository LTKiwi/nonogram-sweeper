# nonogram-sweeper
Lizzie's Crossing Clone
https://eslee.itch.io/lizzi-crossing
https://nonogram-sweeper.netlify.app/


TODO:
PHASE ONE
- [x] Set up React.js
  - [x] https://scrimba.com/articles/create-react-app-with-vite/  
- [ ] Create Tile Component
- [ ] Create grid of Tile Components
- [ ] Change display of tile Components based on properties
- [x] Deploy on glitch.io or some other platform


PHASE TWO 
- [ ] Functions for Tile Components
  - [ ] Expose: Makes a tile hidden:false, like stepping on a tile or beginning on map
  - [ ] Marker: Puts a symbol on a tile, like flagging or question mark when clicked
  - [ ] Player: Makes a tile player:true, for movement about map.
  - [ ] Initialize: set the properties of a tile - random(blank or mine), path (start,end,??guaranteed safe path of forced blanks??)

PHASE THREE
- [ ] Figure out how to guarantee a safe path. Gonna need a CompSci degree for this. 
  - [ ] One way is to check if there is a path without obstacles(randomly generated), though this normally assumes starting in a corner (start is not random) based on the content I'm seeing.
    - [ ] https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/
    - [ ] https://brilliant.org/wiki/rectangular-grid-walk-no-restriction/
    - [ ] https://www.geeksforgeeks.org/unique-paths-in-a-grid-with-obstacles/
    - [ ] https://mathsathome.com/number-of-paths-algorithm/
    - [ ] https://www.hackerrank.com/challenges/grid-walking/problem
    - [ ] https://leetcode.com/problems/unique-paths-iii/solutions/1535158/Python-Backtracking:-Easy-to-understand-with-Explanation/
    - [ ] https://www.geeksforgeeks.org/find-shortest-safe-route-in-a-path-with-landmines/
    - [ ] https://www.hackerearth.com/practice/notes/dynamic-programming-problems-involving-grids/
  - [ ] Could start by generating a random walk, with everything on it guaranteed as a blank (start and end random) and then letting the rest of the grid be random. Seems easier to develop.
- [ ] Trigger Tile Component functions via input - have a global variable of "coordinates" for the players location which is changed by arrow keys
- [ ] Create border component which is a nonogram counter. It counts consecutive runs of mines down each axis of grid.
- [ ] Create life counter and points/level display
