import { IDoublyLinkedList } from '../types'
import { DoublyLinkedList } from '../linked-list'

export class Graph {
  private readonly vertices: number
  private readonly list: IDoublyLinkedList<number>[]

  constructor(vertices: number) {
    this.vertices = vertices

    this.list = []
    for (let i = 0; i < vertices; i++)
      this.list.push(new DoublyLinkedList())
  }

  addEdge(source: number, destination: number) {
    if (source < this.vertices && destination < this.vertices) {
        this.list[source].insertAtHead(source)
    }
  }
}
