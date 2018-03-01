class Animal{
    constructor(){
        this.type='animal'
    }
    says(say){
        console.log(this.type + ' says ' + say)
    }
}
let animal=new Animal();
animal.says('Hello');

class cat extends Animal{
    constructor(){
        super()
        this.type='cat'
    }
}

let cat=new cat();
cat.says('hello');

//super关键字，它指代父类的实例（即父类的this对象）。
//子类必须在constructor方法中调用super方法，否则新建实例时会报错。
//这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
//ES6的继承机制，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。