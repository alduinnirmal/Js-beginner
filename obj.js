var data = {name:"Nirmal", Age:25, Place:"Calicut", // object
            dispaly:function(){ // this is a function(Method)
                var name = "Sonu"
                console.log(name)
 
            }}
data.dob="05-04-2001"

for(x in data){
    console.log(data[x])
}

data.dispaly1=function(){
    console.log("Amal Sajan")
}
//console.log(data)
data.dispaly1()
data.dispaly()