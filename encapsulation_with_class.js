class Student  
  {  
    constructor()  
    {  
       var firstname;  
       var lastname;  
    }  
        getFirstname()  
        {  
          return this.firstname;  
        }  
      setFirstname(firstname)  
      {  
        this.firstname=firstname;  
      }  
        
      getLastname()  
      {  
        return this.lastname;  
      }  
    setLastname(lastname)  
    {  
      this.lastname=lastname;  
    }  
  
  }
    var stud=new Student();  
     stud.setFirstname("Ravi");  
     stud.setLastname("sharma");  
     console.log(stud.getFirstname()+" "+stud.getLastname()); 
     console.log(stud.firstname)