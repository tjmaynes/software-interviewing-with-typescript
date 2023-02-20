import { DoublyLinkedList } from '../linked-list'
import { IGraph, ILinkedList } from '../types'

export class Graph implements IGraph {
  private readonly vertices: number
  private readonly list: ILinkedList<number>[]

  constructor(vertices: number) {
    this.vertices = vertices
    this.list = []

    for (let i = 0; i < vertices; i++) {
      this.list.push(new DoublyLinkedList())
    }
  }

  addEdge(source: number, destination: number): IGraph {
    if (source < this.vertices && destination < this.vertices) {
      this.list[source].insertAtHead(source)
    }

    return this
  }
}
