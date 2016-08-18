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
---

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
* 向后兼容性好。可以很友好的转化为 `decorator`
* 拓展性。可以通过传递参数的形式对 `HOC` 进行定制，比如 `antd` 中的 [`Form.create()`](https://github.com/ant-design/ant-design/blob/master/components/form/index.tsx#L9) 以及 `react-redux` 中的 [`connect`](https://github.com/reactjs/react-redux/blob/68a4f2b78671329e10bfca87f8f1c82cc8690459/src/components/connect.js#L35)

[slide]

## 前面的都是废话
----

`Functional Programing` 才是我想安利的
