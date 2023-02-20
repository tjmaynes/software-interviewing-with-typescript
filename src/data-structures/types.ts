export class ListNode<T> {
    readonly data: T
    next: ListNode<T> | null
    prev: ListNode<T> | null

    constructor(data: T) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

export interface ILinkedList<T> {
    insertAtHead(data: T): ILinkedList<T>
    insertAtTail(data: T): ILinkedList<T>
    search(data: T): boolean
    delete(data: T): boolean
    deleteAtHead(): boolean
    deleteAtTail(): boolean
    removeDuplicates(): ILinkedList<T>
    union(list: ILinkedList<T>): ILinkedList<T>
    intersection(list: ILinkedList<T>): ILinkedList<T>
    nthNodeFromLast(n: number): ListNode<T> | null
    getHead(): ListNode<T> | null
    size(): number
    isEmpty(): boolean
    toList(): T[]
}