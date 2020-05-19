'use strict';

function insertShiftArray(arr, element) {
    let frstHlfArr = [];
    let scndHlfArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < Math.floor((arr.length) / 2)) {
            frstHlfArr.push(arr[i]);
        }

        else {
            scndHlfArr.push(arr[i]);
        }
    }

    frstHlfArr.push(element);

    for (let i = 0; i < scndHlfArr.length; i++) {
        frstHlfArr.push(scndHlfArr[i]);
    }

    let result = frstHlfArr;
    return result;
}

insertShiftArray([1, 3, 5, 7, 9, 11, 13, 15], 88);