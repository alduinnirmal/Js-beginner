class MyClass {

    constructor(a,b){
        this.a = a
        this.b = b

    }
    hello(){
        console.log(this.a+this.b);
    }
}

var obj = new MyClass(50,60)
obj.hello()

