# miniapp-h5
小程序转H5程序


## 用法

进入网址：[http://miniapp.frontendx.cn](http://miniapp.frontendx.cn)
把代码粘贴至文本框中
> 将小程序的`wxml`转成`html`
> 将小程序的`wxss`转成`css`

## `wxml`转成`html`

> <view == <div
    
> </view> == </div>
    
 > <image == <img ../>
    
 > <text == <span
    
> </text> == </span>

> {{...}} == {...}

## `wxml`转成react的`jsx`

> class == className
    
> bindtap="..." == onClick={...}

## `wxss`转成`css`

> rpx == px

> page == body

> image == img

> view == div

> text == span

## 启动文档

```bash
npm install
npm start
```

## 相关文档
[regexp文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

[eslint文档](https://cn.eslint.org/docs/4.0.0/rules/no-mixed-operators)

