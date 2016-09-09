// The Bonus challenge create a function that takes in 2 inputs, multiplies those inputs into a local variable,
// and then take the inputs + the product and puts everything into an array that will be returned from the function.

// Step 1: Take in two numbers as arguments (input1, input2).
// Step 2: Multiply those numbers, and save the result to a locally scoped variable called 'z' (var z = input1 * input2).
// Step 3: Create an array that stores the first argument, second argument, and z (var arr = [input1, input2, z];).
// Step 4: Return that array (return arr;).
// Step 5: Testing - console log the splinter function, pass in 1 and 2.
// Step 6: Check all of this into a repo called "prime_prestudy_bonus_week_04"

var splinter = function (input1, input2) {
	var z = input1 * input2;
	var arr = [input1, input2, z];
	return arr;
};
console.log(splinter(1, 2));
