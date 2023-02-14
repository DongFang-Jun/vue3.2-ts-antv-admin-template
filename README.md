PC 端技术架构：

    vue3.2全家桶（组合式api + vite + pinia + vueRouter）+ typescript + less + ant-design-vue@V3

安装工具：

    yarn

新增依赖：

    yarn add xxx

七牛云项目地址仓库：

    static/BKRYB/mini（小程序端） static/BKRYB/pc（pc端）

**ts 参数类型校验尽可能定义确定类型，勿大范围使用 any**

分支结构：

    master 线上分支
    test 测试分支
    ...a

    开发自创分支，向test/master merge即可；保证多人协作尽可能避免冲突

目录结构：

    apis：所有接口接口走一层封装，方便不同页面调用产生多处重复代码

    assets：静态资源文件

    components：全局自定义组件

    config：全局配置文件 interface.ts为所有接口地址文件，config.ts为全局通用配置参数

    mixins：全局混入文件，封装一些常用的函数文件

    plugins：全局插件，如自定义指令...

    router：路由文件

    stores：pinia状态存储库

    types：全局通用或者常用 ts 类型集合

    utils：工具库

    views：视图文件

![Image text](https://resource.boka.vc/BKRYB/mini/WechatIMG247.png)