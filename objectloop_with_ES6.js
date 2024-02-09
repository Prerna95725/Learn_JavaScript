console.log("*********iterating an object using for in loop***********");
var dog={
	name:"foo",
	age:9
} 

for(var d in dog)
{
	console.log(d); // print only keys
	console.log(dog[d]); //print only values
}

console.log("*********iterating an object using Object.entries***********");

const user={
name:"kajal",
age:32
};

console.log(Object.entries(user));

for(const [key, value] of Object.entries(user)){
	console.log(key +" => "+value)
}


