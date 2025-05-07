type QNode<T> = {
  value: T,
  next?: QNode<T>
}
export default class Queue<T> {
  public length: number;
  private head?: QNode<T>;
  private tail?: QNode<T>;

  constructor() {
    this.length = 0;
  }

  enqueue(item: T): void {

    if(!this.head){
      // Linked list contains no items
      this.head = {
        value: item,
      }
    }else{
      // Enqueue at the tail
      if(!this.tail){
        // If the tail is not set, then no elements will point to it
        // So we must point the head to it
        this.tail = {
          value: item,
        }
        this.head.next = this.tail;
      } else{
        // Append at the tail and update the tail
        const newTail = {
          value: item,
        }
        this.tail.next = newTail;
        this.tail = newTail
      }
    }
    this.length += 1;
  }

  deque(): T | undefined {
    // Dequeue from the head of the list
    if (this.head){
      const h = this.head
      if(h == this.tail){
        // Feel like we should remove the tail reference to this as well
        this.tail = undefined
      }
      this.head = this.head.next
      this.length -= 1
      return h.value
    }else{
      return undefined
    }
    
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
