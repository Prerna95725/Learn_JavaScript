const laptop={
	branch:"dell",
	cpu:"i5",
	color:"grey",
	greet: function(){
		console.log(this.cpu);
	}
}

const laptop1={
	branch:"HP",
	cpu:"i7",
	color:"black",
	greet: function(){
		console.log(this.cpu);
	}
}

laptop.greet();
laptop1.greet();

//console.log(laptop.cpu)