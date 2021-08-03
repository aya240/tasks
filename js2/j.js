/*..............Task2 (j)................
...              Aya Mohsen           ...
...              q1                   ...
................Task2 (j)..............*/

//************** ques(1)**********
//............(1)
var arr = new Array();
arr[0] = 200;
arr[1] = "Ahmed";
arr[2] = "Hi";
arr[3] = "true";
arr[4] = "false";

//............(2)
var arr_2 = [];
arr[0] = 200;
arr[1] = "Ahmed";
arr[2] = "Hi";
arr[3] = "true";
arr[4] = "false";


//............(3)
var arr_3 = [ 200, "Ahmed", "Hi", "true", "false"  ];


//............(4)
var arr_4 = new Array( 200, "Ahmed", "Hi", "true", "false");

          // ......................end...........................

//************** ques(2)**********

console.log( Array.isArray(arr) );


//************** ques(3)**********

console.log( arr.length );


//************** ques(4)**********

var ar = [ 200, "Ahmed", "Hi", "true", "false", "M", "css", "Hi"  ];
console.log(  ar.lastIndexOf("Hi"));


//************** ques(5)**********

console.log(  ar.indexOf("Hi"));


//************** ques(6)**********

console.log(  ar.toString());


//************** ques(7)**********

console.log(  ar.join("."));


//************** ques(8)**********

//........beginning
ar.unshift("aya");
console.log(ar);

//........beginning
ar.push("mohsen");
console.log(ar);

//........beginning
ar.splice( 2 , 0 ,"lolo");
console.log(ar);
                      //.........................end ........

//************** ques(9)**********

console.log(ar.sort());        //error



//************** ques(10)**********

console.log(ar.reverse());        //error


//************** ques(11)**********

var a = [ "a" , "b"],
    b = [ "c", "d" ];
console.log( a.concat(b) );



