/*
Bubble sort works by comparing a pair of neighboring elements and swapping their positions in the array so that the larger of the two elements is always on the right. Doing this continuously results in the largest element “bubbling” up to the end of the array, giving this sort its name. The algorithm only stops when there are no more values that need to be swapped.
Bubble sort is not the most efficient sorting algorithm. Bubble sort’s worst-case runtime is O(n^2). This is because we have to compare the current element we are looking at, to each element in the array after it and repeat this check for every single element in the array. Its best-case runtime is O(n) for an already-sorted list.
*/

function swapValues(arr, indexOne, indexTwo) {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;
};


function bubbleSort(inputArr) {
    let willSwap = true;
    let swapCount = 0

    while (willSwap) {
        willSwap = false;
        for (let i = 0; i < inputArr.length - 1; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                willSwap = true;
                console.log(`Swapping pair ${inputArr[i]}, ${inputArr[i + 1]} in [${inputArr}]`);

                swapValues(inputArr, i, i + 1);
                swapCount++
            }
        }
    }
    console.log(`Swapped ${swapCount} times`);
    return inputArr;
};


bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]);

