# Newex 比特币交易所前端程序

1. 单页面应用（SPA）
  * 除首次加载外无画面刷新
2. 服务器端渲染（SSR）
  * 首次访问秒开
3. 多国语言支持
4. 实施通讯
5. pollyfill 策略
5. QA

## 单页面应用

### 客户端

### 服务器端

## 服务器端渲染

服务器端渲染使用 `express` 中间件的形式，使用与客户端相同的代码，入口文件是：
```txt
server\ssr.jsx
```
它返回一个 `express` 中间件函数。

### 开发环境配置

为了使用 `es6` 语法（`import`），使用了 `babel-node` 对程序进行转译：
```txt
// package.json
babel-node ./server/index.js --presets env,react,stage-1
```

为了能够在文件被修改时自动重新启动程序，使用了 `nodemon` 监视 `app` 和 `server` 文件夹中的程序，同时指定监视 `.js` 和 `.jsx` 文件：
```txt
// package.json
nodemon -e js,jsx --watch server --watch app --exec \"babel-node ./server/index.js --presets env,react,stage-1\"
```

为了使 `babel-node` 在转义时解析与 `webpack` 中相同的自定义模块名称，使用了 `babel-plugin-module-resolver`：
```json
// .babelrc
{
  ...
  "plugins": [
    [
      "module-resolver", 
      {
        "root": ["./app"],
        "alias": {
          "pages" : "./app/pages",
          "actions": "./app/actions/",
          "reducers": "./app/reducers/",
          "components" : "./app/components"
        }
      }
    ]
  ]
}
```

### 生产环境配置

生产环境无法使用 babel-node（占内存大），所以预编译服务器脚本，为此创建了 webpack.config.server.js 文件。

为了能够在 node.js 下运行，将 target 指定为 node：
```
// webpack.config.server.js
target: 'node',
```

因为在服务器端运行，node_module 下安装的所有依赖都被指定为 externals：
```js
// webpack.config.server.js

const nodeModules = {};

fs.readdirSync(path.resolve(__dirname, 'node_modules'))
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => nodeModules[mod] = `commonjs ${mod}`);

...

externals: nodeModules,
```

为了使 __dirname 正常工作，进行了如下设置：
```json
node: {
  __dirname: false,
},
```

在使用 Webpack 打包服务器端程序的时候 jss 的插件要求以下 preset，但是这与本项目的 preset 在含义上有冲突：

1. stage-0 （与 stage-1 冲突)
2. es2015 （与 env 冲突）
3. transform-es3-member-expression-literals
4. transform-es3-property-literals

但是为了能够顺利编译，还是安装了相应的 npm 包。

### Material-UI

### React-Redux

### React-Router

### React

## 多国语言支持

## 时事通讯

## pollyfill 策略

## QA

### 编辑器设置

### eslint
