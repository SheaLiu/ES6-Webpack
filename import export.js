//假设我们有两个js文件: index.js和content.js,现在我们想要在index.js中使用content.js返回的结果，我们要怎么做呢？
//首先定义
//content.js
define('content.js', function(){
    return 'A cat';
})

//然后require:
//index.js
require(['./content.js'], function(animal){
    console.log(animal);   //A cat
})

//CommonJS是怎么写的呢？
//index.js
var animal = require('./content.js')

//content.js
module.exports = 'A cat'

//ES6的写法
//index.js
import animal from './content'

//content.js
export default 'A cat'