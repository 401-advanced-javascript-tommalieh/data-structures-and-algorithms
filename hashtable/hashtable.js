'use strict';

const LinkedList = require('./linked-list.js');

class HashMap{
    constructor(size){
        this.size = size;
        this.storage = new Array(size);
    }

    hash(key){
        const keyCharSum = key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0);
        const hashedKey = (keyCharSum * 3) % this.size;
        return hashedKey;
    }

    set(key, value){
        const hashedKey = this.hash(key);
        if(!this.storage[hashedKey]){
            const linkedList = new LinkedList();
            linkedList.add({[key]: value});
            this.storage[hashedKey] = linkedList;
        }
        else{
            this.storage[hashedKey].add({[key]: value})
        }
    }

    get(key){
        const hashedKey = this.hash(key);
        return this.storage[hashedKey];
    }

    contains(key){
        const hashedKey = this.hash(key);
        return this.storage[hashedKey] ? true : false;
    }

}

const hashmap = new HashMap(4000); // ==> [4000]
hashmap.set('name', 'mahmoud');
hashmap.set('one', 'thing');
hashmap.set('eno', '1');
hashmap.set('neo', '2');
hashmap.set('this', 'nothing');
console.log(hashmap.storage);
console.log(hashmap.storage[966]);
console.log(hashmap.storage[966].head.next);
console.log(hashmap.storage[966].head.next.next);

// console.log(hashmap.storage[966]);

// console.log(hashmap.storage[284]);
// console.log(hashmap.storage[68]);
// console.log(hashmap.storage[2679]);


// console.log(
//   'hi',
//   hashmap.storage[3923].head.value['name'],
//   hashmap.storage[2118].head.next
// );