function search(curr: BinaryNode<number> | null, needle: number): boolean{
  if(!curr){
    return false
  }

  if(needle < curr.value){
    return search(curr.left, needle)
  }

  if(needle > curr.value){
    return search(curr.right, needle)
  }

  // Not lt or gt must be equal
  return true

}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle)

}
