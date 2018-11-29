const path = require('path');
//启用热更新的第二步
const webpack = require('webpack');
//导入在内存中生成的html，页面的插件
const htmlWebpackPlugin = require('html-webpack-plugin');
//导入vue-loader插件
const vueLoaderPlugin = require('vue-loader/lib/plugin');
//这个配置文件就是js文件
module.exports = {
	//在配置文件中需要手动指定入口和出口
	entry:path.join(__dirname, './src/main.js'),//表示要使用webpack打包哪个文件
    output:{
		path:path.join(__dirname, './dist'),
		filename: 'bundle.js'//这是指定输出的文件名称
	},
	/*devserver:{//这是配置dev-server命令参数的第二种形式，相对来说，这种方式麻烦一些
		open:true,//自动打开浏览器
		port:8080,//设置启动时候的运行端口
		contentBase:'src',//指定托管的根目录
		hot:true//启用热更新 的第一步
	},*/
	plugins:[
	    new webpack.HotModuleReplacementPlugin(),//这是启用热更新的第三步
		new htmlWebpackPlugin({
			template:path.join(__dirname, './src/index.html'),//指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
			filename: 'index.html' //指定生成的页面名称
		}),
		new vueLoaderPlugin()
	],
	module:{//用于配置所有的第三方模块的加载器
		rules:[//所有第三方模块的匹配文件
		   {test: /\.css$/, use: ['style-loader', 'css-loader'/*从右到左调用*/]},//配置处理.css文件的第三方loader规则
		   {test: /\.less$/, use: ['style-loader', 'css-loader'/*从右到左调用*/, 'less-loader']},//配置处理less文件的第三方loader规则
		   //{test: /\.scss$/, use: ['style-loader', 'css-loader'/*从右到左调用*/, 'sass-loader']},//配置处理sass文件的第三方loader规则
		   //处理图片路径的loader，后面传参limit给定的值，是图片的大小，单位是byte，如果我们引用的图片大于或等于给定的limit值，则不会
		   //被转为base64格式的字符串，如果图片小于limit值，则会被转为base64的字符串
		   //传入的第二个参数name表示显示图片原来的名字，[ext]表示显示图片原有的后缀名
		   {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=866366&name=[hash:8]-[name].[ext]'},
		   {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},//处理字体文件的loader
		   {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},//这是配置Babel来转换高级es的语法
		   {test: /\.vue$/, use: 'vue-loader'}//处理.vue的loader
		]
	},
	resolve:{
		alias:{//修改vue被导入时候包的路径
			//"vue$": "vue/dist/vue.js"
		}
	}
}