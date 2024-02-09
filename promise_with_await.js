var promise
 async function pro() {


 promise=await new Promise((myresolve, myreject) => {

    var x=2;
    if(x==2)
      myresolve("correct");
    else
    myreject(" not correct");

 
});
console.log(promise);
console.log("promise");

}


// promise.then(function(value) {console.log(value);},
  //           function(err) {console.log(err);}
    //         );
pro();

