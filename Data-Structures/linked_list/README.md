Pull Request: https://github.com/401-advanced-javascript-tommalieh/data-structures-and-algorithms/pull/8

# Linked List
Create a linked list class that's able to create, add, list and search for node/nodes.

## Challenge
Deciding the value of the current node each time.

## Approach & Efficiency

1- First of all we start by creating the node class that will create a new node when invoked.

2- Create the linked list class with a head pointing to null as a defaul value.

3- Add an append() method to the linked list class that will create a new node and add it to the end of the linked list.

4- Add the includes() method that will take a value and search for it inside the linked list and return true if exists and false if not.

5- Add toString() method that will show all values of the nodes inside the linked list as a string.

6- Add an insertBefore() method that add a new node before a node with a certain value.

7- Add an insertBefore() method that add a new node after a node with a certain value.

8- Add an kthFromEnd() method that will take an index and look for the node with the same index and return it's value.

## API

1. `append()` - Adding a new node to the linked list.

2. `includes()` - Search for a certain node within the linked list.

3. `toString()` - Show all the values of the nodes within the linked list as a string.

4. `insertBefore` - Add a new node before a node with a certain value.

5. `insertAfter` - Add a new node after a node with a certain value.

6. `kthFromEnd` - Take an index and look for the node with the same index and return it's value