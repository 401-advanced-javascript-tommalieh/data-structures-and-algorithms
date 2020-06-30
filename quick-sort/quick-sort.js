'use strict';

function quickSort(arr, l, h){
  if(l < h){
    let j = partition(arr, l ,h);
    quickSort(arr, l, j);
    quickSort(arr, j + 1, h);
  }
  return arr;
}

function partition(arr, l , h){
  let pivot = arr[l];
  let i = l;
  let j = h;
    console.log('hey', i, j)
  while(i < j){
    while(arr[i] <= pivot ){
    i = i + 1;
    }
    while(arr[j] > pivot){
      j = j - 1;
    }
    console.log('hi', i, j)
    if(i < j){
      swap(arr, i, j)
    }
    swap(arr, l, j)
  }
  return j;
}

function swap(arr, el1, el2){
  console.log(el1, el2)
  let temp = arr[el1];
  arr[el1] = arr[el2];
  arr[el2] = temp;
  console.log('arr', arr)
}

let arr = [8,4,23,42,16,15];

quickSort(arr, 0, arr.length - 1);
console.log('result -->', arr);

let arr2 = [10, 80, 30, 90, 40, 50, 70];
quickSort(arr2, 0, arr2.length - 1);
console.log('result2 -->', arr2);