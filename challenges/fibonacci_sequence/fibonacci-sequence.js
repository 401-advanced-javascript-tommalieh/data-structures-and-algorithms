'use strict'

function fibonacci(num){
    let fibArr = [0, 1];
    for (let index = 2; index <= num; index++){
        let newFibElemnt = fibArr[index - 1] + fibArr[index - 2];
        fibArr.push(newFibElemnt);
    }
    return fibArr[num];
}
fibonacci(0);
fibonacci(2);
fibonacci(8);
fibonacci(45);

//Big O time: O(n)
//Big O space: O(1)