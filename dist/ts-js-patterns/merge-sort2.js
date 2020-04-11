"use strict";
function mergeSort2(numberList) {
    const numberListLength = numberList.length;
    let side = numberListLength / 2;
    let leftSide;
    let rightSide;
    if (numberListLength < 2) {
        return numberList;
    }
    if (numberListLength % 2 === 0) {
        leftSide = new Array(side);
        rightSide = new Array(side);
    }
    else {
        side = Math.floor(side);
        leftSide = new Array(side);
        rightSide = new Array(side + 1);
    }
    // push numbers to each side
    for (let i = 0; i < numberListLength; i++) {
        if (i < leftSide.length) {
            leftSide[i] = numberList[i];
        }
        else {
            rightSide[i - side] = numberList[i];
        }
    }
    if (leftSide.length > 1) {
        leftSide = mergeSort2(leftSide);
    }
    if (rightSide.length > 1) {
        rightSide = mergeSort2(rightSide);
    }
    return merge(leftSide, rightSide);
}
function merge(leftSide, rightSide) {
    // loop through each side and return an ordered list
    //
    let orderedList = new Array(leftSide.length + rightSide.length);
    let i = 0;
    let j = 0;
    let index = 0;
    while (i < leftSide.length && j < rightSide.length) {
        if (leftSide[i] < rightSide[j]) {
            orderedList[index] = leftSide[i];
            i++;
        }
        else {
            orderedList[index] = rightSide[j];
            j++;
        }
        index++;
    }
    while (i < leftSide.length) {
        orderedList[index] = leftSide[i];
        index++;
        i++;
    }
    while (j < rightSide.length) {
        orderedList[index] = rightSide[j];
        index++;
        j++;
    }
    console.log(orderedList);
    return orderedList;
}
//console.log(mergeSort2([222, 10]));
console.log(mergeSort2([10, 20, 4, 2, 22]));
