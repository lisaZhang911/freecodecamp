# personal_webpage

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
## 知识点

``` bash
# bootstrap
* 响应式导航
* 栅格系统
* 缩略图组件

# vue.js/vue-cli
* webpack路径解析方式
* es6中import export
```

## 问题及解答
``` bash
Q:某a标签使用document.documentElement.scrollTop使页面回到某个位置，但页面会出现重载的情况。
A:标签a的href属性不可带有url.

Q:标签a的focus伪类失效。
A:href属性不可缺失，否则将无法聚焦。
```

## 待改进问题
``` bash
* 在某方法中通过给页面scrollTop赋值来改变页面高度失效，页面始终处于scrolltop为0的位置，尝试几种方法后仍然误解，暂时搁置。
```
