// Problem 5: Array Manipulator
// Matthew Hockett
// 10/22/25


function reverseArray(arr) {
    // Return a new array with elements in reveresed order
    // Don't use built-in reverese() method!
    // Don't modify the original array
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

function removeDuplicates(arr) {
    // Return new array with duplicates removed
    // Maintain original order of first occurance
    let unique = [];
    for (let item of arr) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }
    return unique;
}

function rotateArray(arr, positions) {
    // Rotate array to the right by positions
    // Handel positions larger than array length
    if (arr.length === 0) return [];

    let pos = positions % arr.length; // Normalize rotation
    let rotated = arr.slice(-pos).concat(arr.slice(0, -pos));
    return rotated;
}

function findSecondLargest(numbers) {
    // Find and return the second largest number
    // Return null if array has less than 2 unique values
    let unique = [...new Set(numbers)];
    if (unique.length < 2) return null; 

    unique.sort((a, b) => b - a);
    return unique[1];
}

// Test cases
console.log("Testing reverseArray");
console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray(["a", "b", "c"]));
console.log(reverseArray([]));

console.log("\nTesting removeDuplicate");
console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));
console.log(removeDuplicates(["a", "b", "a", "c"]));

console.log("\nTesting rotateArray");
console.log(rotateArray([1, 2, 3, 4], 1));
console.log(rotateArray([1, 2, 3, 4], 2));
console.log(rotateArray([1, 2, 3], 4));

console.log("\nTesting findSecondLargest");
console.log(findSecondLargest([10, 20, 30, 40]));
console.log(findSecondLargest([5, 5, 5]));
console.log(findSecondLargest([100, 50, 100, 70]));