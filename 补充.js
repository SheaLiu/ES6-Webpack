//修改变量名，在es6中可以用as实现一键换名。
import animal, { say, type as animalType } from './content'  
let says = say()
console.log(`The ${animalType} says ${says} to ${animal}`)  
//The dog says Hello to A cat


//除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。通常星号*结合as一起使用比较合适。
  //index.js

  import animal, * as content from './content'  
  let says = content.say()
  console.log(`The ${content.type} says ${says} to ${animal}`)  
  //The dog says Hello to A cat



