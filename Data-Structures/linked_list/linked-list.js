'use strict';

const Node = require('./node');

class LinkedList {
  constructor (){
    this.head = null;
    this.tail = null;
  }

  append (value){
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next){
      currentNode = currentNode.next;
    }
    node.previous = currentNode;
    currentNode.next = node;
    this.tail = node;
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
      string = string + `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    string = string + 'NULL';
    return string;


  }

  insertBefore(value, newVal){
    const node = new Node(newVal);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.value !== value){
      currentNode = currentNode.next;
    }
    node.next = currentNode.next;
    currentNode.next = node;
    return this;
  }

  insertAfter(value, newVal){
    const node = new Node(newVal);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.tail;
    while (currentNode.previous && currentNode.previous.value !== value){
      currentNode = currentNode.previous;
    }
    node.previous = currentNode.previous;
    node.next = currentNode;
    currentNode.previous.next = node;
    currentNode.previous = node;
    return this;
  }

  kthFromEnd(k){
    let currentNode = this.tail;
    let counter = 0;
    let result = false;
    while(currentNode){
      if (counter === k){
        result = currentNode.value;
        break;
      }
      else{
        counter++;
        currentNode = currentNode.previous;
      }
    }
    return result;
  }
}

module.exports = LinkedList;