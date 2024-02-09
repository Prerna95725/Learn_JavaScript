/*var i=10

function show(){
   var j=20;
   console.log(j);
   console.log(i);
}

show();*/

function outer(){
	var k="k is a local variable of outer function";
	console.log(k);
		function inner(){
			var m="m is a local variable of inner function";
		console.log(m);
			console.log(k);
		}
		inner();
	
}
	outer();
 //inner();
	//if i put inner() here so we cant access inner function. we can access from inside the outer func
	