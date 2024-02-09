const employee1={
	firstname:"rahul",
	age:28
}

const employee2={
	firstname:"aruni",
	age:3
}

const empolyee={
	firstname:"payal",
	fullname:function(a){
		console.log(a," ",this.firstname," ", this.age);
	}
}

empolyee.fullname.call(employee2,"hello")

empolyee.fullname.apply(employee1,["helloworld"])

let newbind=empolyee.fullname.bind(employee2,"hello")
newbind()