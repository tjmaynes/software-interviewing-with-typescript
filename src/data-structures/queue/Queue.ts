import { DoublyLinkedList } from '../linked-list'
import { ILinkedList, IQueue } from '../types'

export class Queue<T> implements IQueue<T> {
  private items: ILinkedList<T>

  constructor() {
    this.items = new DoublyLinkedList<T>()
  }

  enqueue(element: T): boolean {
    this.items.insertAtTail(element)
    return true
  }

  dequeue(): boolean {
    if (this.isEmpty()) return false

    this.items.deleteAtHead()

    return true
  }

  getFront(): T | null {
    const head = this.items.getHead()
    return head != null ? head.data : null
  }

  getTail(): T | null {
    const tail = this.items.getTail()
    return tail != null ? tail.data : null
  }

  isEmpty(): boolean {
    return this.items.isEmpty()
  }

  size(): number {
    return this.items.size()
  }

  toList(): T[] {
    return this.items.toList()
  }
}
