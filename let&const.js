//ES5没有块级作用域，let为JavaScript新增了块级作用域。用它所声明的变量，只在let命令所在的代码块内有效。
//var声明的变量i在全局范围内有效，循环变量泄露为全局变量。而使用let不会出现这个问题
//如何用闭包解决以上问题
var clickBoxs = document.querySelectorAll('.clickBox')
for (var i = 0; i < clickBoxs.length; i++){
    clickBoxs[i].onclick = iteratorFactory(i);
}
function iteratorFactory(i){
    var onclick=function (e) {
        console.log(i);
      }
      return onclick;
}

//const也用来声明变量，但是声明的是常量。一旦声明，常量的值就不能改变。
//const有一个很好的应用场景，就是当我们引用第三方库的时声明的变量，用const来声明可以避免未来不小心重命名而导致出现bug