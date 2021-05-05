
  

/*
    --- number two --
  
*/
function two() {
	"use strict";
	var char1 = document.getElementById("char1").value ,
	    char = document.getElementById("char").value ;
	if ( char1.length ==  char.length){
		document.getElementById("bb").innerHTML = "true";
	}
	else {
		document.getElementById("bb").innerHTML = "false";

	}
}
    //end number two
    
    
/*
    --- number three --
  
*/
function three() {
	"use strict";
	var chicken = document.getElementById("chicken").value ,
	    cow = document.getElementById("cow").value ,
	    pig = document.getElementById("pig").value ;
	    if ( isNaN(chicken) || isNaN(cow) || isNaN(pig) )
	    {
                document.getElementById("sum").innerHTML = "number only";
	    }
	    else{
		  var sum = ( cow*4 ) + ( chicken * 2 ) + ( pig *4 ) ;
                        document.getElementById("sum").innerHTML = "total number is" + " "  +sum;
	    }
}
    //end number three
    
/*
    --- number four --
  
*/
function four() {
	"use strict";
	var age = document.getElementById("age").value ,
	    move = document.getElementById("move").value ;
	    if ( isNaN(age) || isNaN(move) )
	    {
                document.getElementById("avg").innerHTML = "number only";
	    }
	    else{
		  var avg = age / move ;
                        document.getElementById("avg").innerHTML = "the avg  is" + " "  + avg;
	    }
}
    //end number four
	
	
	
	(function self(){
		"use strict";
		var name = prompt("write your name");
		   document.getElementById("self").innerHTML = "welcome to our page " + "  "  + name ;

	}() );