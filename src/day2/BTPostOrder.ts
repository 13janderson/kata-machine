function post_order_rec(curr: BinaryNode<number> | null, visited: number[]): void {
  if (!curr){
    return
  }

  post_order_rec(curr.left, visited)
  post_order_rec(curr.right, visited)
  visited.push(curr.value)

}
export default function post_order_search(head: BinaryNode<number>): number[] {
  let visited = [] as number[]
  post_order_rec(head, visited)
  return visited

}
