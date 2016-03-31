title: Vue 简介
speaker: 高靖淞<kingsongao1221@gmail.com>
url: https://github.com/kagawagao
transition: slide3
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: dark

[slide]
# Vue 简介

高靖淞(工程院技术开发部前端开发处)[<i class="fa fa-github"></i>](https://github.com/kagawagao)

[slide]

![Vue](http://vuejs.org.cn/images/logo.png)

项目地址: [Github](https://github.com/vuejs/vue)、[官网](vuejs.org)

作者:[yyx990803](https://github.com/yyx990803)

[slide]
## 关于作者

- [个人网站](http://evanyou.me/)
- [知乎](https://www.zhihu.com/people/evanyou)
- [Github](https://github.com/yyx990803)
- 前Google员工
- [Meteor](https://www.meteor.com/)

[slide]
## 为什么叫Vue

Vue取自法语，其意思其实就是英语的View，即视图，由此也表明了Vue是专注于前端界面的一个库，他本身不是一个全能框架，和`React`一样只专注视图层。 {:.flexbox.vleft}

[slide]
## 使用Vue

[slide]
## 兼容性

Vue.js 不支持 `IE8` 及其以下版本，因为 Vue.js 使用了 IE8 不能实现的 `ECMAScript 5` 特性。 {:.flexbox.vleft}

Vue.js 支持所有兼容 `ECMASCript 5` 的浏览器。 {:.flexbox.vleft}

[slide]
## 安装

- CDN版本 {:&.flexbox.vleft}

  可通过[jsdelivr](http://cdn.jsdelivr.net/vue/1.0.20/vue.min.js)或[cndjs](http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.20/vue.min.js)获取
- NPM版本
```bash
$ npm install vue
```

- Bower
```bash
$ bower install vue
```

- AMD

  可直接使用上述版本

注：在开发需要强制应用内容安全策略 (`CSP`) 的应用时，请使用`CSP`兼容版本，即`vue@csp` {:.flexbox.vleft}

[slide]
## 特点

- 简洁。 HTML 模板 + JSON 数据 + 一个 Vue 实例 = 一个组件 {:&.rollIn}
- 数据驱动。 自动追踪依赖的模板表达式和计算属性。
- 组件化。 用解耦、可复用的组件来构造界面。
- 轻量级。 ~24kb min+gzip，无依赖。
- 快速。 精确有效的异步批量 DOM 更新。
- 模块友好。 通过 NPM 或 Bower 安装，无缝融入你的工作流。

[slide]
## 一个简单的Vue组件
HTML代码 {:.flexbox.vleft}
```html
<p id="demo">{{msg}}</p>
```
javascript代码 {:.flexbox.vleft}
```javascript
var exampleVM = new Vue({
  el: '#demo',
  data: {
    msg: 'Hello world'
  }
})
```

[slide]
## 何谓数据驱动
- 核心：
  - 相对于程序逻辑，人类更擅长于处理数据。

- 优势：
  - 可读性更强，处理流程一目了然。
  - 更容易修改，只需要更新数据即可修改内容，不需要修改流程。
  - 可重用

[slide]
## Vue 中的数据驱动
![data-drive](http://vuejs.org.cn/images/mvvm.png)

通过特殊的语法将`DOM`绑定到底层数据。一旦创建绑定，`DOM`将会同步数据的更新而更新

[slide]
## 组件化
![组件化](http://vuejs.org.cn/images/components.png)

同`React`一样，`Vue`也推荐*一切皆组件*的思维，这不只是框架的思想，更是一种趋势。在[`WebComponent`](https://www.w3.org/wiki/WebComponents/)还没有开始使用的现在，我们应当去推动这个趋势。通过封装可重用的代码，使之成为一个组件，多处复用，减少代码量，尤其是重复代码 {:.flexbox.vleft}

[slide]
## 组件化代码

```html
<div id="app">
  <app-nav></app-nav>
  <app-view>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </app-view>
</div>
```

相对于`WebComponent`，UI库提供的组件化的优势： {:.flexbox.vleft}
  - 首先规范尚未完成且实现可能不一，而奇葩`IE`你不知道他该怎么办
  - 提供组件间数据传递
  - 动态替换

[slide]
## 异步更新

Vue在内部实现的是一套*异步更新*`DOM`的机制。每当观察到数据变化时，Vue 就开始一个队列，将同一事件循环内所有的数据变化缓存起来。如果一个 watcher 被多次触发，只会推入一次到队列中。等到下一次事件循环，Vue 将清空队列，只进行必要的 DOM 更新。 {:.flexbox.vleft}

也就是说Vue不会因为数据的改变而立即更新DOM，一个数据的多次更新也只会更新最后一次。这样所带来的是一个性能的提升。而通过合理的使用`track-by`属性还能得到一定的提高。 {:.flexbox.vleft}

  - [DBMON测试](http://mathieuancelin.github.io/js-repaint-perfs/) {:&.flexbox.vleft}
  - [Vue](https://link.zhihu.com/?target=http%3A//vuejs.github.io/js-repaint-perfs/vue/)
  - [React](https://link.zhihu.com/?target=http%3A//vuejs.github.io/js-repaint-perfs/react/)

[slide]
## Vue 的一些实例

[slide]
## 构建Vue 实例

- 新的Vue 实例

  ```javascript
    var vm = new Vue({
      // 选项
    })
  ```

- 可复用的组件

  ```javascript
  var MyComponent = Vue.extend({
    // 扩展选项
  })

  // 所有的 `MyComponent` 实例都将以预定义的扩展选项被创建
  var myComponentInstance = new MyComponent()
  ```

[slide]
## 属性和方法

  Vue实例会代理其`data`对象中在构建时所有的属性，而在后续新添加的则不会代理 {:.flexbox.vleft}

  ```javascript
  var data = { a: 1 }
  var vm = new Vue({
    data: data
  })

  vm.a === data.a // -> true

  // 设置属性也会影响到原始数据
  vm.a = 2
  data.a // -> 2

  // ... 反之亦然
  data.a = 3
  vm.a // -> 3

  ```

  除此之外，其他的一些方法和属性都会暴露出来，都带有`$`前缀。

[slide]
## 生命周期函数

实例化： {:.flexbox.vleft}

`created` ---> `beforeCompile` ---> `compiled` ---> `ready` {:.flexbox.vleft}

销毁： {:.flexbox.vleft}

`beforeDestroy` ---> `destroyed` {:.flexbox.vleft}

[slide]
## ......

还有很多诸如此类的东西，就不一一赘述，可在官方的文档上找到更为科学的解释。 {:.flexbox.vleft}

- [官网](vuejs.org)  {:&.flexbox.vleft}
- [Github](https://github.com/vuejs/vue)
- [介绍(中文版)](http://zhuanlan.zhihu.com/evanyou/20302927)

[slide]
## 生态

相较于`React`，`Vue`目前的生态圈还是很*嫩*。 但是....

[slide]
## 插件

可以通过开发插件的形式，来补充功能，是他从一个*库*完成到*框架*的进化 {:.flexbox.vleft}
  - 添加全局方法或属性
  - 添加全局资源：指令/过滤器/过渡等
  - 添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。
  - 一个库，提供自己的 API，同时提供上面提到的一个或多个功能

[slide]
## 开发单页应用？ 路由是必须的

[vue-router](https://github.com/vuejs/vue-router) {:.flexbox.vleft}

安装： {:.flexbox.vleft}

```bash
$ npm install vue-router --save
```

[slide]
使用： {:.flexbox.vleft}

```html
<div id="app">
  <router-view></router-view>
</div>
```
```html
<h2>Go To <a v-link="{path: '/demo0'}">Demo0</a></h2>
```
```javascript
// 加载插件
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```
```javascript
// 启动路由
import Vue from 'vue'
import Router from './routes/index'
const App = Vue.extend({})

Router.start(App, '#app')

```

[slide]
## 需要像`Flux`一样管理数据？

官方根据`Flux`架构实现了一套为Vue所能使用： [`Vux`](https://github.com/vuejs/vuex)

具体使用参见Demo

[slide]
## And more...

- 简单脚手架。 [`vue-cli`](https://github.com/vuejs/vue-cli)
- 模块化开发。 [`vue-loader`](https://github.com/vuejs/vue-loader) + `.vue` + [其他语法高亮编辑器插件](https://github.com/vuejs/awesome-vue#syntax-highlighting)
- RESTful。[`vue-resource`](https://github.com/vuejs/vue-resource)
- 表单验证。[`vue-validator`](https://github.com/vuejs/vue-validator)
- 使用`class`。 [vue-class-component](https://github.com/vuejs/vue-class-component)
- ......

[awesome-vue](https://github.com/vuejs/awesome-vue)

[slide]
## 对比其他框架

参见[这里(官网)](http://vuejs.org.cn/guide/comparison.html)以及知乎上的一些零零散散的问题的答案

[slide]
## UI 组件

- [VueStrap](http://yuche.github.io/vue-strap/): 基于BootStrap
- [vue-antd](https://github.com/okoala/vue-antd): 基于 ant-design
- [VUI](https://github.com/lepture/vui)：适用移动端

还有很多可在[awesome-vue](https://github.com/vuejs/awesome-vue)中找到

[slide]
## 开发工具

- [vue-devtools](https://github.com/vuejs/vue-devtools)
- [awesome-vue](https://github.com/vuejs/awesome-vue#development-tools)

[slide]
# Thanks
