'use strict'

const Node = require('./node');

class LinkedList {
    constructor (){
        this.head = null;
    }

    insert (value){
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return this;
        }
        let currentNode = this.head;
        while (currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        return this;
    }

    includes (value){
        if (!this.head) {
            return false;
        }
        let currentNode = this.head;
        let result = false;
        while (currentNode){
        if (currentNode.value === value){
            result = true;
        }
        currentNode = currentNode.next;
        }

        return result;
    }

    toString(){
        if (!this.head) {
            return 'NULL';
        }

        let currentNode = this.head;
        let string = '';
        while (currentNode){
        string = string + `{${currentNode.value}} -> `;
        currentNode = currentNode.next;
        }
        string = string + 'NULL';
        return string;


    }
}

module.exports = LinkedList;