import { IStack } from '../types'

export class ArrayStack<T> implements IStack<T> {
  private items: T[]
  private top: T | null

  constructor() {
    this.items = []
    this.top = null
  }

  push(data: T): IStack<T> {
    this.items.push(data)
    this.top = data
    return this
  }

  pop(): T | null {
    if (!this.isEmpty()) {
      if (this.items.length == 1) this.top = null
      else this.top = this.items[this.items.length - 2]

      return this.items.pop() || null
    } else {
      return null
    }
  }

  isEmpty(): boolean {
    return this.size() <= 0
  }

  getTop(): T | null {
    if (this.isEmpty()) return null
    return this.top
  }

  size(): number {
    return this.items.length
  }
}