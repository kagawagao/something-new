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

通过特殊的语法将`DOM`绑定到底层数据。一旦创建绑定，DOM将会同步数据的更新而更新
[slide]
## 组件化
![组件化](http://vuejs.org.cn/images/components.png)
