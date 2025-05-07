export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  // Implicitly we are using a stack when doing dfs (in order traversal)
  // We can do a BFS where we explore each level of the tree from left to right using a queue
  // where visit an item and then enqueue it's children on the queue

  const queue: BinaryNode<number>[] = [head]

  // Pop off the queue and push children
  while(queue.length > 0){
    const node = queue.pop()
  
    if (!node){
      continue
    }

    if(node.value == needle){
      return true
    }

    if(node.left){ 
      queue.push(node.left)
    }
    if(node.right){ 
      queue.push(node.right)
    }
  }

  return false

}
