// function to recursively split the input array until each element is in a single-element array. 
// function that is responsible for merging the leftArray and rightArray

const mergeSort = (startArray) => {
    const length = startArray.length;
    if (length === 1) {
        return startArray;
    }

    const mid = Math.floor(length / 2);
    const leftArray = startArray.slice(0, mid);
    const rightArray = startArray.slice(mid, length);
    console.log("left:", leftArray, "<---->", "right:", rightArray);

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    while (leftArray && rightArray && leftArray.length > 0 && rightArray.length > 0) {
        let numberToAppend
        console.log("comparing", leftArray, "AND", rightArray);
        if (leftArray[0] < rightArray[0]) {
            numberToAppend = leftArray.shift();
        }
        else {              // must cover === too
            numberToAppend = rightArray.shift();
        }
        sortedArray.push(numberToAppend);
        console.log("current sorted array state:", sortedArray);
    }
    // while loop continues until either leftArray or rightArray is empty, 
    // you need to concatenate whatever is left in the other array to the sorted array
    // in this case must be the largest number
    return sortedArray.concat(leftArray).concat(rightArray);
}


const inputArr = [3, 5, 2, 90, 4, 7];
console.log("\nORIGINAL:", inputArr)
console.log(mergeSort(inputArr));

const inputArr1 = [88, 3, 5, 2, 88, 4, 7, 88, 1];
console.log(mergeSort(inputArr1));




