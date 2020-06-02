'use strict';

const Linkedlist = require('../linked_list/linked-list.js');

function mergeLists (list1,list2){
  const mergedLL = new Linkedlist();
  let currentNode1 = list1.head;
  let currentNode2 = list2.head;
  while(currentNode1 || currentNode2){
    if(currentNode1){
      mergedLL.append(currentNode1.value);
      currentNode1=currentNode1.next;
    }
    if(currentNode2){
      mergedLL.append(currentNode2.value);
      currentNode2=currentNode2.next;
    }
  }
  let str = mergedLL.toString();
  return str;
}


module.exports = mergeLists; 