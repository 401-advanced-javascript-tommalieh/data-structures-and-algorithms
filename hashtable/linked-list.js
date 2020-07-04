'use strict';

const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
        // this.storage = []
    }

    add(nodeValue) {
        const node = new Node(nodeValue);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
}

module.exports = LinkedList;