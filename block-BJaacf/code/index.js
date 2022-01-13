// 1. Create an array named numbers and store 5 number values in it
let numbers = [13, 15, 20, 23, 27];

// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log (sum);

// 3. Calculate the average of array items and print it to the console using console.log()

console.log (sum / numbers.length);


// 4. Find the highest number in the array and print it to the console using console.log()
console.log (Math.max (...numbers));

// 5. Find the lowest number in the array and print it to the console using console.log()
console.log (Math.min (...numbers));

// 6. Find the even numbers in the array and print them to the console using console.log()
let evenNum = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNum.push (numbers[i]);
    }
}
console.log (evenNum, "Even Numbers in array");

// 7. Find the odd numbers in the array and print them to the console using console.log()
let oddNum = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddNum.push (numbers[i]);
    }
}
console.log (oddNum , "Odd Numbers in array");


// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let div5 = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0) {
        div5.push (numbers[i]);
    }
}
console.log (div5);

// 9. Log all the element of the array one by one
for (number of numbers) {
    console.log(number);
}

// 10. Find all the number in the array that is divisible by 3
let div3 = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        div3.push (numbers[i]);
    }
}
console.log (div3);