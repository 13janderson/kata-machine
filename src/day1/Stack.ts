type Node<T> = {
  value: T,
  prev?: Node<T>,
}

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    // Push an item on the top of the stack
    const h = this.head
    this.head = {
      value : item,
      prev: h
    }
    this.length += 1

  }
  pop(): T | undefined {
    if (this.head){
      const h = this.head;
      this.head = h.prev
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
