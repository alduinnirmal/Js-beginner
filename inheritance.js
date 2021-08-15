//inheritance in javascript
class ParentClass{    //super class or parent class
     display1() {
        console.log("This is a parent class")
    }
}

class ChildClass extends ParentClass{ //subclass or child class
    
    constructor (a,b){
        super()
        this.a = a
        this.b = b

    }

    display2(){
        console.log("This is a Child Class => "+(this.a+this.b))
    }
}
var obj = new ChildClass(10,30)

obj.display1()
obj.display2()