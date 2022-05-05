### `webpack`配置静态`js-scss`文件打包

> 适用于打包传统前后端不分离项目，只对`JavaScript`和`scss`进行打包处理


### 目录结构

```shell
static      #存放静态资源目录
	config  #打包配置文件
	css	    #scss打包后存放的目录
	img
	js	    #打包后js目录
	jsDev   #开发期间js代码
	scss	#用scss编写样式
view        #存放html模板目录
	index.html
```

### 基本命令

```shell
#进入static目录下执行npm i 进行安装依赖包
npm i              
npm run dev        #开发期间使用本地开发
npm run buildFile  #对项目进行打包处理
```

### `html`目录中引入`js`和`css`

```html
<!--代码打包后会生成一个公共css一个当前页面模块的css-->
<link rel="stylesheet" href="/static/css/common/common.css">
<link rel="stylesheet" href="/static/css/login/login.css"> 

<!--代码打包后会生成一个公共js一个当前页面模块的js-->
<script src="/static/js/common/common.js"></script>
<script src="/static/js/login/login.js"></script>
```

