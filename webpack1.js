//通过终端来使用webpack(全局安装的情况下)
//终端输入：webpack {entry file} {destination for bundled file}


//通过配置文件来使用webpack
//当前练习文件夹的根目录下新建一个名为webpack.config.js的文件，我们在其中写入如下所示的简单配置代码，目前的配置主要涉及到的内容是入口文件路径和打包后文件的存放路径。
module.exports = {
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
      path: __dirname + "/public",//打包后的文件存放的地方
      filename: "bundle.js"//打包后输出文件的文件名
    }
  }
//然后只需要再终端里输入webpack命令就能打包了


//对npm进行配置后可以在命令行中使用简单的npm start命令来替代上面略微繁琐的命令。在package.json中对scripts对象进行相关设置即可，设置方法如下。
/*
{
    "name": "webpack-sample-project",
    "version": "1.0.0",
    "description": "Sample webpack project",
    "scripts": {
      "start": "webpack" // 修改的是这里，JSON文件不支持注释，引用时请清除
    },
    "author": "zhang",
    "license": "ISC",
    "devDependencies": {
      "webpack": "3.10.0"
    }
  }
npm的start命令是一个特殊的脚本名称，其特殊性表现在，在命令行中使用npm start就可以执行其对于的命令，
如果对应的此脚本名称不是start，想要在命令行中运行时，需要这样用npm run {script name}如npm run build
*/





