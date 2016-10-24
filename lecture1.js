/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

var 1stCar = 'Doge';
//Invalid because it starts with a number
var firstCar = 'Doge';

var var = 'variable';
//Invalid because var is a reserved work
var something = 'variable';

var first name = 'Jerry';
//Invalid because it contains a space
ver firstName = 'Jerry';

var Sch00lName = 'MEST';
//InValid because it starts with a capital and does not follow the camelcase format
var schoolName = 'MEST';

var totalnumber = 100;
//Invalid because it is  ot humna readable
var totalNumber = 100;

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  'It's nice to me you today!';
//Invalid since you cant use sigle quotes in strings with apotrophe
var greeting = "It's nice to meet you today!";


var response = "Ashwin said,  "Yes Sir!"";
//Invalid since Yes Sir! is not in quotation marks
var response = "Ashwin said, 'Yes Sir!' ";
 


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */
 //Return true since it is of the same type and of the same value
 
/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
var pizza1 = new Object();
pizza.meat = "Goat";
pizza.flourType = "Local";
pizza.size = "large"
pizza.vegies = true;


var pizza2 = {
	meat: "Goat",
	flourType:"Local",
	size:"large",
	vegies: true

}

function Pizza (meat, flourType, size, vegies) {
	this.meat = meat;
	this.flourType = flourType;
	this.size = size;
	this.vegies = vegies;

}

var pizza3 = new Pizza("Goat", "Local", "large", true);

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
function Animal (size,heigth,breed) {
	this.size = size + "kg";
	this.heigth =heigth + "cm";
	this.breed = breed; 

}

var goat = new Animal(50, 4.7, "Sokoto")
var chicken = new Animal(18, 2.1, "layer")

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */

function menuSelection (orderNumber) {
	switch (orderNumber) {
		case 1:
		return "You ordered for Waakye"; 
		break;
		case 2:
		return "You Just ordered Fufu";
		break;
		case 3:
		return "You just orderd for Salad";
		break;
		default:
		return "Please input a number between 1 and 3"
		break;
	}
}
/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
var scores = [50, 67, 80, 90, 100, 30, 88, 68];
function studentScores (array) {
	for(i = 0; i <= array.length; i++){
		var value = array[i];
		var pastMark = 50;
		count = 0
		if (value < pastMark) {	
			count += value 
		}
		
	} return count + " out of " + array.length + " People failed the Test"
}
console.log(studentScores(scores))


/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */
function studentScores (array) {
	array.forEach(function(score) {
	    console.log(score);
	});
}


