/*
webpack提供两个工具处理样式表，css-loader 和 style-loader，二者处理的任务不同，css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,
style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。

//安装
npm install --save-dev style-loader css-loader
*/

/*使用
module.exports = {

    ...
     module: {
         rules: [
             {
                 test: /(\.jsx|\.js)$/,
                 use: {
                     loader: "babel-loader"
                 },
                 exclude: /node_modules/
             },
             {
                 test: /\.css$/,
                 use: [
                     {
                         loader: "style-loader"
                     }, {
                         loader: "css-loader"
                     }
                 ]
             }
         ]
     }
 };

 接下来，在app文件夹里创建一个名字为"main.css"的文件，对一些元素设置样式

我们这里例子中用到的webpack只有单一的入口，其它的模块需要通过 import, require, url等与入口文件建立其关联，
为了让webpack能找到”main.css“文件，我们把它导入”main.js “中，如下:
*/
//main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';//使用require导入css文件

render(<Greeter />, document.getElementById('root'));


 

