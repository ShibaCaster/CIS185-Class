// Problem 3: Grade Calculator
// Matthew Hockett
// 10/22/25


function calculateAverage(scores) {
    // Calculate and return the average array of scores
    // Handel empty array case (return 0)

    if (scores.length === 0) return 0;

    let sum = 0;
    for (let score of scores) {
        sum += score;
    }
    return sum / scores.length;
}

function dropLowestScore(scores) {
    // Return a new array with the lowest score removed
    // If multiple lowest scores exist, remove only one
    // Don't modify the original array

    if (scores.length === 0) return [];

    let lowest = Math.min(...scores);
    let indexToRemove = scores.indexOf(lowest);

    // Create a shallow copy of the array
    let newScores = scores.slice();
    newScores.splice(indexToRemove, 1);

    return newScores;
}

function getLetterGrade(score) {
    // Return letter grade based on score

    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

function curveGrades(scores, curveAmount) {
    // Add curveAmount to each score
    // Cap all scores at 100 (no scores above 100)
    // Return new array, don't modify original

    let curved = [];

    for (let score of scores) {
        let newScore = score + curveAmount;
        if (newScore > 100) newScore = 100;
        curved.push(newScore);
    }

    return curved;
}

// Test cases
console.log("Testing calculateAverage");
console.log(calculateAverage([80, 90, 70]));
console.log(calculateAverage([100, 50, 75]));
console.log(calculateAverage([]));

console.log("\nTesting dropLowestScore");
console.log(dropLowestScore([80, 90, 70, 85]));
console.log(dropLowestScore([50, 50, 75, 100]));

console.log("\nTesting getLetterGrade");
console.log(getLetterGrade(95));
console.log(getLetterGrade(82));
console.log(getLetterGrade(58));

console.log("\nTesting curveGrades");
console.log(curveGrades([85, 95, 70], 10));
console.log(curveGrades([90, 96, 80], 5));