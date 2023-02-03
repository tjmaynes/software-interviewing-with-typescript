import { SinglyLinkedListNode } from '../linked-list/SinglyLinkedList'

export class MyLinkedListStack {
  constructor() {
    this._top = null
    this._bottom = null
    this._length = 0
  }

  peek() {
    if (this._length <= 0) return null
    return this._top.value
  }

  push(item) {
    if (!item) return

    if (!this._top) {
      this._top = new SinglyLinkedListNode(item, null)
      this._bottom = this._top
    } else {
      let oldTop = this._top
      this._top = new SinglyLinkedListNode(item, oldTop)
    }

    this._length += 1
  }

  pop() {
    if (!this._top) return null

    let oldTop = this._top
    let top = this._top.next
    this._top = top

    this._length -= 1

    return oldTop.value
  }

  size() {
    return this._length
  }
}
