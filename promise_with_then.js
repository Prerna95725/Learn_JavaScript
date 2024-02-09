var promise = new Promise((myresolve, myreject) => {

    var x=2;
    if(x==2)
      myresolve("correct");
    else
    myreject(" not correct");
});


promise.then(function(value) {console.log(value);},
             function(err) {console.log(err);}
             );
      console.log("promise");