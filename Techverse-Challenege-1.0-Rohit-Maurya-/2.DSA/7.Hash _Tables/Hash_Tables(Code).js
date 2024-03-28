class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        const PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArray.includes(this.keyMap[i][j][0])) {
                        keysArray.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArray;
    }

    values() {
        const valuesArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArray.includes(this.keyMap[i][j][1])) {
                        valuesArray.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArray;
    }

    remove(key) {
        const index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    this.keyMap[index].splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }
}

// Example usage:

const hashTable = new HashTable();
hashTable.set("apple", "red");
hashTable.set("banana", "yellow");
hashTable.set("grape", "purple");

console.log(hashTable.get("banana")); // Output: yellow
console.log(hashTable.get("orange")); // Output: undefined

console.log(hashTable.keys()); // Output: [ 'apple', 'banana', 'grape' ]
console.log(hashTable.values()); // Output: [ 'red', 'yellow', 'purple' ]

hashTable.remove("banana");
console.log(hashTable.keys()); // Output: [ 'apple', 'grape' ]
