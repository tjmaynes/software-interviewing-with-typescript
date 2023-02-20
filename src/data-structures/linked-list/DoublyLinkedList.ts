import { ILinkedList, ListNode } from "../types"

export class DoublyLinkedList<T> implements ILinkedList<T> {
  private head: ListNode<T> | null
  private tail: ListNode<T> | null
  private length: number
  
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  insertAtHead(data: T): this {
    const newHead = new ListNode(data);
    newHead.next = this.head;
    this.head = newHead;

    if (this.tail == null)
      this.tail = newHead;

    this.length += 1;

    return this;
  }

  insertAtTail(data: T): this {
    let newTail = new ListNode(data);
    if (this.tail == null) {
      this.head = newTail;
      this.tail = newTail;
      this.length += 1;
      return this;
    }

    const previousNode = this.tail;
    previousNode.next = newTail;
    newTail.prev = previousNode;
    this.tail = newTail;

    this.length += 1;
    return this;
  }

  search(data: T): boolean {
    let currentNode = this.getHead();
    while (currentNode != null) {
      if (currentNode.data == data) return true;
      currentNode = currentNode.next;
    }

    return false;
  }

  delete(data: T): boolean {
    console.log(this);
    if (this.isEmpty()) return false;

    let currentNode = this.getHead();
    while (currentNode != null && currentNode.next != null) {
      if (currentNode.next.data == data) {
        const nextNode = currentNode.next.next;
        if (nextNode?.prev) {
          nextNode.prev = currentNode.next;
        }

        currentNode.next = nextNode;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  deleteAtHead(): boolean {
    throw new Error("Method not implemented.")
  }

  removeDuplicates(): this {
    throw new Error("Method not implemented.")
  }

  union(list: ILinkedList<T>): ILinkedList<T> {
    throw new Error("Method not implemented.")
  }

  nthNodeFromLast(n: number): ListNode<T> | null {
    throw new Error("Method not implemented.")
  }

  getHead(): ListNode<T> | null {
    return this.head
  }

  getTail(): ListNode<T> | null {
    return this.tail
  }

  size(): number {
    return this.length
  }

  isEmpty(): boolean {
    return this.head == null;
  }

  toList(): T[] {
    const result = [];
    let currentNode = this.getHead()

    while (currentNode != null) {
      result.push(currentNode.data)
      currentNode = currentNode.next
    }

    return result;
  }
}
