/**
 * @author William Lemon
 * @version 1.0.0
 * @date 2025-11-21
 * @fileoverview Determine the user's life stage based on age and student status.
 */

// INPUT: Change these values to test different outcomes
const userName: string = "Alex";
const age: number = 17;
const isStudent: boolean = true;

// OUTPUT: Echo input
console.log(`Name: ${userName}`);
console.log(`Age: ${age}`);
console.log(`Student: ${isStudent}`);

// PROCESS: Determine life stage
if (isStudent === true && age >= 13 && age <= 19) {
  console.log(`Student ${userName} is a teenager.`);
} else if (isStudent === true && age >= 5 && age <= 12) {
  console.log(`Student ${userName} is a child.`);
} else if (isStudent === false && age >= 20 && age <= 30) {
  console.log(`${userName} is a young adult.`);
} else {
  console.log(`${userName} is in a different life stage.`);
}

console.log("\nDone.");
