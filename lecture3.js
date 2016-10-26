/**
 * Created by Jerry on 2016-10-22.
 */

/*  1. Explain the following code:
 *
 *  function func() {
 *      console.log(this);
 *  }
 *
 *  func(); // what is the output? Why?
 // Answer: 
 // The output will be the whole engine of javascript
 // Its a function that displays 'this'
 
 
 *  var obj = {
 *      func: func // what is the second func here?
 *  };
 //Answer:
 //Cannot read property 'func' of undefined because it is undefined.
 

 
 *  obj.func(); //what is the output? try to explain why.
 //Answer
 //func is not defined because funcwas not defines in the object 'obj'

 
 *  obj.func.bind(window)(); // what is the output? why?
 //Answer
 //Output - Window is not defined 
 //reason - because window is not defined


 
 *  obj.func.bind(this)();  // what is the output? why?
 //Answer
 //ouput - {} 
 //This is because it this does not point to a particular
 //object so it creates an empty object
 
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
 // Answer:
 //Output - { name: 'ashwin', age: 40 }
 //Reason -  This is because it binded the function called 'func' to the obj
 //And since the function called 'func' calls the whole object itself 
 */


/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */

//Answer For Question Two
function capitalize(string) {
    return string.charAt(0).toUpperCase() + 
    string.slice(1).toLowerCase();
}

 function makeCapital (str) {
 	h = []
 	arr = str.split(" ")
 	for(i = 0; i < arr.length; i++){
 		m = arr[i][0]
 		h.push(capitalize(arr[i]))

 	}
 	return h.join(" ")

 }
 var str = 'hi, welcome to mest'
 console.log(makeCapital(str))

/*
 *  3. Write reg expresion for email validation(This is not an easy
 *  question, please make sure you do your research on this).
 *
 */
 //Answer For Question Three


/*
 * 4. what is localStorage and sessionStorge under window object? What is the
 *    difference
 */
//Answer For Question Four
//window.localStorage - stores data with no expiration date
//window.sessionStorage - stores data for one session (data is lost when the browser tab is clos