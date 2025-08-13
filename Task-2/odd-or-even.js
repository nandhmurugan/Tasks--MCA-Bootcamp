let n = 10; // Sample input
let odd = "";
let even = "";

// Search from 1 to n
for ( i = 1; i <= n; i++) {
    // Check if number is even
    if (i % 2 == 0) {
        even = even + i;  
    } 
    // Otherwise it's odd
    else {
        odd = odd + i;
    }
}

console.log("Odd:" + odd + ",Even:" + even);
