function in_order_rec(curr: BinaryNode<number> | null, visited: number[]): void{
  if(!curr){
    return
  }
  in_order_rec(curr.left, visited)
  visited.push(curr.value)
  in_order_rec(curr.right, visited)
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  let visited = [] as number[]
  in_order_rec(head, visited)
  return visited
}
