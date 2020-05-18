'use strict'

function reverseArray(arr){
    let reversedArr = [];
    for (let i = arr.length - 1 ; i >= 0 ; i--){
        console.log(arr[i])
        reversedArr.push(arr[i]);
    }
    console.log(reversedArr);
    // return reversedArr;
}    

reverseArray([1, 2, 3, 4, 5, 6])