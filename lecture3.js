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
 *
 *  var obj = {
 *      func: func // what is the second func here?
 *  };
 *
 *  obj.func(); //what is the output? try to explain why.
 *
 *  obj.func.bind(window)(); // what is the output? why?
 *
 *  obj.func.bind(this)();  // what is the output? why?
 *
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
 */

/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */

/*
 *  3. Write reg expresion for email validation(This is not an easy
 *  question, please make sure you do your research on this).
 *
 */

/*
 * 4. what is localStorage and sessionStorge under window object? What is the
 *    difference
 */