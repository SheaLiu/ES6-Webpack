//调用animal()方法时忘了传参数，传统的做法就是加上这一句type = type || 'cat' 来指定默认值。
function animal(type){
    type = type || 'cat'  
    console.log(type)
}
animal()

//ES6直接这样写
function animal(type = 'cat'){
    console.log(type)
}
animal()


//rest语法
function animals(...types){
    console.log(types)
}
animals('cat', 'dog', 'fish') //["cat", "dog", "fish"]