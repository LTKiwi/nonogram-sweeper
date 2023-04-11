export function randomColor() {
    const colors = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), 0.3]
  return (
      `rgba(${colors.join()})`
  )
}

//const array: number[] = Array(10) // array size is 10
//    .fill(undefined)
//    .map(() => Math.floor(50 * Math.random())); // numbers from 0-50 (exclusive)


