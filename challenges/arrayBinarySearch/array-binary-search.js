'use strict';

let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
let result;

function binarySearch(arr, searchKey){
  for (let i = 0; i < arr.length; i++){
    if (searchKey === arr[i]){
      result = i;
      i = arr.length +1;
    }
    else{
      result = -1;
    }
  }
  return result;
}


console.log(binarySearch(arr, 11), binarySearch(arr, 21), binarySearch(arr, 1), binarySearch(arr,50));
