'use strict'
function mergeSort(arr){
    iteration++;
    if(arr.length < 2){
      return
    }
    let m = arr.length / 2;
    let leftArr = [];
    let rightArr = [];
  
    for (let i = 0; i <= m - 1; i++){
      leftArr.push(arr[i]);
    }
    for (let i = m; i <= arr.length - 1; i++){
      rightArr.push(arr[i]);
    }

    mergeSort(leftArr);
    mergeSort(rightArr);
    merge(arr, leftArr, rightArr);
    
    console.log(`Iteration #${iteration - 5}`)
    console.log(leftArr);
    console.log(rightArr);

  }

  function merge(arr, leftArr, rightArr){
    let l = leftArr.length;
    let r = rightArr.length;
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < l && j < r){
        if(leftArr[i] < rightArr[j]){
            arr[k] = leftArr[i];
            i++;
            k++;
        }
        else{
            arr[k] = rightArr[j];
            j++;
            k++;
        }
    }
    while(i < l){
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    while(j < r){
        arr[k] = rightArr[j];
        j++;
        k++;
    }
    return arr;
  }
  
  let iteration = 0;
  let arr = [2,4,1,6,8,5,3,7]
  console.log(`input ->> ${arr}`);
  mergeSort(arr)
  console.log(`result ->> ${arr}`);
