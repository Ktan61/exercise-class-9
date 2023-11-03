/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 * Initialise a variable called `headphones one` to an array with values: `sennheiser`, `bose`, and `sony`.
 * 
 * Initialise a variable called `headphones two` to an array with values: `skullcandy`, `beats`, and `jlab`.
 * 
 * Then concatenate the two arrays in the variable called `total headphones` using the .concat method
 * 
 * Console log `total headphones`
 *  
 */

var headphonesOne = ["sennheiser", "bose", "sony"];
var headphonesTwo = ["skullcandy", "beats", "jlab"];

var totalHeadphones = headphonesOne.concat(headphonesTwo);

console.log(totalHeadphones);



/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 
 * Initialise the variable `box contents` to a 2-Dimensional array containing the 
 * values below:
 * 
 *          column[0]       column[1]       column[2]       column[3]                         
 * Row 1    red box         apple           sour            shiny        
 * Row 2    black box       coconut         sweet           rough             
 * 
 * Use console.table() to showcase the information above in a table.
 * 
 * Based on the values stored in the `box contents` 2D array, console log out 
 * the following sentence (use concatenation):
 * I opened the _black box_ and found a _coconut_ inside. It was _rough_ textured 
 * but it tasted _sweet_.
 */

var boxContents = [
    ["red box", "apple", "sour", "shiny"],
    ["black box", "coconut", "sweet", "rough"]
];

console.table(boxContents);

console.log("I opened the " + boxContents[1][0] + " and found a " + boxContents[1][1] + " inside. It was " + boxContents[1][3] + " textured but it tasted " + boxContents[1][2] +".");
