title: React Native
speaker: 高靖淞
url: https://github.com/ksky521/nodePPT
transition: cards
files: /js/demo.js,/css/demo.css
theme: color

[slide style="background-image: url(http://mobinteg.com/wp-content/uploads/2015/03/news_img.png)"]

[slide]

[magic data-transition="move"]
# 但是

====
# 谈 `Native` 岂不是班门弄斧

[/magic]

[slide style="background-image:url(http://angular.github.io/react-native-renderer/assets/react.png); background-size: contain"]

[magic data-transition="zoomin"]

# 所以 {:.flexbox.vright}

====

# 说说 React {:.flexbox.vright}

[/magic]


[slide]

[magic data-transition="zoomin"]
# 定位

## 专注视图层：`MVC` 中的 `V`

```javascript
  const Component = state => render(state)
```

====

# 核心

## `组件化`

```html
<App>
  <Header />
  <Main />
  <Footer />
</App>
```
![component](http://vuejs.org/images/components.png)

====

# 愿景

## `Learn Once, Write Anywhere`
# NOT
## <del>`Write Once, Run Anywhere`</del>

[/magic]

[slide]

# 还是绕不过

![React Native](https://www.novoda.com/blog/content/images/2016/06/reactive-nativingitup-png-800x600_q96.png)

[slide]

# 平台
[magic data-transition="zommout"]
# Web/SSR

## 传统
====

# iOS

## 最早
====

# Android

## 最难适配

====

# UWP

## 微软自家提供支持

[/magic]

[slide]

# 为什么

[slide]

# 核心技术

[magic data-transition="move"]

## `Virtual DOM`

- 由于 `Virtual DOM` 的存在，使得原本作为 `DSL` 的 `JSX` 可以根据需要被渲染为任意平台的内容 {:&.vleft}

![VDOM](https://image.slidesharecdn.com/reactnativev2hot-160112103501/95/react-native-v2hot-5-638.jpg?cb=1452594922)

====

## DOM Diff
<!-- ![setState](https://calendar.perfplanet.com/wp-content/uploads/2013/12/vjeux/4.png) -->
<!-- ![rendered](https://calendar.perfplanet.com/wp-content/uploads/2013/12/vjeux/5.png) -->

---
![diff](http://djebbz.github.io/react-palo-it/images/diff-virtual-dom.png)

====

## `Fiber`

最新的调度算法，将随着 `React v16` 一起发布

[/magic]

[slide]

# React Native 带来的

[magic data-transition="move"]

# Native Component
====

# 异步执行

====

# 布局

====

# 触摸处理

====

# 可扩展性

[/magic]

[slide]

# 回头再看 `React`

[slide]

# `React` 实际上是一种模式

- 无论你是 `WebView` 还是 `Native`，对于 `React` 来说无非就是 `Render` 引擎的变化 {:&.vleft.rollIn}
- 底层只需要提供统一的`标签化`的或者`组件化`的容器或者组件
- `Bridge` 或者是 `DOM API` 方式提供统一的 `API`

[slide]

# 于是

## 轮子来了

- `Weex` -> `Vue` {:&.rollIn}
- `Rax` -> `React`

[slide]

# 额外赠送

[slide]

# 前端工程化

- `Webpack` `Rollup` `FIS`
- `ES6` `ES7` `ES Next` `TypeScript`···
- `Babel`
- `Flow`
- `ESLint` `StyleLint`
- `Prepack`

[slide]

[magic data-transition="zoomin"]
# 不只是名词堆砌
====

# 工程化探索

[/magic]

[slide]

[magic data-transition="vertical3d"]

# 最后

====
# 欢迎大家转前(quán)端(zhàn)

[/magic]

[slide]

# Thanks!!!
