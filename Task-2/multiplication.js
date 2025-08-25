let num = 5; // Sample input
let output = "";

// Search from 1 to 10
for ( i = 0; i <= 10; i++) {
    // Check — skip the 1× result
    if (i > 0) {
        output = output + (num * i);
        if (i < 10) { // Only add space if not the last number
            output = output + " ";
        }
    }
}

console.log(output);
