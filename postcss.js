/*使用PostCSS来为CSS代码自动添加适应不同浏览器的CSS前缀。

首先安装postcss-loader 和 autoprefixer（自动添加前缀的插件）

npm install --save-dev postcss-loader autoprefixer

在webpack配置文件中添加postcss-loader，
在根目录新建postcss.config.js,并添加如下代码之后，重新使用npm start打包时，你写的css会自动根据Can i use里的数据添加不同前缀了。
*/


// postcss.config.js
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}