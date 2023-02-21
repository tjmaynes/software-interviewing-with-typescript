import { DoublyLinkedList } from '../linked-list'
import { IStack } from '../types'

export class LinkedListStack<T> implements IStack<T> {
  private items: DoublyLinkedList<T>
  private top: T | null

  constructor() {
    this.items = new DoublyLinkedList<T>()
    this.top = null
  }

  push(element: T): IStack<T> {
    this.items.insertAtHead(element)
    this.top = element
    return this
  }

  pop(): T | null {
    if (this.isEmpty()) return null
    if (this.items.getHead()?.next != null) {
      if (this.items.deleteAtHead()) {
        const oldTop = this.top
        this.top = this.items.getHead()?.data || null
        return oldTop
      } else {
        this.top = null
        return null
      }
    }
    return null
  }

  isEmpty(): boolean {
    return this.size() <= 0
  }

  getTop(): T | null {
    if (this.isEmpty()) return null
    return this.top
  }

  size(): number {
    return this.items.size()
  }
}
