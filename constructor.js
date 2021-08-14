function data(name,age,place){
    this.name = name
    this.age = age
    this.place = place
    this.display=function(){
        console.log("Name = "+this.name+" Age = "+this.age +" Place = "+this.place)
    }
}
    var nirmal = new data("Nirmal",20,"Kannur")
    var neethu = new data("Neethy",26,"Bangalore")
    nirmal.display()
    neethu.display()
