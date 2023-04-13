export function randomColor() {
    const colors = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), 0.3]
  return (
      `rgba(${colors.join()})`
  )
}

//const array: number[] = Array(10) // array size is 10
//    .fill(undefined)
//    .map(() => Math.floor(50 * Math.random())); // numbers from 0-50 (exclusive)


export enum Occupier {
    Mine,
    Flag,
    Goal
}

export class Tile {
    explored: boolean;
    occupier?: Occupier;
    player: boolean;
    hint?: number;

    constructor() {
        this.explored = false;
        this.occupier = Math.floor(Math.random() * 2); //only Mines and Flags
        this.player = false;
    }
};


export function initializeGrid(rows = 10, cols = 10) {
    

    const grid: Tile[][] = new Array(rows)
        .fill(null)
        .map(() =>
            new Array(cols).fill(null)
        .map(()=> new Tile())//content of Grid
    );
    return grid
}

