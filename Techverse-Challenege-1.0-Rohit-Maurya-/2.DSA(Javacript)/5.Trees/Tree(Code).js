class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value) {
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    // Helper method to perform in-order traversal
    traverseInOrder(node, visitFn) {
        if (node.left) this.traverseInOrder(node.left, visitFn);
        visitFn(node);
        if (node.right) this.traverseInOrder(node.right, visitFn);
    }

    // Helper method to perform pre-order traversal
    traversePreOrder(node, visitFn) {
        visitFn(node);
        if (node.left) this.traversePreOrder(node.left, visitFn);
        if (node.right) this.traversePreOrder(node.right, visitFn);
    }

    // Helper method to perform post-order traversal
    traversePostOrder(node, visitFn) {
        if (node.left) this.traversePostOrder(node.left, visitFn);
        if (node.right) this.traversePostOrder(node.right, visitFn);
        visitFn(node);
    }
}

// Example usage:
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(17);

console.log(tree.find(12)); // Output: true
console.log(tree.find(20)); // Output: false

// In-order traversal example
tree.traverseInOrder(tree.root, (node) => console.log(node.value)); // Output: 2, 5, 7, 10, 12, 15, 17

// Pre-order traversal example
tree.traversePreOrder(tree.root, (node) => console.log(node.value)); // Output: 10, 5, 2, 7, 15, 12, 17

// Post-order traversal example
tree.traversePostOrder(tree.root, (node) => console.log(node.value)); // Output: 2, 7, 5, 12, 17, 15, 10
