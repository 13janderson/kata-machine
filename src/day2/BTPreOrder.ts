function pre_order_rec(curr: BinaryNode<number> | null, visited: number[]) : void{
  if(!curr) {
    return
  }
  visited.push(curr.value)
  pre_order_rec(curr.left, visited)
  pre_order_rec(curr.right, visited)
}
export default function pre_order_search(head: BinaryNode<number>): number[] {
  let visited = [] as number[]
  pre_order_rec(head, visited)
  return visited
}
