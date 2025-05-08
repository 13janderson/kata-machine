export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
  // curr is the node we are at, who's weights are at graph[curr].
  // graph[curr][i] is the weight of the edge from curr to node i

  // bfs we can do iteratively with a queue
  let visited: number[] = []

  visited.push(source)

  const seen: boolean[] = []
  const prev: number[] = []
  for (let i = 0; i < graph.length; i++){
    seen[i] = false
    prev[i] = -1
  }


  // Until no more nodes or we find the thing we are looking for
  while(visited.length > 0 && !(seen[needle])){
    // Visit the nodes of the first node in the queue
    const node = visited.pop()
    if (node == null){
      continue
    }

    const edges = graph[node]
    for(let i = 0; i < edges.length; i++){
      const edge = edges[i]
      if (edge == 0){
        // Assuming zero means no edge exists between curretn node and node i
        continue
      }

      if(seen[i]){
        continue 
      }

      visited.push(i)
      seen[i] = true
      prev[i] = node
    }

  }

  if(seen[needle]){
    const path = backtrack_to_start(needle, prev)
    // console.log(prev)
    // console.log(path)
    return path
  }

  return null

}

// Returns the path from backtracking
function backtrack_to_start(curr:number, prev: number[]): number[]{
  // Took me 15 mins to debug this error here, prev[curr] = -1 will always be true
  // thanks for warning me about that TypeScript..... NOT
  if(prev[curr] == -1){
    return [curr]
  }

  return backtrack_to_start(prev[curr], prev).concat([curr])
}
