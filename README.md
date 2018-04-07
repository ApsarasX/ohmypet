# 小宠爱-微信小程序

## 目录结构
```
|-- dist                    小程序运行代码目录(该目录由WePY的build指令自动编译生成，请不要直接修改该目录下的文件)
|-- src
|   |-- assets              资源(图片、字体、样式)目录
|   |   `-- images          图片目录
|   |-- components          WePY组件目录(组件不属于完整页面，仅供完整页面或其他组件引用)
|   |-- mixins
|   |   `-- test.js
|   |-- pages               WePY页面目录(属于完整页面)
|   |   |-- addpet.wpy      增加宠物页
|   |   |-- house.wpy
|   |   |-- index.wpy
|   |   |-- login.wpy
|   |   |-- msg.wpy
|   |   |-- pets.wpy
|   |   `-- profile.wpy
|   |-- store               Redux状态管理目录
|   |   |-- actions
|   |   |   |-- counter.js
|   |   |   `-- index.js
|   |   |-- reducers
|   |   |   |-- counter.js
|   |   |   `-- index.js
|   |   |-- types
|   |   |   |-- counter.js
|   |   |   `-- index.js
|   |   `-- index.js
|   |-- app.wpy             小程序配置项(全局数据、样式、声明钩子等)
|   `-- index.template.html 转Web的模板(目前不适用)
|-- README.md
|-- package-lock.json
|-- package.json            项目的package配置
|-- project.config.json     小程序项目配置
|-- wepy.config.js          项目的工程化配置
`-- yarn.lock
```

## 命令
```
# 实时监听刷新
yarn dev

# 打包
yarn build
```
