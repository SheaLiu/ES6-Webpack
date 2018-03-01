//生成Source Maps（使调试更容易）
//通过简单的配置，webpack就可以在打包时为我们生成的source maps，这为我们提供了一种对应编译文件和源文件的方法，使得编译后的代码可读性更高，也更容易调试。

//对小到中型的项目中，eval-source-map是一个很好的选项，再次强调你只应该开发阶段使用它，我们继续对上文新建的webpack.config.js:
module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + "/app/main.js",
    output: {
      path: __dirname + "/public",
      filename: "bundle.js"
    }
  }




//构建本地服务器
//在webpack中进行配置之前需要单独安装它作为项目依赖:npm install --save-dev webpack-dev-server
//修改配置文件webpack.config.js：
module.exports = {
    devtool: 'eval-source-map',
  
    entry:  __dirname + "/app/main.js",
    output: {
      path: __dirname + "/public",
      filename: "bundle.js"
    },
  
    devServer: {
      contentBase: "./public",//本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
      inline: true//实时刷新
    } 
  }


//package.json中的scripts对象中添加如下命令，用以开启本地服务器：
/*"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack",
    "server": "webpack-dev-server --open"
  },
  在终端中输入npm run server即可在本地的8080端口查看结果
*/
