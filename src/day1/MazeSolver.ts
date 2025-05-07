// Returns whether we've reached the end or not
function move(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean{

  // Out of bounds  
  if (curr.y >= maze.length || curr.y < 0){
    return false
  }else if (curr.x >= maze[0].length  || curr.x < 0){
    // Assuming maze has equal length rows for now
    return false
  }

  // We are on a wall
  if (maze[curr.y][curr.x] == wall){
    return false
  }
  
  // We've already been there
  if (seen[curr.y][curr.x]){
    return false
  }

  // We are at the end
  if (curr.x == end.x && curr.y == end.y){
    path.push(end)
    return true
  }

  seen[curr.y][curr.x] = true
  path.push(curr)

  // Recursive case is to explore in each direction
  const moveUp = move(maze, wall, {
    x: curr.x, y: curr.y - 1
  }, end, seen, path)
  if(moveUp) {
    return true 
  }

  const moveDown = move(maze, wall, {
    x: curr.x, y: curr.y + 1
  }, end, seen, path)
  if (moveDown){
    return true
  }

  const moveRight = move(maze, wall, {
    x: curr.x + 1, y: curr.y 
  }, end, seen, path)
  if(moveRight){
    return true
  }

  const moveLeft = move(maze, wall, {
    x: curr.x - 1, y: curr.y 
  }, end, seen, path)
  if(moveLeft){
    return true
  }

  path.pop()

  return false

}
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

  let seen: boolean[][] = []
  let path: Point[] = []

  move(maze, wall, start, end, seen, path)

  return path

}
