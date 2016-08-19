title: HOC 与 FP
speaker: 高靖淞
transition: cards
files: /js/demo.js,/css/demo.css
theme: dark

[slide]

# 高阶组件与其中的函数式编程思想
高靖淞(工程院技术开发部前端开发处)[<i class="fa fa-github"></i>](https://github.com/kagawagao)

[slide]

## 组件间的功能性复用
---
尽管模块化的组件相互之间独立，但难免会共用一些功能。{:.flexbox.vleft}

* 表单验证 {:.vleft}
* 组件的生命周期动画 {:.vleft}
* 路由信息 {:.vleft}
* 等等 {:.vleft}

[slide]
## 需要解决的问题
---
* 功能性函数
* 独立的生命周期
* 公共属性

[slide]

## 现有方案
---
* Mixins 方案 {:&.rollIn}
* HOC (High Order Component)

[slide]

## Mixins 方案
---

Mixins 方案在 `React` 与 `Vue` 中都有应用

```javascript
// React
var Component = React.createClass({
  mixins: [someMixins]
})
```

```javascript
// Vue
var vm = new Vue({
  created: function () { console.log(2) },
  mixins: [mixin]
})

Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})
```

[slide]

## Mixins 缺点
---

* 难以维护
* 难以扩展
* `ES 6` 支持不友好（`ES 6` 以上需要依赖 `react-mixin` 等类似库）
---
*凡事都有例外。`Vue@2` 中依然支持 `Vue.mixin` 与 `mixin`，因为他的实例化是隐式调用 `Vue.extend` 而非 `class`* {:.vleft}

[slide]

## 旧王已死，新王万岁

> [Mixins Are Dead. Long Live Composition](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.7c3w8g38r)

---
> [Enhance.js](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775)

[slide]

## 什么是 HOC
---
可以简单的理解为他是一个这样的函数 {:.vleft.flexbox}

```javascript
  HOC: component => WrapComp
```
### React
借用 `Enhance.js` 中的例子 {:.vleft.flexbox}

```javascript
import { Component } from "React";

export const Enhance = ComposedComponent => class extends Component {
  constructor() {
    this.state = { data: null };
  }
  componentDidMount() {
    this.setState({ data: 'Hello' });
  }
  render() {
    return <ComposedComponent {...this.props} data={this.state.data} />;
  }
};
```

[slide]

### Vue@2
----

`Vue@2` 称之为 `functional component`，其本质是基本一致的

```javascript
Vue.component('fade', {
  functional: true,
  render (createElement, { children }) {
    const data = {
      props: {
        name: 'fade'
      },
      on: {
        beforeEnter () { /* ... */ },
        afterEnter () { /* ... */ }
      }
    }
    return createElement('transition', data, children)
  }
})
```

[slide]

## HOC 的优势

* 非侵入式
* 可以很友好的转化为 `decorator`，是的书写极为简便。
* 拓展性好。可以通过传递参数的形式对 `HOC` 进行定制。

---
### 例子： {:.flexbox.vleft}

* `antd` 中的 [`Form.create()`](https://github.com/ant-design/ant-design/blob/master/components/form/index.tsx#L9)
* `react-redux` 中的 [`connect`](https://github.com/reactjs/react-redux/blob/68a4f2b78671329e10bfca87f8f1c82cc8690459/src/components/connect.js#L35)

[slide]

## 前面的都是废话
----

`Functional Programing` 才是我想安利的

`Javascript` 作为一个典型的 `多范式` 编程语言，而且 `function` 还是 `一等公民`

[slide]
---
## 在函数式编程之前

什么是函数？

* 在数学中对[函数](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0)的定义是：输入值集合中的每项元素皆能对应唯一一项输出值集合中的元素。 {:&.rollIn}

[slide]

## 纯函数

相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用，也不依赖外部环境的状态。

[slide]

```javascript
// 这很纯
const getGreat = (a) => {
  return (b) => {
    return a > b ? a : b
  }
}

// 这个也很纯
Array.prototype.slice


// 这不纯
const b = 4
const getLess = (a) => {
  return a > b ? b : a
}

// 这个也不纯
Array.prototype.splice

```

[slide]

## 柯里化(currying)

把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数

```javascript
// 一般
const add = (x, y) => x + y

add(1,2) // => 3

// 柯里化
const add = x => {
  return y => x + y
}

const add5 = add(5)

const add100 = add(100)

add5(10) // => 15

add100(100) // => 200
```
函数柯里化可以在某种意义上实现缓存和预加载功能

[slide]

## Compose
```javascript
//两个函数的组合
const compose = (f, g) => (x => f(g(x)));

const add1 = x => x + 1;
const mul5 = x => x * 5;

compose(mul5, add1)(2);
// =>15
```

[slide]

## 更多

### 酷炫的东西 {:.flexbox.vleft}
* Functor: 链式调用
* Maybe

### 库 {:.flexbox.vleft}
* [ladash](https://www.npmjs.com/package/lodash)
* [underscore](https://www.npmjs.com/package/underscore)

### 书籍 {:.flexbox.vleft}

* [Javascript 函数式编程指南](https://github.com/MostlyAdequate/mostly-adequate-guide)

[slide]

## 回过头去看 `react-redux` 与 `React`

* [`stateless component`](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions)

```javascript
 export default componentA = (props) => <div>{{props.name}}</div>
```
> In an ideal world, most of your components would be stateless functions because in the future we’ll also be able to make performance optimizations specific to these components by avoiding unnecessary checks and memory allocations. This is the recommended pattern, when possible.


---

[slide]

## Thanks
