function mergeSort(numberList) {
    var numberListLength = numberList.length;
    if (numberListLength < 2) {
        return numberList;
    }
    var leftSide;
    var rightSide;
    var leftSideLength;
    var rightSideLength;
    if (!(numberListLength % 2)) {
        leftSideLength = numberListLength / 2;
        rightSideLength = numberListLength / 2;
    }
    else {
        leftSideLength = Math.floor(numberListLength / 2);
        rightSideLength = Math.floor(numberListLength / 2) + 1;
    }
    leftSide = new Array(leftSideLength);
    rightSide = new Array(rightSideLength);
    for (var i = 0; i < numberListLength; i++) {
        if (i < leftSideLength) {
            leftSide[i] = numberList[i];
        }
        else {
            rightSide[i - Math.floor(numberListLength / 2)] = numberList[i];
        }
    }
    if (leftSide.length > 1) {
        leftSide = mergeSort(leftSide);
    }
    if (rightSide.length > 1) {
        rightSide = mergeSort(rightSide);
    }
    return manualMerge(leftSide, rightSide);
}
function manualMerge(leftSide, rightSide) {
    var returnArray = new Array(leftSide.length + rightSide.length);
    var i = 0;
    var j = 0;
    var index = 0;
    while (i < leftSide.length && j < rightSide.length) {
        if (leftSide[i] < rightSide[j]) {
            returnArray[index] = leftSide[i];
            index++;
            i++;
        }
        else {
            returnArray[index] = rightSide[j];
            index++;
            j++;
        }
    }
    while (i < leftSide.length) {
        returnArray[index] = leftSide[i];
        index++;
        i++;
    }
    while (j < rightSide.length) {
        returnArray[index] = rightSide[j];
        index++;
        j++;
    }
    console.log('sorted array:', returnArray);
    return returnArray;
}
console.log(mergeSort([10, 5, 1]));
console.log(mergeSort([11, 6, 3, 9, 1]));
console.log(mergeSort([10, 5, 1, 6, 3, 9, 12]));
