const arrowfun=()=>{
console.log("correct");
}

arrowfun();
console.log("-----------");
const gfg=(x,y,z)=>{
	console.log(x+y+z)
}

gfg(10,20,30);

console.log("-----------");

const student={name:"prerna",age:24, 
     greet:()=>{
     	console.log("greeting");
     },
};
     console.log(student.greet);
console.log("-----------");

     function abc(x,y){
     	console.log(x+y)
     }

     abc(1,2);

     console.log("-----------");

     let arr=[12,23,34]
     
     console.log(...arr);

      console.log("-----------");

   let myarr=[23,34,12,67,89,54,90]
   for(let element of myarr){
   	console.log(element)
   }

console.log("-----------");

 let mylist=[{name:"payal",age:24}]

 let out=Array.isArray(mylist)
 console.log(out)

 console.log("------rest-----");

function rest(...inputs){
	let sum=0;
	for(let inp of inputs){
		sum=sum+inp;
     
 }
 console.log(sum)
	}
rest(1,2,3,4,5,6,7,8,9,10);


console.log("-----------");

const arr1=[12,34,67,90,65];
arr1.forEach((n)=>console.log(n));


const arr2=[12,34,67,90,65];
arr1.forEach(function(n,i){
	console.log(n,i)
})

var fil=[
	{name:"prerna",age:23,company:"cts"},
	{name:"sonal",age:20,company:"tcs"},
	{name:"komal",age:27,company:"wipro"},
	{name:"sharma",age:30,company:"yash"}
	]
 //Object.values(laptop).forEach((n)=>console.log(n.cpu));

//laptop.map((val)=> console.log(val.cpu))

fil.forEach((kip)=>
	console.log(kip.name)
)

let takename=fil.filter((userAge)=>userAge.age>25).map((username)=>username.name)
console.log(takename)

console.log("-------------")
const arrayLst=[1,2,3,4,5,6,7,8,9,10];
const datas=arrayLst.reduce((total,value)=>
	total+value,0
	)
console.log(datas)

console.log("-------------")

const hero={name:"batman",age:20};
const output=Object.keys(hero).map((i)=>hero[i]);
console.log(output)

console.log("-------------")
const outputs=Object.values(hero)
console.log(outputs)
console.log("-------------")

const student2={
	name:"komal",
 gender:"female"
};
for(let k in student2){
	console.log(k)
	//console.log(student2[k])
}

console.log("-------------")
const user={
name:"kajal",
age:32
};

const userdetails=Object.entries(user);
console.log(userdetails);
for(var [name , age] of Object.entries(user)){
	console.log(name,"=>",age)
}

console.log("-------------")

let j="it is j"
function outer(){
	let k="it is a k";
	console.log(k)
	//console.log(m)	
	function inner(){
		let m="it is a m";
		console.log(m)
		console.log(k)
 
	}
	inner();
	console.log(j)
}
outer();

console.log("-----------")

let abc1=[9,6,1,4,7];
let xyz=abc1.sort().reverse();
console.log(xyz);
let vl=xyz.slice(1,2);
console.log(vl)

let s1=abc1.splice(0,2);
console.log(s1)
console.log(abc1)

console.log("-----higher order function------")

const add=(a,b)=>{
	return a+b;
}

const mul=(a,b)=>{
	return a*b;
}

//console.log(add(2,3));

const calculator=(num1,num2,operator)=>{
return operator(num1,num2)
}

console.log(calculator(5,6,add))
console.log(calculator(5,6,mul))