// Problem 4: Pattern Generator
// Matthew Hockett
// 10/22/25

function createPyramid(height) {
    // Build a centered pyramid of asterisks (*)
    // Example: height = 3 ->
    //   *
    //  ***
    // *****
    // Return as string with \n between lines

    let pattern = "";

    for (let i = 1; i <= height; i++) {
        // Spaces before stars
        let spaces = " ".repeat(height - i);
        // Number of stars (2 * i - 1)
        let stars = "*".repeat(2 * i -1);

        pattern += spaces + stars;
        if (i !== height) pattern += "\n"; // Avoid extra newline at end 
    }
    return pattern;
}

function createNumberStaircase(steps) {
    // Build a staircase of increasing numbers
    // Example: steps = 5 ->
    // 1
    // 12
    // 123
    // 1234
    // 12345

    let pattern = "";
    for (let i = 1; i <= steps; i++) {
        let line = "";
        for ( j = 1; j <= i; j++) {
            line += j;
        }
        pattern += line;
        if (i !== steps) pattern += "\n";
    }
    return pattern;
}

function createCheckerboard(size) {
    // Create a checkerboard pattern of X and O
    // Example: size = 4 ->
    // XOXO
    // OXOX
    // XOXO
    // OXOX

    let pattern = "";

    for (let row = 0; row < size; row++) {
        let line = "";
        for (let col = 0; col < size; col++) {
            // Alternate X and O, flip each row's start
            if ((row + col) % 2 === 0) {
                line += "X";
            }
            else {
                line += "O";
            }
        }
        pattern += line;
        if (row !== size - 1) pattern += "\n";
    }
    return pattern;
}

// Test cases
console.log("Testing createPyramid");
console.log(createPyramid(3));
console.log(createPyramid(4));

console.log("\nTesting createNumberStaircase");
console.log(createNumberStaircase(5));

console.log("\nTesting createCheckerboard");
console.log(createCheckerboard(4));