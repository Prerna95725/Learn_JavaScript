  
  function add(a,b){
  	return a+b;
  }


  function calculator(a,b,opeartor){
    return opeartor(a,b)

  }

  console.log(calculator(1,2,add))



  const emp={
  	name:"prerna"
  }

  const emp1={
  	name:"dhano",
  	greet:function(a){
  		console.log(a,"",this.name)
  	}
  }

  emp1.greet.call(emp,"hi")