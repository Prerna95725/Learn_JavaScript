var msg = "JavaScript is a case-sensitive language"; //Here, var should be used to declare a variable  
function display()   
{  
console.log(msg); // It will not display the result.  
}   
display();  

//var
var x=12;
function myvar(){
	var a="hello";
	console.log(a);
}
console.log(x);
myvar();

//let
function mylet(){

	//let y=24;
	if(true){
let y="let variable";
	console.log(y);
}
//console.log(y)
}
mylet();

//var
function myfun(){

	//let y=24;
	if(true){
var p="var variable";
	console.log("1",p);
}
console.log("2",p);
}
myfun();

console.log("------------------")

var myname="prerna";
var myname="komal";
console.log(myname);

console.log("------------------")

let first="prerna";
let first="komal";
console.log(first);
console.log("------------------")

 l=56;
function my(){
	console.log(l);
	var l;
}

function lethosting(){
	//console.log(letvariable);
	let letvariable="let varibale";
	console.log(letvariable);
}

lethosting();

abc();
function abc(){
	//console.log(xy);
	var xy="before declared"
	console.log(xy);
}

let a1=10;
let fn=function(){
	console.log(a1);
	let a1=20;
}
fn();