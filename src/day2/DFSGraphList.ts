function dfs_recursive(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]): boolean{
  if (seen[curr]){
    return false
  }

  seen[curr] = true
  path.push(curr)
  if (curr == needle){
    return true
  }
  
  const edges = graph[curr]
  for (let i = 0; i < edges.length; i++){
    const edge = edges[i]
    if(dfs_recursive(graph, edge.to, needle, seen, path)){
      return true
    }
  }

  path.pop()
  return false
}
export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
  // dfs for a needle in an adjacency list graph
  // visit a node and then immediately visit its children
  // stop when a node has no children
  let seen: boolean[] = []
  for (let i = 0; i < graph.length; i++){
    seen[i] = false
  }
  let path: number[] = []

  const search = dfs_recursive(graph, source, needle, seen, path)
  if(search){
    return path
  }
  return null

}
