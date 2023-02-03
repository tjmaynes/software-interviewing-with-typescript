export class MyArrayStack {
  constructor() {
    this._data = []
    this._length = 0
  }

  peek() {
    if (this._length <= 0) return null
    return this._data[0]
  }

  push(item) {
    this._data.unshift(item)
    this._length += 1
  }

  pop() {
    const item = this._data.shift()
    if (!item) return null

    this._length -= 1
    return item
  }

  size() {
    return this._length
  }
}
