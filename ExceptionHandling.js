var a = 0
try{
    var c = 42/a
    console.log("This not print");
}
catch(err){
    console.log("Divided by zero");
}