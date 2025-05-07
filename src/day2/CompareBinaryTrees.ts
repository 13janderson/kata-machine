export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  // console.log("a")
  // console.log(a)
  // console.log("b")
  // console.log(b)

  if (a == null && b == null){ 
    return true
  }

  if (a == null || b == null){
    return false
  }

  // Have to do it this way so that we always compare at the leaf level
  // rather than comparing the intial values
  if (a.value != b.value){
    return false
  }

  return compare(a.left, b.left) && compare(a.right, b.right)
}
