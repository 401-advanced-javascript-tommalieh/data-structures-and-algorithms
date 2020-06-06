'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.stackSpace = [];
    }

    push(nodeValue) {
        const newNode = new Node(nodeValue);
        newNode.next = this.stackSpace[0];
        this.stackSpace.unshift(newNode);
        this.top = stackSpace[0];
    }

    pop() {
        if (this.top) {
            const removedNode = this.stackSpace.shift();
            this.top = this.stackSpace[0] ? this.stackSpace[0] : null;
            return removedNode;
        }
        else {
            return 'The stack space is empty';
        }
    }

    peek() {
        return this.top ? this.top : 'The stack space is empty';

    }

    isEmpty() {
        return this.top ? true : false;
    }

}


class Queue {
    constructor() {
        this.front = null;
        this.queueSpace = [];
    }

    enqueue(nodeValue) {
        const newNode = new Node(nodeValue);
        newNode.next = this.queueSpace[this.queueSpace.length - 1];
        this.queueSpace.push(newNode);
        this.front = this.queueSpace[0];
    }

    dequeque() {
        if (this.front) {
            const removedNode = this.queueSpace.shift();
            this.front = this.queueSpace[0];
            return removedNode;
        }
        else {
            return 'The queue space is empty';
        }
    }

    peek() {
        return this.front ? this.front : 'The queue space is empty';

    }

    isEmpty() {
        return this.front ? true : false;
    }

}


module.exports = {
    "stack": Stack,
    "queue": Queue
}