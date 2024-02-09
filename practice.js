var a=['h','e','p']
var b=[...a]//spread operator
var c={...a}
console.log(b);
console.log(c);

var fil=[
	{name:"prerna",age:23,company:"cts"},
	{name:"sonal",age:20,company:"tcs"},
	{name:"komal",age:27,company:"wipro"},
	{name:"sharma",age:30,company:"yash"}
	]

	var a=fil.filter(user=>user.age>25).map(function(stud){
	return stud.name
})	
	console.log(a);

	const abx=()=>"good"
	console.log(abx())

	function geet(name){
		console.log("world " +name)
	}

	geet("prerna");

	var fol=fil.forEach()=>{
		console.log()
	}