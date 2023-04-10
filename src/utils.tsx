export function randomColor() {
    const colors = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
  return (
      `rgb(${colors[0]} ${colors[1]} ${colors[2]})`
  )
}


