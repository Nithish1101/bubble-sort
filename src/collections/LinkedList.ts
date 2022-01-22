import { Sorter } from '../Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const newNode = new Node(data);

    if (this.head == null) {
      this.head = newNode;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = newNode;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let size = 0;
    let ptr: Node | null = this.head;

    while (ptr) {
      size++;
      ptr = ptr?.next;
    }

    return size;
  }

  at(index: number): Node {
    if (!this.head) {
      throw Error("Index out of bounds!");
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw Error("Index out of bounds!");

    // let ptr: Node = this.head;
    // for (let i = 0; i < index; i++)
    //   if (ptr.next != null) ptr = ptr.next;
    //   else throw Error("Index out of bounds!");
    // return ptr;
  }

  compare(i: number, j: number): boolean {
    if (!this.head){
      throw new Error('List is empty');
    }

    return this.at(i).data > this.at(j).data;
  }

  swap(i: number, j: number): void {
      const leftNode = this.at(i);
      const rightNode = this.at(j);

      const temp = leftNode.data;
      leftNode.data = rightNode.data;
      rightNode.data = temp;
  }

  print(): void {
    if(!this.head) {
      console.log("Empty List!")
    }      
    
    let node: Node | null = this.head;
    while(node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
