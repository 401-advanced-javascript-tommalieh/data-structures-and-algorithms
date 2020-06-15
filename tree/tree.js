'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    preOrder() {
        const result = [];
        const traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    inOrder() {
        const result = [];
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    postOrder() {
        const result = [];
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }

    breadthFirst(){
        let result = [];
        let queue = [];
        if (this.root !== null){
            queue.push(this.root);
            while(queue.length > 0){
                let node = queue.shift();
                result.push(node.value);
                if(node.left !== null){
                    queue.push(node.left);
                }
                if(node.right !== null){
                    queue.push(node.right);
                }
            }
            return result;
        }else{
            return null;
        }
    }

}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
one.left = two;
one.right = three;
three.right = four;
three.left = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
const tree = new BinaryTree(one);
console.log(tree);
const breadthFirst = tree.breadthFirst();
console.log(breadthFirst);

module.exports = {
    Node,
    BinaryTree
}
