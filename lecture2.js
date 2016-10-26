/*
 * 1. explain the special meaning of the following special characters
 \0 the null character
 // createa null caracter

 \n new line
 // creates a ne line

 \r carriage return
 // carries stuff down

 \v vertical tab
 //	creates a vertical tab

 \t
 // creates a new tab

 \backspace
 // to find a match at the beginning and the end of words

 \f form feed
 // creates a form feed

 */


/*
 *  2.Please combine those two array together as one array by using concate:
 *  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 *  var arr2 = ['Thursday', 'Friday', 'Saturday']
 */
 var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 var arr2 = ['Thursday', 'Friday', 'Saturday']
 var arrResult = arr1.concat(arr2);
 console.log(arrResult)



/*
 *  3.Please combine those three array together as one array by only using concate() function once:
 *  var arr1 = ['Sunday', 'Monday']
 *  var arr2 = ['Tuesday', 'Wednesday']
 *  var arr3 = ['Thursday', 'Friday', 'Saturday']
 */
 var arr1 = ['Sunday', 'Monday']
 var arr2 = ['Tuesday', 'Wednesday']
 var arr3 = ['Thursday', 'Friday', 'Saturday']
 var arrResult2 = arr1.concat(arr2,arr3);
 console.log(arrResult2)

/*
 * 4. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.sort());
 *	  [ 'Enoch', 'Todd', 'Yaw', 'ashwin', 'jerry', 'lars', 'mike' ]
 *    console.log(arr);
 *	  [ 'ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars' ]
 */

/*
 * 5. what is the result(output of following code):
 *    var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 *    console.log(arr.sort());
 * 	  [ 1, 2, 3, 'apple', 'black', 'orange', 'test' ]
 *    console.log(arr);
 *	  [1, 3, 'apple', 'orange', 'black', 'test', 2]
 */

/*
 * 6. Please remove mike, jerry, and Enoch from the following array by using slice
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 */
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
var sec1 = arr.slice(0,2)
var sec2 = arr.slice(4,5)
var sec3 = arr.slice(-1)
arr = sec1.concat(sec2,sec3)
console.log(arr)






/*
 * 7. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-3, -1));
 *	  ['Yaw', 'Enoch' ]
 *    console.log(arr);
 *	  [ 'ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars' ]
 */


/*
 * 8. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(2));
 	  [ 'mike', 'jerry', 'Yaw', 'Enoch', 'lars' ]
 *    console.log(arr);
 	  [ 'ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars' ]
 */

/*
 * 9. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-2));
 	  [ 'Enoch', 'lars' ]
 *    console.log(arr);
 	  [ 'ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars' ]
 */


/*
 * 10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 *
 *   and invoke the function expression to caluate the result of 256 + 532
 */
 function addTwoNumber (num1, num2) {
     return num1 + num2;
 }
 console.log(addTwoNumber(256, 532));

/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 */
(function hello(name) {
	console.log( "Good morning " + name )
})('Jerry')

/*
 * 12. you have following objects:
 *     var person1 = {
 *          name: 'ashwin'
 *     };
 *
 *     var person2 = {
 *          name: 'lars'
 *     };
 *
 *    function namer() {
 *          return this.name;
 *    }
 *
 *    use bind function here to make namer() function to call 'ashwin'
 *    and lars
 */
var person1 = {
   	name: 'ashwin'
};
 
var person2 = {
    name: 'lars'
};
 
function namer() {
    return this.name;
}
var name1 = namer.bind(person1);
var name2 = namer.bind(person2);
console.log(name1())
console.log(name2())

/*
 * 13. you have following object:
 *     var number = {
 *          x: 22,
 *          y: 33
 *     };
 *
 *    var count = function() {
 *          console.log(this.x + this.y);
 *    }
 *  a. what is the result when we invoke count()?
 *  b. use bind on function expression to make this work.
 */

var number = {
	x: 22,
	y: 33
};

var count = function () {
	console.log(this.x + this.y)
}

var bindCount = count.bind(number);
bindCount()


/*
 * 14. you have following objects:
 *     var person1 = {
 *          firstName: 'ashwin'
 *          lastName: 'Yaw'
 *     };
 *
 *     var person2 = {
 *          firstName: 'lars',
 *          lastName: 'Mike'
 *     };
 *
 *     function hello(greeting) {
 *          console.log(greeting + ' ' + this.firstName + '' + lastName);
 *    }
 *
 *  use call methods on function expression to make this work.
 */

var person1 = {
    firstName: 'ashwin',
    lastName: 'Yaw'
};
 
var person2 = {
    firstName: 'lars',
    lastName: 'Mike'
};
 
function hello(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

personBind1 = hello.bind(person1, 'Hi');
personBind1()

personBind2 = hello.bind(person2, "Charlie ")
personBind2()
  
/*
 * 15. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.
 */

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
 var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'

 console.log(makeCapital(str))


