// Problem 2: Fall Leaf Counter
// Matthew Hockett
// 10/22/25



function countLeaves(days) {
    // Each day, leaves fall following this patter:
    // Day 1: 10 leaves
    // Day 2: 20 leaves (doubles)
    // Day 3: 30 leaves (+10 leaves from day 2)
    // Day 4: 40 leaves (+10 leaves from day 3)
    // Pattern: First day doubles, then +10 each day

    let total = 0;
    let leavesToday = 10;

    for (let day = 1; day <= days; day++) {
        total += leavesToday;

        if (day === 1) {
            leavesToday *= 2; // Day 2 doubles from day 1
        }
        else {
            leavesToday += 10; // Afterwards, +10 each day
        }
    }
    return total;
}

function categorizeLeafColors(leaves) {
    // Leaves in array of collor strings
    // Count each color and return an object
    let colorCount = {};

    for (let color of leaves) {
        if (colorCount[color]) {
            colorCount[color]++;
        }
        else {
            colorCount[color] = 1;
        }
    }

    return colorCount;
}

// Test cases
console.log("Testing countLEaves");
console.log(countLeaves(1));
console.log(countLeaves(2));
console.log(countLeaves(4));
console.log(countLeaves(5));

console.log("\nTesting categorizeLeafColors");
console.log(categorizeLeafColors(["red", "yellow", "red", "brown"]));
console.log(categorizeLeafColors(["orange", "orange", "orange"]));
console.log(categorizeLeafColors([]));