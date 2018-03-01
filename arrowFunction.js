

class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        setTimeout(function(){
            console.log(this.type + ' says ' + say)
        }, 1000)
    }
}

 var animal = new Animal()
 animal.says('hi')  //undefined says hi

 /*setTimeout中的this指向的是全局对象。所以为了让它能够正确的运行，传统的解决方法有两种：
    1.第一种是将this传给self,再用self来指代this
 
    says(say){
    var self = this;
    setTimeout(function(){
        console.log(self.type + ' says ' + say)
    }, 1000)

    2.第二种方法是用bind(this),即:
    says(say){
      setTimeout(function(){
          console.log(this.type + ' says ' + say)
      }.bind(this), 1000)
*/

class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        setTimeout( () => {
            console.log(this.type + ' says ' + say)
        }, 1000)
    }
}
 var animal = new Animal()
 animal.says('hi')  //animal says hi

 //使用箭头函数时，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
//并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，它的this是继承外面的，因此内部的this就是外层代码块的this。
