title: Social 管理台开发介绍
speaker: 高靖淞<kingsongao1221@gmail.com>
url: https://github.com/kagawagao
transition: slide3
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: dark

[slide]
# Social 管理台开发介绍

高靖淞(工程院技术开发部前端开发处)[<i class="fa fa-github"></i>](https://github.com/kagawagao)

[slide]
## 为什么统一框架
----
* 避免重复劳动，提高开发效率 {:&.rollIn}
* 易用性
* 减少出BUG的几率
* 便于维护


[slide]
## 现有基本框架
----
1. 老版本的管理平台:[Seajs](http://seajs.org/docs/)+[Spm](http://spmjs.io/)+[nd-front](https://github.com/ndfront) [[传送门](http://admin-develop.dev.web.nd)] {:&.rollIn}
2. 新版本的管理平台:[Webpack](https://webpack.github.io/)+[npm](https://www.npmjs.com/)+[nd-front](https://github.com/ndfront) [[传送门](http://admin.dev.web.nd)]
3. Smart India:[Webpack](https://webpack.github.io/)+[npm](https://www.npmjs.com/)+[React](https://github.com/ndfront)+[Ant Design](http://ant.design/docs/react/introduce) [[传送门](http://shop-si.debug.web.nd)]

[slide]

## 一切的一切的开始
[Node.js](https://nodejs.org/en/) --- 事件驱动(event driven)、非阻塞 I/O 模型(non-blocking I/O model) {:.flexbox.vleft}

不止是一个Javascript Runtime，更是一个生态 {:.flexbox.vleft}

[NPM](https://www.npmjs.com/)(Node Package Manager) --- Node.js 包管理工具 {:.flexbox.vleft}



[slide]
## 新版管理台文件目录结构
![文件树](../images/tree.jpg)

[slide]
* /.bin --- 存放命令脚本的文件夹
* /.i18n --- 多语言
* /config --- 基础配置
* /karma --- 测试配置
* /mocks --- mock数据
* /server --- 本地开发服务配置，其中包含dispatcher、webpack-hmr以及mock等中间件(middlewares), 框架为koa v2.0-alpha
* /src --- 源文件目录
* /tests --- 测试脚本
* /webpack --- Webpack 基础配置
[slide]
## src 目录结构
![src目录](../images/src.png)  
[slide]
## 主要脚本

```javascript
"i18n": "better-npm-run i18n", // 国际化提取
"i18n:en": "npm run i18n -- --lang=en",
"i18n:id": "npm run i18n -- --lang=id",
"clean": "rm -rf ../webapp/*", // 清理
"compile": "better-npm-run compile", // 打包
"lint": "eslint --max-warnings 10 .", // ESLint
"lint:fix": "npm run lint -- --fix",
"start": "better-npm-run start", // 启动本地开发，环境为 Simulation, 数据来自mock
"dev:DEVELOPMENT": "npm start -- --ENV=DEVELOPMENT",
"dev:DEBUG": "npm start -- --ENV=DEBUG",
"dev:PREPRODUCTION": "npm start -- --ENV=PREPRODUCTION",
"dev:PRESSURE": "npm start -- --ENV=PRESSURE",
"test": "better-npm-run test", // 启动测试
"test:dev": "npm test -- --watch",
"deploy": "better-npm-run deploy" // 部署
```

[slide]

## 关键
* 路由  {:&.rollIn}
* 模块化开发

[slide]
## 路由
----
感谢`director.js`，以及`nd-router`！！！{:&.flexbox.vleft}

同时`nd-spa`中集成的`router.js`以及`nd-template`则使路由配置变得简单 {:.flexbox.vleft}

[slide]
## 你只需要这样
```javascript
{
  // 图标
  icon: 'page',
  // 地址
  name: 'applist',
  // 名称
  title: __('应用列表'),
  // 子菜单栏
  folders: [{
    icon: 'page',
    title: __('应用管理'),
    // 路由
    routes: [{
      route: 'app',
      title: __('应用列表'),
      level: '7|applists',
      module: 'applist'
    }]
  }, {
    icon: 'guest',
    title: __('访客模式管理'),
    routes: [{
      route: 'guest',
      title: __('接口白名单'),
      level: '7|guest',
      module: 'applist'
    }]
  }]
}
```
[slide]
## 你所得到的
![侧边栏截图](../images/route.png)
[slide]
## 模块化
* 为什么模块化 {:&.flexbox.vleft}
```html
<script src="a.js"></script>
<script src="b.js"></script>
<script src="c.js"></script>
```

> 恼人的命名冲突 {:&.flexbox.vleft}

> 烦琐的文件依赖 {:&.flexbox.vleft}

[玉伯的解读](https://github.com/seajs/seajs/issues/547) {:.flexbox.vleft}

* 模块化的好处 {:&.flexbox.vleft}
  1. 代码的职责划分 {:&.flexbox.vleft}
  2. 高度解耦且可替换
  3. 维护简单，尤其是多人团队开发
[slide]
## Webpack --- 使模块化开发更简单
![webpack](https://webpack.github.io/assets/what-is-webpack.png)

[slide]
## Smart India 管理台 --- All The New

* React --- 构建用户界面 {:&.flexbox.vleft}
* Redux --- 所有的可变状态存在于唯一的Store中
* React-router --- 路由
* Ant Design --- UI 组件
[slide]
## React

* 专注UI --- MVC 的 V {:&.rollIn}
* 虚拟DOM --- DOM Diff 算法 和 服务端渲染
* 数据流 --- 单向数据流, 子组件只能通过`props`来获取父组件传递下来的数据
* 状态容器 --- React组件本身的行为受制于它的状态`state`，一旦状态发生改变，组件就会重新渲染`render`
[slide]
##重要的生命周期函数(lifecycle)

```javascript
componentWillMount () // 在虚拟DOM节点将要挂载到真实DOM时触发，只会触发一次
componentDidMount () // 挂载完成时触发，只会触发一次
componentWillReceiveProps (nextProps) // 有新的props传入组件时触发，但props有可能不会发生改变且不一定会使组件更新
componentWillUpdate (state) // 组件将要更新时触发
componentDidUpdate (prevProps, prevState) // 组件更新完成触发
componentWillUnmount () // 将要从真实DOM中销毁时触发
shouldComponentUpdate (nextProps, nextState) // 通过返回true || fasle 来决定组件是否更新
```

[A implies B does not imply B implies A](https://facebook.github.io/react/blog/2016/01/08/A-implies-B-does-not-imply-B-implies-A.html) {:.flexbox.vleft}
[slide]
## Redux

来自于Flux, 但比之更简单，更容易理解，更好用
![flux](https://github.com/facebook/flux/raw/master/docs/img/flux-diagram-white-background.png)
[slide]
## Redux API
### 顶层API {:.flexbox.vleft}

```javascript
createStore(reducer, [initialState]) // 创建store
combineReducers(reducers) // 将多个reducer整合
applyMiddleware(...middlewares) // 绑定中间件(Middleware)
bindActionCreators(actionCreators, dispatch) // 绑定Actions
compose(...functions) // 绑定增强器(Enhancer)
```
在实际开发中，通常通过这种方式来创建store {:.flexbox.vleft}

```javascript
const rootReducer = combineReducers(...reducers)
let finalCreateStore = applyMiddleware(...middlewares)(createStore)
finalCreateStore = compose(...enhancers)(finalCreateStore)
const store = finalCreateStore(rootReducer, initialState)
```
[slide]
## Store的API

```javascript
getState() // 获取store中所有reducer的当前状态
dispatch(action) // dispatch一个action，这是改变reducer状态的唯一方式
subscribe(listener) // 订阅store的更新，用于middlewares 和 enhancers
getReducer() // 获取reducer
replaceReducer(nextReducer) // 用下一个状态的reducer去替换当前reducer
```
以上的函数通常在写中间件或者增强器中会用 {:.flexbox.vleft}
[slide]
## 流程

![redux](../images/redux.png)

`dispatch(action)`之后, redux会去遍历每一个reducer，匹配action.type，返回一个新的reducer {:.flexbox.vleft}
[slide]
## React + Redux = 天作之合
```javascript
<Provider store={store}/> // 在根节点以上的组件，使得可以在子组件中使用connect方法
connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
```
`connect()`所做的事情就是在组件外层再包裹一个组件，并通过`props`将所需的`reducers`、`actions`传递给子组件 {:.flexbox.vleft}
```jsx
// 我们所写的(ES6)
@connect(state => ({
  ...state[reducerName],
  ...
}), dispatch => ({
  ...bindActionCreators(...actions, dispatch)
}))
export default class MyComponent extends React.Component {
  ...
}
// 实际上
<Connect>
  <MyComponent {...this.props} {...actions} {...reducers}/>
</Connect>
```
[slide]
## React-Router

```jsx
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.body)

```
[slide]
## Smart India 的src文件目录结构

![store-src](../images/store-src.png)

[slide]
## 工欲善其事，必先利其器

* 拥抱ES2015(ES6)，以及ES7(暂名) --- babel-loader
* 高质量的代码 --- 可能jshint已经过时，eslint正兴
* 跨平台、团队开发 --- editorconfig...
* 编辑器 --- Sublime Text 3，Atom，Webstorm
* 调试工具 --- ReduxDevTools([内嵌版本](https://github.com/gaearon/redux-devtools)、[Chrome扩展](https://github.com/zalmoxisus/redux-devtools-extension))

[slide]

# Thanks!!!
