// REQUIRED FEATURES

// 1. Create a variable with a value of an array with the following (number) values: 3, 6, 7, 10
let variable = [3, 6, 7, 10];
// 2. Create a variable called 'myValue' with a value of the number 0
let myValue = 0;
// 3. Console log the value of the array at index 2
console.log(variable[2]);
// 4. Remove the last item in the array, then console log the array
variable.pop();
console.log(variable);
// 5. Add the value of number 15 to the end of the array
variable.push(15);
// 6. Write a `for` loop that console logs each value in the array
for(let i=0; i<variable.length; i++){
  console.log('the for loops of variable', + variable[i]);
}
// STRETCH GOALS

// 7. Write a `while` loop that will increase the value of 'myValue' by 1 until its value is 10
const max = 10;                // declaring max count to add to while loop

//  creating a while loop to illustrate how to increase value from 1 to 10
while(myValue < max){
  console.log('Here we are increasing the value until 10 is reached', myValue);
  myValue++
}
// 8. Change the second value in the array from 6 to 20, then console log the array
variable[1] = 20;       // changed value from 6 to 20
console.log(variable);  // logging variable array

// 9. Below, rewrite the `for` loop from question 6 to a `for of` loop
for( number of variable ){
    console.log( 'for of loop of variable', number );  // added a for of loop
}

// 10. Reassign the value of `myValue` to 3. Then, write a `for` loop that console logs each value in the array,
// and if the value of the array at `i` matches the value of 'myValue', also console log 'Hurray!'
