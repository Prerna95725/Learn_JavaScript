console.log("*********iterating an object using Object.values***********");

const user={
name:"kajal",
age:32
};

Object.values(user).forEach((n) =>
{
console.log(n);

})

console.log("*********iterating an object using Object.keys***********");
console.log("*********using this you can convert object to Array***********");


var obj={name:'payal',age:20};
var value=Object.keys(obj).map(function(e){
	return obj[e];
});
console.log(value);


console.log("********* convert Array to object***********");

const array1=[1,2,3,4,5]
const datas={...array1}
console.log(datas)

