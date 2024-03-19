const binarySearch = (arr, target) => {
    let leftIdx = 0;
    let rightIdx = arr.length;

    while (rightIdx > leftIdx) {
        const currentIdx = Math.floor((leftIdx + rightIdx) / 2);
        const valueToCheck = arr[currentIdx];
        console.log(`Checking Index: ${currentIdx}`)

        if (valueToCheck === target) {
            return currentIdx;
        } else if (valueToCheck < valueToCheck) {
            leftIdx = currentIdx + 1;
        } else {
            rightIdx = currentIdx;
        }
    }
    return null;
}

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 2;
console.log("Array:", searchable, "Target:", target);


const targetIndex = binarySearch(searchable, target);

console.log(`The target index is ${targetIndex}.`);

