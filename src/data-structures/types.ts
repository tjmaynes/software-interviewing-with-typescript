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
    insertAtHead(data: T): this
    insertAtTail(data: T): this
    search(data: T): boolean
    delete(data: T): boolean
    deleteAtHead(): boolean
    removeDuplicates(): this
    union(list: ILinkedList<T>): ILinkedList<T>
    nthNodeFromLast(n: number): ListNode<T> | null
    getHead(): ListNode<T> | null
    size(): number
    isEmpty(): boolean
    toList(): T[]
}