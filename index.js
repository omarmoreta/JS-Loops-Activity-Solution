//Copy the three arrays above into your own code editor or Replit.

let newInventoryCarModels = ["S1", "T1", "S2", "S1", "S2", "S1"];
let newInventoryCarTypes = [
  "StockCar",
  "Refrigerator",
  "StockCar",
  "Lorrie",
  "Lorrie",
  "Lorrie",
];
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951];

//Use a while loop to iterate through the newInventoryCarModels array to get see car's data type. Remember to initialize your i variable to 0 before starting the loop! Print out each car type in a console.log statement.
console.log("2.");

let i = 0;
while (i < newInventoryCarModels.length) {
  console.log(newInventoryCarModels[i], ":", newInventoryCarTypes[i]);
  i++;
}

//Make a new variable called typeS1Count and initialize it to 0. Inside your loop from step 2, check and see if the car type is equal to "S1". If it is, increment the typeS1Count variable by one. Outside the loop, log "Number of S1 Cars is:" and then the value of the typeS1Count variable. Hint: You will need to make an if statment inside your loop!
console.log("3.");

let typeS1Count = 0;
let j = 0;
while (j < newInventoryCarModels.length) {
  if (newInventoryCarModels[j] === "S1") {
    typeS1Count++;
    console.log("S1Count = ", typeS1Count);
  }
  j++;
}
//Stop and check: Run your code and see what prints out. It should be counting three "S1" cars, so you should see a console.log statement printing "Number of S1 Cars is: 3".

console.log("4.");
console.log("Number of S1 Cars is: ", typeS1Count);

//Perhaps you've just learned that "T1" and "S1" types are nearly identical. Try changing the original array and change the "T1" types to "S1" and run the code again. Does it now print "Number of S1 Cars is: 4"?

console.log("5.");

let updatedInventoryCarModels = ["S1", "S1", "S2", "S1", "S2", "S1"];
let newS1Count = 0;
let x = 0;
while (x < updatedInventoryCarModels.length) {
  if (updatedInventoryCarModels[x] === "S1") {
    newS1Count++;
    console.log("NewS1Count = ", newS1Count);
  }
  x++;
}

console.log("Updated Number of S1 Cars is: ", newS1Count);

// Write another loop but this time use a for loop. Remember, we are just using the loops to iterate through an array. We can use either type and accomplish the same objective.
// Outside of this second loop, make a variable called lorrieCount. Create an if statement inside of your for loop that checks if the Car Model is "Lorrie". After the loop is closed, print out how many lorries you found.

console.log("6.");

let lorrieCount = 0;
for (let i = 0; i < newInventoryCarModels.length; i++) {
  if (newInventoryCarTypes[i] === "Lorrie") {
    lorrieCount++;
  }
}
// Stop and check: Did you get three "Lorries"?

console.log("Number of Lorries: ", lorrieCount);
