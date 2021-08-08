/*..............Task3(js)................
...              Aya Mohsen           ...
...              q1                   ...
................Task3 (js)..............*/

//************** ques(1)**********
//............(1)
var mystring = "This is a string";
console.log(mystring.split(" "));

          // ......................end...........................

//************** ques(2)**********

console.log(mystring.charCodeAt(3));


//************** ques(3)**********

console.log(mystring.toUpperCase());


//************** ques(4)**********
//1
console.log(mystring.slice(-6));
//2
console.log(mystring.substr(-6, 6));
//3
console.log(mystring.substring(mystring.length - 6, mystring.length));

//************** ques(5)**********

console.log(mystring.replace("a string", "mystring"));


//************** ques(6)**********

console.log(mystring.charAt(3));


//************** ques(7)**********

console.log(parseInt("108$"));


//************** ques(8)**********

console.log(Math.max(12,24,30,70,80));

//************** ques(9)**********

function even (num){
	"use strict";
	var i;
	for(i=0; i<=num; i=i+2){
		console.log(i);
	}
		
}
even(prompt("number="));


//************** ques(10)**********

var newstring = "  Hello world ";
console.log(newstring.trim());
