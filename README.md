# 小宠爱-微信小程序

## 目录结构
```
|-- dist                    小程序运行代码目录(该目录由WePY的build指令自动编译生成，请不要直接修改该目录下的文件)
|-- src
|   |-- assets              资源(图片、字体、样式)目录
|   |   |-- images          图片目录
|   |   `-- style           样式目录
|   |-- components          WePY组件目录(组件不属于完整页面，仅供完整页面或其他组件引用)
|   |   |-- filter-bar.wpy  筛选组件
|   |   |-- search-bar.wpy  搜索栏组件
|   |   |-- select.wpy      多选一组件
|   |   `-- seller-card.wpy 商家卡片组件
|   |-- lib                 封装的代码库
|   |-- mixins
|   |-- pages               WePY页面目录(属于完整页面)
|   |   |-- add-house.wpy   增加宠物屋页
|   |   |-- add-pet.wpy     增加宠物页
|   |   |-- house.wpy       我的宠物屋
|   |   |-- index.wpy       首页
|   |   |-- login.wpy       登录页
|   |   |-- msg-list.wpy    聊天列表页
|   |   |-- msg.wpy         聊天详情页
|   |   |-- order.wpy       准备订单页面
|   |   |-- pets.wpy        我的宠物
|   |   `-- profile.wpy     我的页
|   |-- store               Redux状态管理目录
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
