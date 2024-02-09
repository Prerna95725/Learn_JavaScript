

console.log("****forEach*****")
let array=[9,8,7,6,5];
array.forEach(function(n)
{
//return n+1;//array[i]=array[i]+1;
console.log(n);
})


//console.log(array.map(v => v + 1));

//console.log(array)

console.log("****BeforeFilter*****")

const ages=[22,34,11,34,65,10,24,67];

for(let i=0;i<=ages.length;i++){
	if(ages[i]<=20){
		console.log(ages[i])
	}
}

console.log("****Filter*****")

const age=ages.filter(function(age){
	if(age>20)
	{
		console.log(age)
	}
})

console.log("****FilterArrow*****")

var fil=[
	{name:"prerna",age:23,company:"cts"},
	{name:"sonal",age:20,company:"tcs"},
	{name:"komal",age:27,company:"wipro"},
	{name:"sharma",age:30,company:"yash"}
	]

var max=fil.filter(user=>user.age>25)
	console.table(max);  


	console.log("****MapWithObject*****")
var min=fil.map(function(stud){
	return stud.name
})	
console.log(min)

console.log("****forEachWithObject*****")

fil.forEach(function(user){
		console.log(user.name)
	})
//const age=ages.filter(num=>num>20);
//console.log(age)
console.log("****Map*****")

var num=[9,8,7,6,5];
var xyz=num.map(function(n)
{
return n;

})
console.log(xyz)

console.log("****Map2*****")

let dummy=[1,2,3,4,5,6];
let out=dummy.map(v=>v+1);
console.log(dummy)
console.log(out)


console.log("****BeforeReduce*****")
let first=[1,2,3,4,5,6]
let total=0;
for(let i=0;i<first.length;i++)
{
	total=total+first[i];
}
console.log(total)

console.log("****Reduce*****")

const sum=first.reduce(function(total,first){
    return total+first;
},0)
console.log(sum)

console.log("****some*****")

const arr=[9,6,4,8,2]
//const large=arr.some(num=>num>4)
const large=arr.some(function(num){
	return num>4
})
console.log(large)

const v=arr.some(num=>num>10)
console.log(v)

console.log("****every*****")

const sec=arr.every(num=>num>=2)
console.log(sec)
const third=arr.every(num=>num>18)
console.log(third)