class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Insertion at the end of the list
    insert(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Deletion of a node
    delete(data) {
        if (!this.head) return;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Traversal
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Search
    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insertion at the end of the list
    insert(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Deletion of a node
    delete(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                if (current === this.head) {
                    this.head = this.head.next;
                    if (this.head) {
                        this.head.prev = null;
                    }
                } else if (current === this.tail) {
                    this.tail = this.tail.prev;
                    if (this.tail) {
                        this.tail.next = null;
                    }
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                return;
            }
            current = current.next;
        }
    }

    // Traversal
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Search
    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}
// Circular Linked List using the Node definition from Singly Linked List
class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    // Insertion at the end of the list
    insert(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
    }

    // Deletion of a node
    delete(data) {
        if (!this.head) return;
        if (this.head.data === data) {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            if (this.head === this.head.next) {
                this.head = null;
            } else {
                this.head = this.head.next;
                current.next = this.head;
            }
            return;
        }
        let current = this.head;
        let prev = null;
        while (current.next !== this.head) {
            prev = current;
            current = current.next;
            if (current.data === data) {
                prev.next = current.next;
                return;
            }
        }
    }

    // Traversal
    traverse() {
        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head);
    }

    // Search
    search(data) {
        let current = this.head;
        do {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        } while (current !== this.head);
        return false;
   
