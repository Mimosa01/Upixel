export function gridCoordinates(rowCount: number, cellSize: number) {
  const coordinates = [];

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < rowCount; j++) {
      coordinates.push({y: i * cellSize, x: j * cellSize})
    }
  }

  return coordinates;
}