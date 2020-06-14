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
        this.result = [];
    }


    preOrder() {
        function traverse(node) {
            this.result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return this.result;
    }

    inOrder() {
        function traverse(node) {
            if (node.left) traverse(node.left);
            this.result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return this.result;
    }

    postOrder() {
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            this.result.push(node.value);
        }
        traverse(this.root);
        return this.result;
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

function fizzBuzzTree(tree) {
    function traverse(node) {

        if (node.value % 3 === 0 && node.value % 5 === 0) {
            node.value = 'FizzBuzz';
        } else if (node.value % 3 === 0) {
            node.value = 'Fizz';

        } else if (node.value % 5 === 0) {
            node.value = 'Buzz';
        } else {
            node.value = `${node.value}`;
        }
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(tree.root);
}

fizzBuzzTree(tree);
console.log(tree);
