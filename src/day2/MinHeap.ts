import { createLessThan, readConfigFile } from "typescript";

export default class MinHeap {
  public length: number;
  private heap: number[] 

  constructor() {
    this.heap = []
    this.length = 0
  }

  debug(){
    console.log(this.heap)
    console.log(this.length)
  }

  insert(value: number): void {
    // Insert at next available position which is given by the length
    this.heap[this.length] = value
    this.bubble_up(this.length)
    this.length += 1
  }

  delete(): number {
    if (this.length == 0){
      return -1
    }
    const min = this.heap[0]
    // Use last inserted element as new root in heap
    this.heap[0] = this.heap[this.length - 1]
    this.heap.pop() // Remove last element from the end
    this.length -= 1
    this.sift_down(0)

    return min
  }


  private parent(idx: number){
    return Math.floor((idx / 2))
  }
  private left_child(idx: number): number{
    return 2*idx + 1
  }

  private right_child(idx: number): number{
    return 2*idx + 2
  }

  private swap(src_idx: number, dst_idx: number){
    const tmp = this.heap[src_idx]
    this.heap[src_idx] = this.heap[dst_idx]
    this.heap[dst_idx] = tmp
  }

  private bubble_up(idx: number): void{
    if (idx == 0){
      return
    }
    // bubbles up starting at idx in heap
    const node = this.heap[idx]
    const parent_index = this.parent(idx)
    const parent_node = this.heap[parent_index]
    if(node >= parent_node){
      // node is already in an okay place
      return
    }else{
      // node is greater than its parent
      // swap node and parent
      this.swap(idx, parent_index)
      this.bubble_up(parent_index)
    }
  }

  private sift_down(idx: number): void{
    if(idx >= this.length){
      return
    }
    // sift down startign at idx in heap
    // want to sift down if an item is currently greater than its children
    const node = this.heap[idx]
    const left_child_idx = this.left_child(idx)
    const right_child_idx = this.right_child(idx)
    const left_child = this.heap[left_child_idx]
    const right_child = this.heap[right_child_idx]

    var smallest_child: number
    var smallest_child_idx: number 
    // Handle left and right children being null
    if(left_child == null && right_child == null){
      // Cannot sift down any more
      return
    }else if(left_child != null && right_child == null){
      // We only have left child
      smallest_child = left_child
      smallest_child_idx = left_child_idx
    }else{
      if (left_child < right_child){
        smallest_child = left_child
        smallest_child_idx = left_child_idx
      }else{
        smallest_child = right_child
        smallest_child_idx = right_child_idx
      }
    }

    if (node > smallest_child){
      // swap with smallest
      this.swap(idx, smallest_child_idx)
      this.sift_down(smallest_child_idx)
    }

    return
  }

}

// var heap = new MinHeap()
// heap.insert(7)
// heap.debug()
// heap.insert(2)
// heap.debug()
// heap.insert(1)
// heap.debug()
// heap.delete()
// heap.debug()
// heap.insert(0)
// heap.debug()
// heap.delete()
// heap.debug()
