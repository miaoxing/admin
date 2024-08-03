## [0.15.1](https://github.com/miaoxing/admin/compare/v0.15.0...v0.15.1) (2024-08-03)





### Dependencies

* **@mxjs/a-clink:** upgrade from `3.0.3` to `3.0.4`
* **@mxjs/a-form:** upgrade from `4.0.1` to `4.0.2`
* **@mxjs/a-page:** upgrade from `4.0.1` to `4.0.2`
* **@mxjs/a-table:** upgrade from `2.0.1` to `2.0.2`
* **@mxjs/api:** upgrade from `1.1.2` to `1.1.3`
* **@mxjs/config:** upgrade from `1.1.3` to `1.1.4`
* **@mxjs/a-section:** upgrade from `1.1.0` to `1.1.1`
* **@mxjs/a-upload:** upgrade from `1.3.2` to `1.3.3`
* **miaoxing:** upgrade from `0.4.17` to `0.4.18`
* **@miaoxing/dev:** upgrade from `9.1.2` to `9.1.3`
* **@mxjs/test:** upgrade from `2.0.2` to `2.0.3`
* **@miaoxing/app:** upgrade from `0.10.2` to `0.10.3`
* **@miaoxing/file:** upgrade from `0.3.32` to `0.3.33`

# [0.15.0](https://github.com/miaoxing/admin/compare/v0.14.0...v0.15.0) (2024-08-02)


### Code Refactoring

* **u:** 移除 webpack，改为使用 vite ([c7b172e](https://github.com/miaoxing/admin/commit/c7b172ead338c46e6302320600dd2a1d3a7236c1))


### BREAKING CHANGES

* **u:** 移除 webpack，改为使用 vite





### Dependencies

* **@mxjs/a-clink:** upgrade from `3.0.2` to `3.0.3`
* **@mxjs/a-form:** upgrade from `4.0.0` to `4.0.1`
* **@mxjs/a-page:** upgrade from `4.0.0` to `4.0.1`
* **@mxjs/a-table:** upgrade from `2.0.0` to `2.0.1`
* **@mxjs/api:** upgrade from `1.1.1` to `1.1.2`
* **@mxjs/a-upload:** upgrade from `1.3.1` to `1.3.2`
* **miaoxing:** upgrade from `0.4.16` to `0.4.17`
* **@mxjs/test:** upgrade from `2.0.1` to `2.0.2`

# [0.14.0](https://github.com/miaoxing/admin/compare/v0.13.2...v0.14.0) (2024-07-31)


### Bug Fixes

* **admin:** `placeholder` 为空时不传 false, 需传空字符串 ([49eee61](https://github.com/miaoxing/admin/commit/49eee61cf67a63f9776d02a586ac8e3781bf6466))
* **admin:** 提前渲染 `RouterStore`，以便 Layout 中判断为登录跳转可以使用 navigate ([2caf668](https://github.com/miaoxing/admin/commit/2caf668792eaec650163aefbcca0e190df5411ed))
* **admin:** 解决自动跳转 admin 功能失效 ([c061695](https://github.com/miaoxing/admin/commit/c061695ed0a7b940e00e0ee410b7cf01f7eea459))
* `export default from` 改为标准语法 ([6ae8361](https://github.com/miaoxing/admin/commit/6ae83616a458ce4962acbad2ef9693d2c31f8a71))


### Code Refactoring

* **admin:** 移除 Chakra-UI 主题配置和相关依赖，改为使用 Tailwind ([a99256b](https://github.com/miaoxing/admin/commit/a99256b824d78bd37409c5ba5c2ae7790b33c283))


### Features

* **u:** 调整页面内容为卡片视图 ([c0bccc2](https://github.com/miaoxing/admin/commit/c0bccc24878ce6d340f41a261a938ec95eb6cdf7))
* Box 组件改为 tailwind 类名 ([188d8a4](https://github.com/miaoxing/admin/commit/188d8a442dc0375a948540b9cf8ff826255c7ef8))


### BREAKING CHANGES

* **admin:** 移除 Chakra-UI 主题配置和相关依赖，改为使用 Tailwind





### Dependencies

* **@mxjs/a-clink:** upgrade from `3.0.1` to `3.0.2`
* **@mxjs/a-form:** upgrade from `3.0.2` to `4.0.0`
* **@mxjs/a-page:** upgrade from `3.0.1` to `4.0.0`
* **@mxjs/a-table:** upgrade from `1.9.0` to `2.0.0`
* **@mxjs/api:** upgrade from `1.1.0` to `1.1.1`
* **@mxjs/config:** upgrade from `1.1.2` to `1.1.3`
* **@mxjs/a-section:** upgrade from `1.0.0` to `1.1.0`
* **@mxjs/a-upload:** upgrade from `1.3.0` to `1.3.1`
* **miaoxing:** upgrade from `0.4.15` to `0.4.16`
* **@miaoxing/dev:** upgrade from `9.1.1` to `9.1.2`
* **@mxjs/test:** upgrade from `2.0.0` to `2.0.1`
* **@miaoxing/app:** upgrade from `0.10.1` to `0.10.2`
* **@miaoxing/file:** upgrade from `0.3.31` to `0.3.32`

## [0.13.2](https://github.com/miaoxing/admin/compare/v0.13.1...v0.13.2) (2024-06-30)


### Features

* **admin:** 页面外层增加 `Suspense`，控制加载区域不影响到更上层的布局 ([559c118](https://github.com/miaoxing/admin/commit/559c118a76ff71c857466ea0acd3734ba36129e1))
* 更新 `onControllerInit` 为 `onPageInit` ([b0a9721](https://github.com/miaoxing/admin/commit/b0a972186b154aba7931a95ff1c8d4d1109d3a85))
* **admin:** 退出登录页面无需权限控制 ([d39915d](https://github.com/miaoxing/admin/commit/d39915d174fd9c502061d0b2e05a3051c4768190))





### Dependencies

* **@mxjs/a-form:** upgrade from `3.0.1` to `3.0.2`
* **@mxjs/a-table:** upgrade from `1.8.3` to `1.9.0`
* **@mxjs/a-upload:** upgrade from `1.2.3` to `1.3.0`
* **@miaoxing/app:** upgrade from `0.10.0` to `0.10.1`
* **@miaoxing/file:** upgrade from `0.3.30` to `0.3.31`

## [0.13.1](https://github.com/miaoxing/admin/compare/v0.13.0...v0.13.1) (2024-05-30)


### Bug Fixes

* **admin:** 先检查 token 再发送请求，避免两次跳转登录 ([ef1b90a](https://github.com/miaoxing/admin/commit/ef1b90a505321467c4969d69e9ea679f87a05a91))


### Features

* **admin:** `TreeSelect` 移除废弃的 `showArrow` 属性 ([9d3d574](https://github.com/miaoxing/admin/commit/9d3d57476fc9d5626e9390d0b602ca33962113ca))
* **admin:** react-router v6 支持 hash 路由器 ([071e784](https://github.com/miaoxing/admin/commit/071e7844f10272b9c184490198c197a5015bb56f))
* **experimental:** 移除 `$.fullUrl` 方法 ([833c8b8](https://github.com/miaoxing/admin/commit/833c8b83f9526dc717d66495f59e9f2d45fd8fa9))
* `api.xxx` 调用改为 `$.xx` ([0f5f212](https://github.com/miaoxing/admin/commit/0f5f212e0fa6f1ec3fa02a5d58e6b999fe670f93))





### Dependencies

* **@mxjs/a-clink:** upgrade from `3.0.0` to `3.0.1`
* **@mxjs/a-form:** upgrade from `3.0.0` to `3.0.1`
* **@mxjs/a-page:** upgrade from `3.0.0` to `3.0.1`
* **@mxjs/a-table:** upgrade from `1.8.2` to `1.8.3`
* **@mxjs/api:** upgrade from `1.0.12` to `1.1.0`
* **@mxjs/a-upload:** upgrade from `1.2.2` to `1.2.3`
* **miaoxing:** upgrade from `0.4.14` to `0.4.15`
* **@mxjs/test:** upgrade from `1.1.0` to `2.0.0`
* **@miaoxing/app:** upgrade from `0.9.0` to `0.10.0`
* **@miaoxing/file:** upgrade from `0.3.29` to `0.3.30`

# [0.13.0](https://github.com/miaoxing/admin/compare/v0.12.3...v0.13.0) (2024-05-01)


### Features

* **admin:** 更新 `mxjs-preset-react-router` 支持 `react-router` v6 ([d778b20](https://github.com/miaoxing/admin/commit/d778b203277dbabd9463ebb7940e4ba7e46df4d6))
* 更新 `react-router` 到 v6 ([87382d3](https://github.com/miaoxing/admin/commit/87382d38de3242afcc0c86b02caf1883cd33db19))
* **admin:** 增加 `$.to` 的 web 实现 ([8c915e9](https://github.com/miaoxing/admin/commit/8c915e9bd2ba2451de8494ff2d21b2ca9e54b9bb))
* **admin:** 增加 `react-router` 的 `$.to` 实现 ([5081406](https://github.com/miaoxing/admin/commit/5081406e99cf4d2afbcc73fb863be252505ce285))
* 更新 config context 为 `@mxjs/config` ([4f46390](https://github.com/miaoxing/admin/commit/4f46390272c5e1297407eaa67482f70e6645d5b6))


### BREAKING CHANGES

* 更新 `react-router` 到 v6





### Dependencies

* **@mxjs/a-clink:** upgrade from `2.1.2` to `3.0.0`
* **@mxjs/a-form:** upgrade from `2.2.1` to `3.0.0`
* **@mxjs/a-page:** upgrade from `2.5.0` to `3.0.0`
* **@mxjs/a-table:** upgrade from `1.8.1` to `1.8.2`
* **@mxjs/api:** upgrade from `1.0.11` to `1.0.12`
* **@mxjs/config:** upgrade from `1.1.1` to `1.1.2`
* **@mxjs/a-upload:** upgrade from `1.2.1` to `1.2.2`
* **miaoxing:** upgrade from `0.4.13` to `0.4.14`
* **@mxjs/test:** upgrade from `1.0.11` to `1.1.0`
* **@miaoxing/app:** upgrade from `0.8.3` to `0.9.0`
* **@miaoxing/file:** upgrade from `0.3.28` to `0.3.29`

## [0.12.3](https://github.com/miaoxing/admin/compare/v0.12.2...v0.12.3) (2024-03-31)


### Bug Fixes

* **admin:** `@ant-design/pro-components` 2.6 隐藏菜单的边框 ([42dbd54](https://github.com/miaoxing/admin/commit/42dbd54d05c1f78741794bff5b7f1e8015c26876))


### Features

* **admin:** `message`，`modal` 改为全局对象 ([e2a6825](https://github.com/miaoxing/admin/commit/e2a68254a70afd4f6ae3e21d594753da0efd11f7))
* **admin:** 增加 `AntdApp` 组件，用于提供全局的 `message`，`modal`，`notification` 变量 ([68e6e4f](https://github.com/miaoxing/admin/commit/68e6e4f8af9fcbf9736ee1fdec4f0fa3e76380a9))
* **admin:** 导航栏用户无头像时显示默认头像 ([d90919c](https://github.com/miaoxing/admin/commit/d90919c3eb370ed0de55bb0a177de252814ba2e7))
* **admin:** 登录成功不用等待，直接跳转页面 ([986a391](https://github.com/miaoxing/admin/commit/986a391eedb563041932c143d18895831ba20ce5))
* **admin:** 登录输入框增加图标，增加宽度 ([83e5dd0](https://github.com/miaoxing/admin/commit/83e5dd0a26d457efe00e8a67106b2c029d30886e))
* **admin:** 转换所有后台返回的菜单 ([82dac9b](https://github.com/miaoxing/admin/commit/82dac9bb37f60de820ca2cf4cb4d875bd4f36a47))





### Dependencies

* **@mxjs/a-box:** upgrade from `1.1.0` to `1.1.1`
* **@mxjs/a-clink:** upgrade from `2.1.1` to `2.1.2`
* **@mxjs/a-form:** upgrade from `2.2.0` to `2.2.1`
* **@mxjs/a-page:** upgrade from `2.4.1` to `2.5.0`
* **@mxjs/a-table:** upgrade from `1.8.0` to `1.8.1`
* **@mxjs/api:** upgrade from `1.0.10` to `1.0.11`
* **@mxjs/config:** upgrade from `1.1.0` to `1.1.1`
* **@mxjs/a-upload:** upgrade from `1.2.0` to `1.2.1`
* **miaoxing:** upgrade from `0.4.12` to `0.4.13`
* **@miaoxing/dev:** upgrade from `9.1.0` to `9.1.1`
* **@mxjs/test:** upgrade from `1.0.10` to `1.0.11`
* **@miaoxing/app:** upgrade from `0.8.2` to `0.8.3`
* **@miaoxing/file:** upgrade from `0.3.27` to `0.3.28`

## [0.12.2](https://github.com/miaoxing/admin/compare/v0.12.1...v0.12.2) (2024-02-29)





### Dependencies

* **@mxjs/a-page:** upgrade from `2.4.0` to `2.4.1`
* **@miaoxing/app:** upgrade from `0.8.1` to `0.8.2`
* **@miaoxing/file:** upgrade from `0.3.26` to `0.3.27`

## [0.12.1](https://github.com/miaoxing/admin/compare/v0.12.0...v0.12.1) (2024-02-20)


### Bug Fixes

* **admin:** `@ant-design/pro-components` 2.6 隐藏菜单后图标未对齐 ([44fcc09](https://github.com/miaoxing/admin/commit/44fcc09ded38a9f16fc0300fe70e6e4e0024c461))


### Features

* **admin:** 增加 `ConfigProvider` 控制全局配置 ([ebf655b](https://github.com/miaoxing/admin/commit/ebf655b25e354eece259c7a31c75c3e6ffc61803))
* `@mxjs/loading` 依赖更改为 `@mxjs/a-loading` ([6e3528d](https://github.com/miaoxing/admin/commit/6e3528d11a8941e74e47244b3346260b8a1a0f2b))
* **admin:** 增加内容区域的空白 ([ad7f97c](https://github.com/miaoxing/admin/commit/ad7f97cb281f777dd953624339c3b56e2e2b7010))
* **admin:** 增加页面背景色 ([f078214](https://github.com/miaoxing/admin/commit/f0782149bba66700eb2ad327f54e3acc84148f7a))
* **admin:** 自定义布局的样式移到 CSS 中，减少 HTML 层级 ([90abed3](https://github.com/miaoxing/admin/commit/90abed35645ae8f809a6aa2e355957b1a0c18e75))
* **admin:** 菜单项增加图标 ([2cfd69f](https://github.com/miaoxing/admin/commit/2cfd69faea8649bf44994cf16bf301711a76212e))
* **admin, u:** 更新布局为 `antd` `ProLayout` ([d076bc9](https://github.com/miaoxing/admin/commit/d076bc9805e34f620614885ae2baa57007f1d3b2))
* **admin, u:** 简化布局，去掉背景色，分割线等 ([13c199d](https://github.com/miaoxing/admin/commit/13c199dfd5db3386578e6ca2c26dc2df2c2b3922))
* **admin, u:** 菜单允许显示后台返回的图标 ([e897bb2](https://github.com/miaoxing/admin/commit/e897bb223a154bbf2bc7220b6a0b68f35887d687))
* **admin, u:** 鼠标移动到标题后面，可以点击折叠/展开侧边菜单 ([b71eecc](https://github.com/miaoxing/admin/commit/b71eecc1d77be490c41f049d46ff2c0b645adcb2))
* 更新 antd, antd icons 版本 ([e26f26b](https://github.com/miaoxing/admin/commit/e26f26b14e7396df2a7a1c4196f9d5450a2b47a8))





### Dependencies

* **@mxjs/a-clink:** upgrade from `2.1.0` to `2.1.1`
* **@mxjs/a-form:** upgrade from `2.1.0` to `2.2.0`
* **@mxjs/a-page:** upgrade from `2.3.0` to `2.4.0`
* **@mxjs/a-table:** upgrade from `1.7.0` to `1.8.0`
* **@mxjs/config:** upgrade from `1.0.0` to `1.1.0`
* **@mxjs/a-upload:** upgrade from `1.1.0` to `1.2.0`
* **@miaoxing/app:** upgrade from `0.8.0` to `0.8.1`
* **@miaoxing/file:** upgrade from `0.3.25` to `0.3.26`

# [0.12.0](https://github.com/miaoxing/admin/compare/v0.11.5...v0.12.0) (2024-01-31)


### Features

* **admin:** `@mxjs/upload` 依赖更改为 `@mxjs/a-upload` ([4c05402](https://github.com/miaoxing/admin/commit/4c05402770b0f2bd147b3752527a7cff9f09dc70))
* **admin:** 更新 `@chakra-ui/react` 为 `@mxjs/a-box` ([4d068a6](https://github.com/miaoxing/admin/commit/4d068a65daff0be283be58385493f177f1a9089c))
* **admin:** 移除 `@mxjs/css` 依赖 ([b96bc96](https://github.com/miaoxing/admin/commit/b96bc96dd9453766b7afc05bf94195fb483a0f4e))
* **admin:** 移除 `fower` 依赖 ([0893fd5](https://github.com/miaoxing/admin/commit/0893fd55a5e262319ceacfa16097dd7ee63a8a38))
* 更新 `react` 支持 18 ([f03c19e](https://github.com/miaoxing/admin/commit/f03c19eb30d3817e730100dc6abb61db92a83acf))
* 更新调用方法为 `react` 18 ([2b2bb9f](https://github.com/miaoxing/admin/commit/2b2bb9f4d5c3d92f003581926ec1e4cf4c04798e))


### BREAKING CHANGES

* **admin:** 移除 `fower` 依赖
* 更新调用方法为 `react` 18





### Dependencies

* **@mxjs/a-box:** upgrade from `1.0.0` to `1.1.0`
* **@mxjs/a-clink:** upgrade from `2.0.5` to `2.1.0`
* **@mxjs/a-form:** upgrade from `2.0.3` to `2.1.0`
* **@mxjs/a-page:** upgrade from `2.2.3` to `2.3.0`
* **@mxjs/a-table:** upgrade from `1.6.3` to `1.7.0`
* **@mxjs/a-upload:** upgrade from `1.0.0` to `1.1.0`
* **@miaoxing/app:** upgrade from `0.7.11` to `0.8.0`
* **@miaoxing/file:** upgrade from `0.3.24` to `0.3.25`

## [0.11.5](https://github.com/miaoxing/admin/compare/v0.11.4...v0.11.5) (2024-01-08)





### Dependencies

* **@mxjs/a-clink:** upgrade from `2.0.4` to `2.0.5`
* **@mxjs/a-form:** upgrade from `2.0.2` to `2.0.3`
* **@mxjs/a-page:** upgrade from `2.2.2` to `2.2.3`
* **@mxjs/a-table:** upgrade from `1.6.2` to `1.6.3`
* **@mxjs/api:** upgrade from `1.0.9` to `1.0.10`
* **@mxjs/css:** upgrade from `1.1.5` to `1.1.6`
* **@mxjs/upload:** upgrade from `0.6.25` to `0.6.26`
* **miaoxing:** upgrade from `0.4.11` to `0.4.12`
* **@miaoxing/dev:** upgrade from `9.0.0` to `9.1.0`
* **@mxjs/test:** upgrade from `1.0.9` to `1.0.10`
* **@miaoxing/app:** upgrade from `0.7.10` to `0.7.11`
* **@miaoxing/file:** upgrade from `0.3.23` to `0.3.24`

## [0.11.4](https://github.com/miaoxing/admin/compare/v0.11.3...v0.11.4) (2023-12-31)





### Dependencies

* **@mxjs/a-clink:** upgrade from `2.0.3` to `2.0.4`
* **@mxjs/a-form:** upgrade from `2.0.1` to `2.0.2`
* **@mxjs/a-page:** upgrade from `2.2.1` to `2.2.2`
* **@mxjs/a-table:** upgrade from `1.6.1` to `1.6.2`
* **@mxjs/api:** upgrade from `1.0.8` to `1.0.9`
* **@mxjs/css:** upgrade from `1.1.4` to `1.1.5`
* **@mxjs/upload:** upgrade from `0.6.24` to `0.6.25`
* **miaoxing:** upgrade from `0.4.10` to `0.4.11`
* **@miaoxing/dev:** upgrade from `8.2.4` to `9.0.0`
* **@mxjs/test:** upgrade from `1.0.8` to `1.0.9`
* **@miaoxing/app:** upgrade from `0.7.9` to `0.7.10`
* **@miaoxing/file:** upgrade from `0.3.22` to `0.3.23`

## [0.11.3](https://github.com/miaoxing/admin/compare/v0.11.2...v0.11.3) (2023-11-30)





### Dependencies

* **@mxjs/a-clink:** upgrade from `2.0.2` to `2.0.3`
* **@mxjs/a-form:** upgrade from `2.0.0` to `2.0.1`
* **@mxjs/a-page:** upgrade from `2.2.0` to `2.2.1`
* **@mxjs/a-table:** upgrade from `1.6.0` to `1.6.1`
* **@mxjs/api:** upgrade from `1.0.7` to `1.0.8`
* **@mxjs/css:** upgrade from `1.1.3` to `1.1.4`
* **@mxjs/upload:** upgrade from `0.6.23` to `0.6.24`
* **miaoxing:** upgrade from `0.4.9` to `0.4.10`
* **@miaoxing/dev:** upgrade from `8.2.3` to `8.2.4`
* **@mxjs/test:** upgrade from `1.0.7` to `1.0.8`
* **@miaoxing/app:** upgrade from `0.7.8` to `0.7.9`
* **@miaoxing/file:** upgrade from `0.3.21` to `0.3.22`

## [0.11.2](https://github.com/miaoxing/admin/compare/v0.11.1...v0.11.2) (2023-11-02)


### Features

* **admin, experimental:** `options` 接口支持使用 `.` 区分服务和选项 ([08f5da5](https://github.com/miaoxing/admin/commit/08f5da59963691c572a46cc1d13160a6991fff52))





### Dependencies

* **@mxjs/a-form:** upgrade from `1.7.0` to `2.0.0`
* **@mxjs/a-table:** upgrade from `1.5.3` to `1.6.0`
* **@mxjs/upload:** upgrade from `0.6.22` to `0.6.23`
* **@miaoxing/app:** upgrade from `0.7.7` to `0.7.8`
* **@miaoxing/file:** upgrade from `0.3.20` to `0.3.21`

## [0.11.1](https://github.com/miaoxing/admin/compare/v0.11.0...v0.11.1) (2023-09-30)


### Features

* **admin:** `useOption` 支持多个同时调用时，只发送一个请求 ([f25f999](https://github.com/miaoxing/admin/commit/f25f999e39ba882a8e5ab2a44ebf99b99db0ca16))





### Dependencies

* **@mxjs/a-form:** upgrade from `1.6.0` to `1.7.0`
* **@mxjs/a-page:** upgrade from `2.1.5` to `2.2.0`
* **@mxjs/upload:** upgrade from `0.6.21` to `0.6.22`
* **@miaoxing/app:** upgrade from `0.7.6` to `0.7.7`
* **@miaoxing/file:** upgrade from `0.3.19` to `0.3.20`

# [0.11.0](https://github.com/miaoxing/admin/compare/v0.10.6...v0.11.0) (2023-09-02)


### Bug Fixes

* **admin, u:** 用户名不允许以数字开头 ([0c80777](https://github.com/miaoxing/admin/commit/0c807777adf75ec977f09cdc22b2de72bd40bea6))


### Code Refactoring

* **admin:** `AdminModel::user()` 更改返回类型为 `app` 的 `UserModel` ([4d98b85](https://github.com/miaoxing/admin/commit/4d98b85534fd5bb67919a865aa4993d253f12d66))


### BREAKING CHANGES

* **admin:** `AdminModel::user()` 更改返回类型为 `app` 的 `UserModel`





### Dependencies

* **@mxjs/a-clink:** upgrade from `2.0.1` to `2.0.2`
* **@mxjs/a-form:** upgrade from `1.5.0` to `1.6.0`
* **@mxjs/a-page:** upgrade from `2.1.4` to `2.1.5`
* **@mxjs/a-table:** upgrade from `1.5.2` to `1.5.3`
* **@mxjs/api:** upgrade from `1.0.6` to `1.0.7`
* **@mxjs/css:** upgrade from `1.1.2` to `1.1.3`
* **@mxjs/upload:** upgrade from `0.6.20` to `0.6.21`
* **miaoxing:** upgrade from `0.4.8` to `0.4.9`
* **@miaoxing/dev:** upgrade from `8.2.2` to `8.2.3`
* **@mxjs/test:** upgrade from `1.0.6` to `1.0.7`
* **@miaoxing/app:** upgrade from `0.7.5` to `0.7.6`
* **@miaoxing/file:** upgrade from `0.3.18` to `0.3.19`

## [0.10.6](https://github.com/miaoxing/admin/compare/v0.10.5...v0.10.6) (2023-07-31)


### Features

* **admin:** 增加 `Image` 组件，用于展示单张图片 ([c47bfc0](https://github.com/miaoxing/admin/commit/c47bfc04d87bba0b76cc7c3b55ab448bfe02aeb7))
* **admin:** 增加 `Images` 组件，用于展示多张图片 ([4ec7a40](https://github.com/miaoxing/admin/commit/4ec7a40b72b56815614f742ed2b304dc6b133af7))
* **admin, experimental:** 增加 `Descriptions` 组件 ([59b050f](https://github.com/miaoxing/admin/commit/59b050fe9cb18d640430676fef807ffd00f3b49a))
* **admin, experimental:** 增加 `ModalDescriptions` 组件 ([2c81529](https://github.com/miaoxing/admin/commit/2c81529a6e8d9a97905776562d7024f1f13582a5))





### Dependencies

* **@mxjs/a-clink:** upgrade from `2.0.0` to `2.0.1`
* **@mxjs/a-form:** upgrade from `1.4.1` to `1.5.0`
* **@mxjs/a-page:** upgrade from `2.1.3` to `2.1.4`
* **@mxjs/a-table:** upgrade from `1.5.1` to `1.5.2`
* **@mxjs/api:** upgrade from `1.0.5` to `1.0.6`
* **@mxjs/css:** upgrade from `1.1.1` to `1.1.2`
* **@mxjs/upload:** upgrade from `0.6.19` to `0.6.20`
* **miaoxing:** upgrade from `0.4.7` to `0.4.8`
* **@miaoxing/dev:** upgrade from `8.2.1` to `8.2.2`
* **@mxjs/test:** upgrade from `1.0.5` to `1.0.6`
* **@miaoxing/app:** upgrade from `0.7.4` to `0.7.5`
* **@miaoxing/file:** upgrade from `0.3.17` to `0.3.18`

## [0.10.5](https://github.com/miaoxing/admin/compare/v0.10.4...v0.10.5) (2023-06-30)


### Features

* **admin:** 增加页面名称 ([00a1ca5](https://github.com/miaoxing/admin/commit/00a1ca5ab2ff29f2f0aba03cd72ec6a954d22de7))





### Dependencies

* **@mxjs/a-clink:** upgrade from `1.2.2` to `2.0.0`
* **@mxjs/a-form:** upgrade from `1.4.0` to `1.4.1`
* **@mxjs/a-page:** upgrade from `2.1.2` to `2.1.3`
* **@mxjs/a-table:** upgrade from `1.5.0` to `1.5.1`
* **@mxjs/api:** upgrade from `1.0.4` to `1.0.5`
* **@mxjs/upload:** upgrade from `0.6.18` to `0.6.19`
* **@mxjs/test:** upgrade from `1.0.4` to `1.0.5`
* **@miaoxing/app:** upgrade from `0.7.3` to `0.7.4`
* **@miaoxing/file:** upgrade from `0.3.16` to `0.3.17`

## [0.10.4](https://github.com/miaoxing/admin/compare/v0.10.3...v0.10.4) (2023-05-31)


### Bug Fixes

* **admin, antd5:** 内容使用 `Layout` 包含起来，以便显示一致的字体和链接颜色 ([329e613](https://github.com/miaoxing/admin/commit/329e613bed630aec22e76fa926288e574866fd06))


### Features

* **antd5:** 引入 reset 样式 ([3ea81df](https://github.com/miaoxing/admin/commit/3ea81df39a457b86421aa28bd297791564e13c17))





### Dependencies

* **@mxjs/a-clink:** upgrade from `1.2.1` to `1.2.2`
* **@mxjs/a-form:** upgrade from `1.3.0` to `1.4.0`
* **@mxjs/a-page:** upgrade from `2.1.1` to `2.1.2`
* **@mxjs/a-table:** upgrade from `1.4.2` to `1.5.0`
* **@mxjs/api:** upgrade from `1.0.3` to `1.0.4`
* **@mxjs/css:** upgrade from `1.1.0` to `1.1.1`
* **@mxjs/upload:** upgrade from `0.6.17` to `0.6.18`
* **miaoxing:** upgrade from `0.4.6` to `0.4.7`
* **@miaoxing/dev:** upgrade from `8.2.0` to `8.2.1`
* **@mxjs/test:** upgrade from `1.0.3` to `1.0.4`
* **@miaoxing/app:** upgrade from `0.7.2` to `0.7.3`
* **@miaoxing/file:** upgrade from `0.3.15` to `0.3.16`

## [0.10.3](https://github.com/miaoxing/admin/compare/v0.10.2...v0.10.3) (2023-04-30)





### Dependencies

* **@mxjs/a-form:** upgrade from `1.2.2` to `1.3.0`
* **@mxjs/a-table:** upgrade from `1.4.1` to `1.4.2`
* **@mxjs/upload:** upgrade from `0.6.16` to `0.6.17`
* **@miaoxing/app:** upgrade from `0.7.1` to `0.7.2`
* **@miaoxing/file:** upgrade from `0.3.14` to `0.3.15`

## [0.10.2](https://github.com/miaoxing/admin/compare/v0.10.1...v0.10.2) (2023-04-18)





### Dependencies

* **@mxjs/a-clink:** upgrade from `1.2.0` to `1.2.1`
* **@mxjs/a-form:** upgrade from `1.2.1` to `1.2.2`
* **@mxjs/a-page:** upgrade from `2.1.0` to `2.1.1`
* **@mxjs/a-table:** upgrade from `1.4.0` to `1.4.1`
* **@mxjs/upload:** upgrade from `0.6.15` to `0.6.16`

## [0.10.1](https://github.com/miaoxing/admin/compare/v0.10.0...v0.10.1) (2023-04-15)


### Features

* **admin:** 允许设置菜单的 `permission` 为 `false` 来控制不作为权限 ([2a53963](https://github.com/miaoxing/admin/commit/2a539636e876f153e41a825fbf78b30f162a7c92))
* **admin:** 增加 `Cascader` 组件，支持读取后台数据，传入字符串值 ([c9ad054](https://github.com/miaoxing/admin/commit/c9ad054cd9dd4526c519b00a038aaeff35ca8cb8))
* **admin:** 增加权限管理功能 ([9035966](https://github.com/miaoxing/admin/commit/9035966cf1de926eeb120da67a59614c5170b6c9))
* **admin:** 根据用户权限，显示菜单，控制接口访问 ([ed40461](https://github.com/miaoxing/admin/commit/ed4046126b3f8037ef717c842d53da1c638f6bbc))
* **admin:** 选择菜单时，支持菜单下还有页面的情况 ([58e1004](https://github.com/miaoxing/admin/commit/58e1004b80659df0ce4672356f3b8f6fa5f5d27d))
* **admin, experimental:** 从后台读取权限设置到 `AuthProvider` ([ecf2cb1](https://github.com/miaoxing/admin/commit/ecf2cb1e2ae053e6c69a91bad60796af0733146b))
* **admin, experimental:** 增加 `options` 接口和 `useOption` 方法用于读取后台服务选项的值 ([337ed95](https://github.com/miaoxing/admin/commit/337ed953ad589590260d9456368e098c724b0b85))
* **admin, u:** 允许修改管理员用户名 ([cab9ceb](https://github.com/miaoxing/admin/commit/cab9ceb818dadda7629942f558a32b0c9efec6c0))
* **admin, u:** 增加角色管理功能 ([f869818](https://github.com/miaoxing/admin/commit/f869818366357ca0650db98aae85cd40a9863c1e))
* **admin, u:** 管理员可以分配角色 ([485aabe](https://github.com/miaoxing/admin/commit/485aabee15a176ca90cc9817e46964289499432b))





### Dependencies

* **@mxjs/a-clink:** upgrade from `1.1.4` to `1.2.0`
* **@mxjs/a-form:** upgrade from `1.2.0` to `1.2.1`
* **@mxjs/a-page:** upgrade from `2.0.0` to `2.1.0`
* **@mxjs/a-table:** upgrade from `1.3.0` to `1.4.0`
* **@mxjs/upload:** upgrade from `0.6.14` to `0.6.15`
* **@miaoxing/app:** upgrade from `0.7.0` to `0.7.1`
* **@miaoxing/file:** upgrade from `0.3.13` to `0.3.14`

# [0.10.0](https://github.com/miaoxing/admin/compare/v0.9.7...v0.10.0) (2023-03-01)


### Bug Fixes

* **admin, u:** 移动端打开页面，不展示浮动的菜单 ([9b908f1](https://github.com/miaoxing/admin/commit/9b908f1db297f61ff56398248da9ffdcbf58b17e))


### Code Refactoring

* **admin:** 页面合并到菜单中 ([62da802](https://github.com/miaoxing/admin/commit/62da80246aae018fdac9d2f2d0790aac7971d156))


### Features

* 分组功能从 `admin` 插件迁移到 `app` 插件中 ([4b37bff](https://github.com/miaoxing/admin/commit/4b37bffbc95e818daeb87a5f55f37e71470ca138))
* **admin:** 管理员列表增加显示父级分组名称 ([09007d9](https://github.com/miaoxing/admin/commit/09007d9683cd55a0370d841c1fdb771ee6cd1831))
* 模型增加 `checkDestroy` 方法 ([c77498d](https://github.com/miaoxing/admin/commit/c77498df187d89f9bee7769e20a4efdb09e7fe11))
* **admin:** 允许通过 `adminMenu` 调用 `menu` 的任意方法 ([c285a37](https://github.com/miaoxing/admin/commit/c285a37facec524a49ca10a64918e22fb7d25611))
* **admin:** 后台菜单增加 `removeChildByUrl` 方法 ([c131449](https://github.com/miaoxing/admin/commit/c1314499b0a826af08cf5d4864e4c335159cd573))
* **admin:** 检查分组名称不重复，创建时不能为空 ([845cc73](https://github.com/miaoxing/admin/commit/845cc7313da1bc3325146d3e108665b7ad320eed))


### BREAKING CHANGES

* **admin:** 页面合并到菜单中





### Dependencies

* **@mxjs/a-page:** upgrade from `1.1.3` to `2.0.0`
* **@miaoxing/app:** upgrade from `0.6.13` to `0.7.0`
* **@miaoxing/file:** upgrade from `0.3.12` to `0.3.13`

## [0.9.7](https://github.com/miaoxing/admin/compare/v0.9.6...v0.9.7) (2023-01-31)


### Bug Fixes

* **admin:** `Select` 组件 `optionsKeys` 判断错误 ([6ea3685](https://github.com/miaoxing/admin/commit/6ea3685845600b9c1066d958ad3b1d446ea094f4))


### Features

* 更新 `antd` 到 `~4.24.7` ([b86de72](https://github.com/miaoxing/admin/commit/b86de72fc2bf3b452aaed0d62cf57215e578317e))
* **admin:** 菜单支持多层级 ([153c241](https://github.com/miaoxing/admin/commit/153c241ee3d6f67138acc815a11ff4513fa9491b))





### Dependencies

* **@mxjs/a-clink:** upgrade from `1.1.3` to `1.1.4`
* **@mxjs/a-form:** upgrade from `1.1.5` to `1.2.0`
* **@mxjs/a-page:** upgrade from `1.1.2` to `1.1.3`
* **@mxjs/a-table:** upgrade from `1.2.1` to `1.3.0`
* **@mxjs/upload:** upgrade from `0.6.13` to `0.6.14`
* **@miaoxing/app:** upgrade from `0.6.12` to `0.6.13`
* **@miaoxing/file:** upgrade from `0.3.11` to `0.3.12`

## [0.9.6](https://github.com/miaoxing/admin/compare/v0.9.5...v0.9.6) (2023-01-01)


### Features

* 更新 `fower` 到 `~1.75.0` ([10554e6](https://github.com/miaoxing/admin/commit/10554e667d91a569b07681069ea355ca35ec38bb))
* **admin:** `Select` 增加 `optionsKeys` 属性，用于自动识别多维数据 ([d0c52a6](https://github.com/miaoxing/admin/commit/d0c52a6f28ea011489b87d2192b531311e237c3f))
* **admin:** 增加 `Select` 组件，允许传入 URL 读取后台数据作为选项 ([48755f6](https://github.com/miaoxing/admin/commit/48755f62723e41c07ea9d4a7970b020b5dec57c2))
* **admin:** 增加 `TreeSelect` 组件，允许传入 URL 读取后台数据作为选项 ([a5554dd](https://github.com/miaoxing/admin/commit/a5554dd870733b2f7c645a9eb8f4baec8b5f4ba1))
* **admin:** 增加未登录跳转，控制未登录错误只提示一个 ([069361f](https://github.com/miaoxing/admin/commit/069361f65f1ede44f795657342e6858202183adc))
* **admin, experimental:** 增加 `consts/[id]` 接口，用于读取服务配置的常量 ([77befcf](https://github.com/miaoxing/admin/commit/77befcf7b14ca0f247c570cb95cc405c3fb2d21e))





### Dependencies

* **@mxjs/a-clink:** upgrade from `1.1.2` to `1.1.3`
* **@mxjs/a-form:** upgrade from `1.1.4` to `1.1.5`
* **@mxjs/a-page:** upgrade from `1.1.1` to `1.1.2`
* **@mxjs/a-table:** upgrade from `1.2.0` to `1.2.1`
* **@mxjs/api:** upgrade from `1.0.2` to `1.0.3`
* **@mxjs/css:** upgrade from `1.0.1` to `1.1.0`
* **@mxjs/upload:** upgrade from `0.6.12` to `0.6.13`
* **miaoxing:** upgrade from `0.4.5` to `0.4.6`
* **@miaoxing/dev:** upgrade from `8.1.3` to `8.2.0`
* **@mxjs/test:** upgrade from `1.0.2` to `1.0.3`
* **@miaoxing/app:** upgrade from `0.6.11` to `0.6.12`
* **@miaoxing/file:** upgrade from `0.3.10` to `0.3.11`

## [0.9.5](https://github.com/miaoxing/admin/compare/v0.9.4...v0.9.5) (2022-12-01)


### Bug Fixes

* **admin:** 移除菜单后再添加时，name 计算错误导致菜单被覆盖 ([49368a1](https://github.com/miaoxing/admin/commit/49368a1dcb4e4618953a460baa18af9ab6f36b61))


### Features

* **admin:** `SearchItemExport` 支持排序 ([e1d90d9](https://github.com/miaoxing/admin/commit/e1d90d91d4dad8715f4ee1c72e4a1f3745898338))
* **admin:** `SearchItemExport` 支持读取后台输出的文件 ([8428a98](https://github.com/miaoxing/admin/commit/8428a98df2d6ce1fa3945cf192a97f4b5fcda049))
* **admin:** 分组支持二级 ([022da64](https://github.com/miaoxing/admin/commit/022da64bedeee73a08a44224ef6e6a5dc5ed8bbc))
* **admin:** 初始化 `SearchItemExport` 组件 ([fd0b60a](https://github.com/miaoxing/admin/commit/fd0b60a8624fbe78955e9afa24b4802498f3521b))
* **admin:** 增加 `TableImage` 组件 ([4ce002a](https://github.com/miaoxing/admin/commit/4ce002a4e5bc4ec26d64d0d0ef4e404a584e2202))
* **admin:** 增加 `TableImages` 组件 ([116b64a](https://github.com/miaoxing/admin/commit/116b64a2a7fc34737350231ffe3718008c67fe66))
* **admin:** 管理员支持二级分组 ([3a3fe7c](https://github.com/miaoxing/admin/commit/3a3fe7c557a83cd0b2e2fe6bc2903d28e2798e5a))





### Dependencies

* **@mxjs/a-clink:** upgrade from `1.1.1` to `1.1.2`
* **@mxjs/a-form:** upgrade from `1.1.3` to `1.1.4`
* **@mxjs/a-page:** upgrade from `1.1.0` to `1.1.1`
* **@mxjs/a-table:** upgrade from `1.1.2` to `1.2.0`
* **@mxjs/api:** upgrade from `1.0.1` to `1.0.2`
* **@mxjs/upload:** upgrade from `0.6.11` to `0.6.12`
* **miaoxing:** upgrade from `0.4.4` to `0.4.5`
* **@mxjs/test:** upgrade from `1.0.1` to `1.0.2`
* **@miaoxing/app:** upgrade from `0.6.10` to `0.6.11`
* **@miaoxing/file:** upgrade from `0.3.9` to `0.3.10`

## [0.9.4](https://github.com/miaoxing/admin/compare/v0.9.3...v0.9.4) (2022-11-02)





### Dependencies

* **@mxjs/a-clink:** upgrade from `1.1.0` to `1.1.1`
* **@mxjs/a-form:** upgrade from `1.1.2` to `1.1.3`
* **@mxjs/a-table:** upgrade from `1.1.1` to `1.1.2`
* **@mxjs/upload:** upgrade from `0.6.10` to `0.6.11`

## [0.9.3](https://github.com/miaoxing/admin/compare/v0.9.2...v0.9.3) (2022-11-01)


### Bug Fixes

* 图片字段允许为空字符串 ([9e8d561](https://github.com/miaoxing/admin/commit/9e8d5617b65111d1c5d18e0f1f101c3fe4a80838))
* 校验增加长度检查 ([ac0204b](https://github.com/miaoxing/admin/commit/ac0204be47a255ca3d6603be93e0dc4b04370791))
* **admin:** 更新分组允许不提供名称，名称不能为空字符串 ([179975c](https://github.com/miaoxing/admin/commit/179975c7388d8424ea387bfaf9dc8822f036f99a))


### Features

* 增加图片地址检查 ([070a5ae](https://github.com/miaoxing/admin/commit/070a5ae5d68a94c554fa24ea65bfd42a939d76d0))





### Dependencies

* **@mxjs/a-clink:** upgrade from `1.0.1` to `1.1.0`
* **@mxjs/a-form:** upgrade from `1.1.1` to `1.1.2`
* **@mxjs/a-table:** upgrade from `1.1.0` to `1.1.1`
* **@mxjs/upload:** upgrade from `0.6.9` to `0.6.10`
* **@miaoxing/app:** upgrade from `0.6.9` to `0.6.10`
* **@miaoxing/file:** upgrade from `0.3.8` to `0.3.9`

## [0.9.2](https://github.com/miaoxing/admin/compare/v0.9.1...v0.9.2) (2022-09-30)


### Bug Fixes

* **admin:** 访问后台地址有 `/` 时，跳转地址错误 ([f10e79a](https://github.com/miaoxing/admin/commit/f10e79ac6769a6599bbeab9fe8feb73c00616201))





### Dependencies

* **@mxjs/a-form:** upgrade from `1.1.0` to `1.1.1`
* **@mxjs/a-page:** upgrade from `1.0.1` to `1.1.0`
* **@mxjs/a-table:** upgrade from `1.0.2` to `1.1.0`
* **@mxjs/upload:** upgrade from `0.6.8` to `0.6.9`
* **@miaoxing/app:** upgrade from `0.6.8` to `0.6.9`
* **@miaoxing/file:** upgrade from `0.3.7` to `0.3.8`

## [0.9.1](https://github.com/miaoxing/admin/compare/v0.9.0...v0.9.1) (2022-09-03)


### Bug Fixes

* **admin:** 上传头像功能失效 ([d60802a](https://github.com/miaoxing/admin/commit/d60802ab471dbe6f61d006875c5b2c8079638338))


### Features

* **admin:** 增加 `FormInputPrice` 组件 ([2f3c525](https://github.com/miaoxing/admin/commit/2f3c5253edcc571c4055f4eb83349596b745c09c))
* **admin:** 记录退出登录操作 ([d8c525d](https://github.com/miaoxing/admin/commit/d8c525da793a26788a642933b6c9e667f5de36c1))
* **admin:** 进入后台自动跳转到首个菜单页面 ([6285ef8](https://github.com/miaoxing/admin/commit/6285ef8e014287c16686889bae9943c89e0fa01c))
* **admin, AdminMenu:** 增加菜单时，如果 `name` 为 `null`，则自动生成数字名称 ([9e64fb5](https://github.com/miaoxing/admin/commit/9e64fb5c7053f89366381100f6f79850de42d590))
* **u, admin:** 增加管理员修改资料功能 ([1ca4c8e](https://github.com/miaoxing/admin/commit/1ca4c8efdb6ce63548009024f1b0cdcdc519a26f))





### Dependencies

* **@mxjs/a-form:** upgrade from `1.0.1` to `1.1.0`
* **@mxjs/a-table:** upgrade from `1.0.1` to `1.0.2`
* **@mxjs/upload:** upgrade from `0.6.7` to `0.6.8`
* **@miaoxing/app:** upgrade from `0.6.7` to `0.6.8`
* **@miaoxing/file:** upgrade from `0.3.6` to `0.3.7`

# [0.9.0](https://github.com/miaoxing/admin/compare/v0.8.1...v0.9.0) (2022-08-02)


### Code Refactoring

* **Model:** 移动模型基类到 `wei` 中 ([e0d5086](https://github.com/miaoxing/admin/commit/e0d5086104c2f09c5006e12e97241e6449b9d891))


### Features

* **admin:** `adminMenu` 服务增加 `removeChild` 方法 ([371aec6](https://github.com/miaoxing/admin/commit/371aec64bd03e43028f64e7af6fc0765cdc1cafe))
* **admin:** 登录页允许通过 URL auth 参数，自动填写用户名和密码 ([c12af38](https://github.com/miaoxing/admin/commit/c12af383c13628bb3af4ac857393902027924fa1))
* **admin:** 登录页底部显示版权信息 ([7421595](https://github.com/miaoxing/admin/commit/7421595aaea8b149cdc376cbd8270810ca333e7b))
* **u, admin:** 增加后台设置ICP 备案号和公安备案号功能 ([f4ac074](https://github.com/miaoxing/admin/commit/f4ac074ab6cab498e1e6fb42116f2dd9f4dff82e))
* **u, admin:** 登录页面底部显示ICP 备案号和公安备案号 ([6cf6b89](https://github.com/miaoxing/admin/commit/6cf6b898a022c110122262553d091f47de685ca0))


### BREAKING CHANGES

* **Model:** 移动模型基类到 `wei` 中





### Dependencies

* **@mxjs/a-clink:** upgrade from `1.0.0` to `1.0.1`
* **@mxjs/a-form:** upgrade from `1.0.0` to `1.0.1`
* **@mxjs/a-page:** upgrade from `1.0.0` to `1.0.1`
* **@mxjs/a-table:** upgrade from `1.0.0` to `1.0.1`
* **@mxjs/api:** upgrade from `1.0.0` to `1.0.1`
* **@mxjs/css:** upgrade from `1.0.0` to `1.0.1`
* **@mxjs/upload:** upgrade from `0.6.6` to `0.6.7`
* **miaoxing:** upgrade from `0.4.3` to `0.4.4`
* **@miaoxing/dev:** upgrade from `8.1.2` to `8.1.3`
* **@mxjs/test:** upgrade from `1.0.0` to `1.0.1`
* **@miaoxing/app:** upgrade from `0.6.6` to `0.6.7`
* **@miaoxing/file:** upgrade from `0.3.5` to `0.3.6`

## [0.8.1](https://github.com/miaoxing/admin/compare/v0.8.0...v0.8.1) (2022-07-02)


### Bug Fixes

* 解决 composer 2.2+ 默认不启用插件导致安装路径错误 ([d6dc73c](https://github.com/miaoxing/admin/commit/d6dc73cd37c52439c0affd7c9926fb07868151d4))





### Dependencies

* **@miaoxing/app:** upgrade from `0.6.5` to `0.6.6`
* **@miaoxing/file:** upgrade from `0.3.4` to `0.3.5`

# [0.8.0](https://github.com/miaoxing/admin/compare/v0.7.3...v0.8.0) (2022-07-01)


### Bug Fixes

* **admin:** 解决 "未分组" 和 "全部" 的 "id" 为空导致筛选重复 ([fa216da](https://github.com/miaoxing/admin/commit/fa216dabb860bec163b991a101f108d24e41b3d6))


### Code Refactoring

* **admin:** `AdminNav` 服务改为 `AdminMenu` ([6d09290](https://github.com/miaoxing/admin/commit/6d092906a2ac7c62a8d8ba7180edb22254daef52))
* **admin:** 后台菜单改为通过 `adminMenuGetMenus` 事件和 `AdminMenu` 服务添加 ([6331a95](https://github.com/miaoxing/admin/commit/6331a9538f0d53c9c137433ab7072894f0328800))


### Features

* URL 地址改为只返回路径，以便前台生成完整地址 ([27e9e43](https://github.com/miaoxing/admin/commit/27e9e43c5e95924e385fa4b4868fa29cb44e0a4d))


### BREAKING CHANGES

* **admin:** 移除 `GroupModel` 的 `withUngroup` 方法
* **admin:** 后台菜单改为通过 `adminMenuGetMenus` 事件和 `AdminMenu` 服务添加
* **admin:** `AdminNav` 服务改为 `AdminMenu`





### Dependencies

* **@mxjs/a-clink:** upgrade from `0.2.6` to `1.0.0`
* **@mxjs/a-form:** upgrade from `0.3.7` to `1.0.0`
* **@mxjs/a-page:** upgrade from `0.3.7` to `1.0.0`
* **@mxjs/a-table:** upgrade from `0.4.6` to `1.0.0`
* **@mxjs/api:** upgrade from `0.1.10` to `1.0.0`
* **@mxjs/css:** upgrade from `0.3.3` to `1.0.0`
* **@mxjs/upload:** upgrade from `0.6.5` to `0.6.6`
* **miaoxing:** upgrade from `0.4.2` to `0.4.3`
* **@miaoxing/dev:** upgrade from `8.1.1` to `8.1.2`
* **@mxjs/test:** upgrade from `0.2.6` to `1.0.0`
* **@miaoxing/app:** upgrade from `0.6.4` to `0.6.5`
* **@miaoxing/file:** upgrade from `0.3.3` to `0.3.4`

## [0.7.3](https://github.com/miaoxing/admin/compare/v0.7.2...v0.7.3) (2022-06-06)





### Dependencies

* **@mxjs/a-clink:** upgrade from `0.2.5` to `0.2.6`
* **@mxjs/a-form:** upgrade from `0.3.6` to `0.3.7`
* **@mxjs/a-page:** upgrade from `0.3.6` to `0.3.7`
* **@mxjs/a-table:** upgrade from `0.4.5` to `0.4.6`
* **@mxjs/api:** upgrade from `0.1.9` to `0.1.10`
* **@mxjs/upload:** upgrade from `0.6.4` to `0.6.5`
* **@mxjs/test:** upgrade from `0.2.5` to `0.2.6`

## [0.7.2](https://github.com/miaoxing/admin/compare/v0.7.1...v0.7.2) (2022-06-01)


### Bug Fixes

* **admin:** 解决控制台提示 Warning: MenuItem should not leave undefined `key`. ([043bcc1](https://github.com/miaoxing/admin/commit/043bcc1f1d5b7f351d21a447fa28002f93bbe035))


### Features

* **admin:** 演示模式下，提交修改密码后不会改变原密码 ([2328ed5](https://github.com/miaoxing/admin/commit/2328ed5fb02bf9520fe57a15ebd5692fc63b949b))
* 演示模式下，提交修改密码后不会改变原密码 ([0d6908a](https://github.com/miaoxing/admin/commit/0d6908a1ebceafefcf153123339a46ad8c49f4fd))
* **admin:** 侧边栏支持 `hash` 路由模式 ([20449be](https://github.com/miaoxing/admin/commit/20449be800a8ffcde30e6c65e0e8d2486e79a9da))
* **admin:** 修改密码退出登录支持 `hash` 路由器模式 ([2d094f8](https://github.com/miaoxing/admin/commit/2d094f8ebc293681232271fca8fa192616557c8c))
* **admin:** 未登录跳转支持 `hash` 路由器模式 ([df35395](https://github.com/miaoxing/admin/commit/df35395ccc0373669ae66cc02c240a2728557d04))
* **admin:** 登录后跳转支持 `hash` 路由器模式 ([189366a](https://github.com/miaoxing/admin/commit/189366a9e8ffbcf9a3653f504a7ef87d0288b96b))
* **admin:** 自动跳转后台页面，支持 `hash` 路由器模式 ([d6927d4](https://github.com/miaoxing/admin/commit/d6927d4caf451451f70524d525117cfc78c3357e))
* **admin:** 退出登录跳转地址支持 `hash` 路由器模式 ([6ed2831](https://github.com/miaoxing/admin/commit/6ed2831558da959b59bcf390e461912c88c81b0f))





### Dependencies

* **@mxjs/a-clink:** upgrade from `0.2.4` to `0.2.5`
* **@mxjs/a-form:** upgrade from `0.3.5` to `0.3.6`
* **@mxjs/a-page:** upgrade from `0.3.5` to `0.3.6`
* **@mxjs/a-table:** upgrade from `0.4.4` to `0.4.5`
* **@mxjs/api:** upgrade from `0.1.8` to `0.1.9`
* **@mxjs/css:** upgrade from `0.3.2` to `0.3.3`
* **@mxjs/upload:** upgrade from `0.6.3` to `0.6.4`
* **miaoxing:** upgrade from `0.4.1` to `0.4.2`
* **@miaoxing/dev:** upgrade from `8.1.0` to `8.1.1`
* **@mxjs/test:** upgrade from `0.2.4` to `0.2.5`
* **@miaoxing/app:** upgrade from `0.6.3` to `0.6.4`
* **@miaoxing/file:** upgrade from `0.3.2` to `0.3.3`

## [0.7.1](https://github.com/miaoxing/admin/compare/v0.7.0...v0.7.1) (2022-04-30)


### Bug Fixes

* **u, admin:** 解决域名绑定后台时，直接访问域名，识别不到是后台而出错 ([9fc31a7](https://github.com/miaoxing/admin/commit/9fc31a7daa7a94df5b135e9ee6635f30d63aa690))


### Features

* **admin, experimental:** 增加 `FormItemUpload` 组件 ([d14a340](https://github.com/miaoxing/admin/commit/d14a3401d65d418f3bc9555e85ea03df7f7de18c))
* 允许设置路径的 `url` 为 false 来不显示面包屑地址 ([5cacd2c](https://github.com/miaoxing/admin/commit/5cacd2c2f55073775b861493e19306378a363ed1))





### Dependencies

* **@mxjs/a-form:** upgrade from `0.3.4` to `0.3.5`
* **@mxjs/a-page:** upgrade from `0.3.4` to `0.3.5`
* **@mxjs/upload:** upgrade from `0.6.2` to `0.6.3`
* **@miaoxing/app:** upgrade from `0.6.2` to `0.6.3`
* **@miaoxing/file:** upgrade from `0.3.1` to `0.3.2`

# [0.7.0](https://github.com/miaoxing/admin/compare/v0.6.0...v0.7.0) (2022-03-31)


### Bug Fixes

* **admin:** 用户分组表增加 `app_id` 字段 ([bf13b2a](https://github.com/miaoxing/admin/commit/bf13b2afef91aba1cdfdc636d2125c2888ec8669))
* **admin:** 解决 fower 1.68+ 不识别 `brand` 颜色 ([4ff21fa](https://github.com/miaoxing/admin/commit/4ff21fafe49de6654e9388f2b3238a1bf1470b7b))


### Features

* 更新 `fower` 到 `^1.70.0` ([0b59c80](https://github.com/miaoxing/admin/commit/0b59c8001c17fd11ad5dbcac4fa1eb7b006bd4d4))
* **admin:** 后台布局没有 token 则提前跳转到登录页面 ([cd6c641](https://github.com/miaoxing/admin/commit/cd6c64112e3b40bf3c9affeb397755144c569b14))


### BREAKING CHANGES

* **admin:** 用户分组表增加 `app_id` 字段





### Dependencies

* **@mxjs/a-clink:** upgrade from `0.2.3` to `0.2.4`
* **@mxjs/a-form:** upgrade from `0.3.3` to `0.3.4`
* **@mxjs/a-page:** upgrade from `0.3.3` to `0.3.4`
* **@mxjs/a-table:** upgrade from `0.4.3` to `0.4.4`
* **@mxjs/api:** upgrade from `0.1.7` to `0.1.8`
* **@mxjs/css:** upgrade from `0.3.1` to `0.3.2`
* **@mxjs/upload:** upgrade from `0.6.1` to `0.6.2`
* **@mxjs/test:** upgrade from `0.2.3` to `0.2.4`
* **@miaoxing/app:** upgrade from `0.6.1` to `0.6.2`
* **@miaoxing/file:** upgrade from `0.3.0` to `0.3.1`

# [0.6.0](https://github.com/miaoxing/admin/compare/v0.5.2...v0.6.0) (2022-03-04)


### Bug Fixes

* 处理路径时，兼容结尾有 `/` 的情况 ([83c2f9d](https://github.com/miaoxing/admin/commit/83c2f9d9e1cf7804dd29dc5bf52cf119d9264376))


### Features

* 数据表 `app_id` 字段由 `int` 升级到 `bigint` ([cbe854e](https://github.com/miaoxing/admin/commit/cbe854ecce433fc49bafc0edfa380f2c3fe7b221))


### BREAKING CHANGES

* 数据表 `app_id` 字段由 `int` 升级到 `bigint`





### Dependencies

* **@mxjs/a-clink:** upgrade from `0.2.2` to `0.2.3`
* **@mxjs/a-form:** upgrade from `0.3.2` to `0.3.3`
* **@mxjs/a-page:** upgrade from `0.3.2` to `0.3.3`
* **@mxjs/a-table:** upgrade from `0.4.2` to `0.4.3`
* **@mxjs/api:** upgrade from `0.1.6` to `0.1.7`
* **@mxjs/upload:** upgrade from `0.6.0` to `0.6.1`
* **@mxjs/test:** upgrade from `0.2.2` to `0.2.3`
* **@miaoxing/app:** upgrade from `0.6.0` to `0.6.1`
* **@miaoxing/file:** upgrade from `0.2.0` to `0.3.0`

## [0.5.2](https://github.com/miaoxing/admin/compare/v0.5.1...v0.5.2) (2022-02-28)


### Bug Fixes

* **admin:** 解决退出登录前端未删除 token ([32be1fb](https://github.com/miaoxing/admin/commit/32be1fbdadf763efdaac7d24c180b9510c310aae))


### Features

* **admin:** 增加 `Upload` 组件 ([4f79a90](https://github.com/miaoxing/admin/commit/4f79a90790f883860fd6e12df737387d38fe4676))





### Dependencies

* **@mxjs/upload:** upgrade from `0.5.2` to `0.6.0`
* **@miaoxing/app:** upgrade from `0.5.1` to `0.6.0`
* **@miaoxing/file:** upgrade from `0.1.15` to `0.2.0`

## [0.5.1](https://github.com/miaoxing/admin/compare/v0.5.0...v0.5.1) (2022-02-05)


### Features

* **admin:** 增加 `AdminPage` 服务来管理页面数据 ([f07859e](https://github.com/miaoxing/admin/commit/f07859e9fb073d76664516eccd98605511ba4d33))
* **admin, experimental:** 允许自定义页面背景图 ([118f5a4](https://github.com/miaoxing/admin/commit/118f5a4efa419efecb44cab5b4e11a381be286f8))





### Dependencies

* **@mxjs/a-clink:** upgrade from `0.2.1` to `0.2.2`
* **@mxjs/a-form:** upgrade from `0.3.1` to `0.3.2`
* **@mxjs/a-page:** upgrade from `0.3.1` to `0.3.2`
* **@mxjs/a-table:** upgrade from `0.4.1` to `0.4.2`
* **@mxjs/api:** upgrade from `0.1.5` to `0.1.6`
* **@mxjs/css:** upgrade from `0.3.0` to `0.3.1`
* **@mxjs/upload:** upgrade from `0.5.1` to `0.5.2`
* **miaoxing:** upgrade from `0.4.0` to `0.4.1`
* **@miaoxing/dev:** upgrade from `8.0.1` to `8.1.0`
* **@mxjs/test:** upgrade from `0.2.1` to `0.2.2`
* **@miaoxing/app:** upgrade from `0.5.0` to `0.5.1`
* **@miaoxing/file:** upgrade from `0.1.14` to `0.1.15`

# [0.5.0](https://github.com/miaoxing/admin/compare/v0.4.0...v0.5.0) (2022-01-12)


### Bug Fixes

* 更新 `[@fower](https://github.com/fower)` 到 `^1.59.0` ([032a475](https://github.com/miaoxing/admin/commit/032a475b4b804e384fad2f8196ba02b6c971b58c))


### Code Refactoring

* **admin:** 管理端移除 PHP 视图功能 ([36d775e](https://github.com/miaoxing/admin/commit/36d775e8ebc527018ba5e70cf815603d2aa70f3c))


### Features

* **admin:** `AdminModelTrait` 增加 `MineTrait` ([8a82ddb](https://github.com/miaoxing/admin/commit/8a82ddb3d902a49f29d3e91c4195c8b9a3dd392d))
* **admin:** 允许带链接的一级菜单 ([fd28717](https://github.com/miaoxing/admin/commit/fd287172cb980fb15f3c78dcb58e3d6d3972b5dc))
* **admin:** 启动时加载配置 ([a44f527](https://github.com/miaoxing/admin/commit/a44f5277ac758b5b41937b32dc86544de070bd6e))
* **admin:** 增加 `FormItemSort` 组件 ([f0f6aef](https://github.com/miaoxing/admin/commit/f0f6aef0ec18e0939df36a881dd68f56ceeb3bfc))
* **admin:** 增加 `fower/react` 配置 ([5976f30](https://github.com/miaoxing/admin/commit/5976f3089f866ca7cd4e88a8d69164d7cc66fdc5))
* **admin:** 增加 `InputPrice` 组件 ([5536919](https://github.com/miaoxing/admin/commit/55369193d6268398890a28fe051388a3aec219ec))
* **admin:** 增加 logo 文件，后台无返回 logo 时显示默认 logo ([540cff6](https://github.com/miaoxing/admin/commit/540cff622ccb21e448f3f6b7a104d3b1479702b2))
* **admin:** 增加后台首页入口 ([ea1cba6](https://github.com/miaoxing/admin/commit/ea1cba6ce41de9fd00f180a7bd39f20ea654e012))
* **admin:** 增加默认头像组件 ([9df06a1](https://github.com/miaoxing/admin/commit/9df06a12b5ba35a6e46fe57114ff9c5affc9aaef))
* **admin:** 配置 `fower` 解析 `sx` 属性 ([0f884a3](https://github.com/miaoxing/admin/commit/0f884a3a900458155a9c39a607036487472e0e98))
* 更新 `[@fower](https://github.com/fower)` 到 `^1.61` ([7c00614](https://github.com/miaoxing/admin/commit/7c006144fb2bb4b94c621938d19bd13d83adf7fc))
* **admin, webpack:** 发布插件的 public 目录，以便通过浏览器直接访问 ([a954ac2](https://github.com/miaoxing/admin/commit/a954ac253eb83bd8e6e626e7bbc15d0c23cb2f59))
* **app:** 更改 `$.alert` 和 `$.confirm` 为 antd 的 Modal 组件 ([8c9c09c](https://github.com/miaoxing/admin/commit/8c9c09c331928e81e16c104b26afb3a4587e8c3f))


### BREAKING CHANGES

* **admin:** 管理端移除 PHP 视图功能





### Dependencies

* **@mxjs/a-clink:** upgrade from `0.2.0` to `0.2.1`
* **@mxjs/a-form:** upgrade from `0.3.0` to `0.3.1`
* **@mxjs/a-page:** upgrade from `0.3.0` to `0.3.1`
* **@mxjs/a-table:** upgrade from `0.4.0` to `0.4.1`
* **@mxjs/api:** upgrade from `0.1.4` to `0.1.5`
* **@mxjs/css:** upgrade from `0.2.3` to `0.3.0`
* **@mxjs/upload:** upgrade from `0.5.0` to `0.5.1`
* **miaoxing:** upgrade from `0.3.0` to `0.4.0`
* **@miaoxing/dev:** upgrade from `8.0.0` to `8.0.1`
* **@mxjs/test:** upgrade from `0.2.0` to `0.2.1`
* **@miaoxing/app:** upgrade from `0.4.0` to `0.5.0`
* **@miaoxing/file:** upgrade from `0.1.13` to `0.1.14`

# [0.4.0](https://github.com/miaoxing/admin/compare/v0.3.15...v0.4.0) (2021-10-28)


### Code Refactoring

* `expand` 参数改为 `include` ([96a4583](https://github.com/miaoxing/admin/commit/96a4583fd841aa5fdc5bb49147b0c16e567fdea3))
* 调整错误码为 001 开始 ([37b4c0b](https://github.com/miaoxing/admin/commit/37b4c0b6caa6652dcefc37b6e4bfcbafcd3ec36a))
* **Model:** 模型的关联方法加上返回值 ([fb0de3d](https://github.com/miaoxing/admin/commit/fb0de3d4599737db10fc6056491aaa434e8bfe21))


### Features

* 数据表主键 由 `int` 改为 `bigint` ([ddcdf46](https://github.com/miaoxing/admin/commit/ddcdf4631f12b2fa0ad01caf3cbff67c58cd515e))
* 更新 `react` 到 17 ([50214bb](https://github.com/miaoxing/admin/commit/50214bb83668857e5043f30551a28b0fda05b719))
* 模型通过 `SnowflakeTrait` 生成 id ([ec384c8](https://github.com/miaoxing/admin/commit/ec384c88cd7e80737fb64075bcc67fc68cad2d09))


### BREAKING CHANGES

* 数据表主键 由 `int` 改为 `bigint`
* `expand` 参数改为 `include`
* 调整错误码为 001 开始
* 更新 `react` 到 17
* **Model:** 模型的关联方法加上返回值





### Dependencies

* **@mxjs/css:** upgrade from `0.2.2` to `0.2.3`
* **miaoxing:** upgrade from `0.2.5` to `0.3.0`
* **@mxjs/upload:** upgrade from `0.4.3` to `0.5.0`
* **@mxjs/a-clink:** upgrade from `0.1.8` to `0.2.0`
* **@mxjs/a-table:** upgrade from `0.3.11` to `0.4.0`
* **@mxjs/a-page:** upgrade from `0.2.8` to `0.3.0`
* **@mxjs/a-form:** upgrade from `0.2.15` to `0.3.0`
* **@mxjs/api:** upgrade from `0.1.3` to `0.1.4`
* **@miaoxing/dev:** upgrade from `7.0.1` to `8.0.0`
* **@mxjs/test:** upgrade from `0.1.8` to `0.2.0`
* **@miaoxing/app:** upgrade from `0.3.3` to `0.4.0`
* **@miaoxing/file:** upgrade from `0.1.12` to `0.1.13`

## [0.3.15](https://github.com/miaoxing/admin/compare/v0.3.14...v0.3.15) (2021-05-21)





### Dependencies

* **@mxjs/upload:** upgrade from `0.4.2` to `0.4.3`
* **@miaoxing/app:** upgrade from `0.3.2` to `0.3.3`
* **@miaoxing/file:** upgrade from `0.1.11` to `0.1.12`

## [0.3.14](https://github.com/miaoxing/admin/compare/v0.3.13...v0.3.14) (2021-05-12)





### Dependencies

* **@mxjs/css:** upgrade from `0.2.1` to `0.2.2`
* **miaoxing:** upgrade from `0.2.4` to `0.2.5`
* **@mxjs/upload:** upgrade from `0.4.1` to `0.4.2`
* **@mxjs/a-clink:** upgrade from `0.1.7` to `0.1.8`
* **@mxjs/a-table:** upgrade from `0.3.10` to `0.3.11`
* **@mxjs/a-page:** upgrade from `0.2.7` to `0.2.8`
* **@mxjs/a-form:** upgrade from `0.2.14` to `0.2.15`
* **@miaoxing/dev:** upgrade from `7.0.0` to `7.0.1`
* **@mxjs/test:** upgrade from `0.1.7` to `0.1.8`
* **@miaoxing/app:** upgrade from `0.3.1` to `0.3.2`
* **@miaoxing/file:** upgrade from `0.1.10` to `0.1.11`

## [0.3.13](https://github.com/miaoxing/admin/compare/v0.3.12...v0.3.13) (2021-05-11)


### Bug Fixes

* 更新默认数据的结构 ([41f97d9](https://github.com/miaoxing/admin/commit/41f97d929a36f00e470989741be550f8a88ceb51))





### Dependencies

* **@mxjs/css:** upgrade from `0.2.0` to `0.2.1`
* **miaoxing:** upgrade from `0.2.3` to `0.2.4`
* **@mxjs/upload:** upgrade from `0.4.0` to `0.4.1`
* **@mxjs/a-clink:** upgrade from `0.1.6` to `0.1.7`
* **@mxjs/a-table:** upgrade from `0.3.9` to `0.3.10`
* **@mxjs/a-page:** upgrade from `0.2.6` to `0.2.7`
* **@mxjs/a-form:** upgrade from `0.2.13` to `0.2.14`
* **@miaoxing/dev:** upgrade from `6.4.0` to `7.0.0`
* **@mxjs/test:** upgrade from `0.1.6` to `0.1.7`
* **@miaoxing/app:** upgrade from `0.3.0` to `0.3.1`
* **@miaoxing/file:** upgrade from `0.1.9` to `0.1.10`

## [0.3.12](https://github.com/miaoxing/admin/compare/v0.3.11...v0.3.12) (2021-04-27)


### Bug Fixes

* 内容过高时背景重复，底部边距失效，头部边距导致出现滚动条 ([8e114f7](https://github.com/miaoxing/admin/commit/8e114f7d1ffbcca43e68a2f328e06ede6f9e69e0))


### Features

* 增加创建页面测试数据的 Seeder ([152446f](https://github.com/miaoxing/admin/commit/152446f0f89f9edeecd13aa4885ec18e75061fe0))





### Dependencies

* **@mxjs/css:** upgrade from `0.1.0` to `0.2.0`
* **@miaoxing/dev:** upgrade from `6.3.4` to `6.4.0`
* **miaoxing:** upgrade from `0.2.2` to `0.2.3`
* **@mxjs/upload:** upgrade from `0.3.10` to `0.4.0`
* **@miaoxing/app:** upgrade from `0.2.13` to `0.3.0`
* **@miaoxing/file:** upgrade from `0.1.8` to `0.1.9`

## [0.3.11](https://github.com/miaoxing/admin/compare/v0.3.10...v0.3.11) (2021-03-22)





### Dependencies

* **@miaoxing/dev:** upgrade from `6.3.3` to `6.3.4`
* **miaoxing:** upgrade from `0.2.1` to `0.2.2`
* **@mxjs/upload:** upgrade from `0.3.9` to `0.3.10`
* **@miaoxing/app:** upgrade from `0.2.12` to `0.2.13`
* **@miaoxing/file:** upgrade from `0.1.7` to `0.1.8`

## [0.3.10](https://github.com/miaoxing/admin/compare/v0.3.9...v0.3.10) (2021-03-17)





### Dependencies

* **@mxjs/upload:** upgrade from `0.3.8` to `0.3.9`
* **@miaoxing/app:** upgrade from `0.2.11` to `0.2.12`
* **@miaoxing/file:** upgrade from `0.1.6` to `0.1.7`

## [0.3.9](https://github.com/miaoxing/admin/compare/v0.3.8...v0.3.9) (2021-03-12)


### Bug Fixes

* 更新前端包依赖 ([114d5d7](https://github.com/miaoxing/admin/commit/114d5d76c6a9d060d83c6a57c11ce07517eddd70))





### Dependencies

* **@miaoxing/dev:** upgrade from `6.3.2` to `6.3.3`
* **miaoxing:** upgrade from `0.2.0` to `0.2.1`
* **@mxjs/upload:** upgrade from `0.3.7` to `0.3.8`
* **@miaoxing/app:** upgrade from `0.2.10` to `0.2.11`
* **@miaoxing/file:** upgrade from `0.1.5` to `0.1.6`

## [0.3.8](https://github.com/miaoxing/admin/compare/v0.3.7...v0.3.8) (2021-03-11)





### Dependencies

* **miaoxing:** upgrade from `0.1.10` to `0.2.0`
* **@mxjs/upload:** upgrade from `0.3.6` to `0.3.7`

## [0.3.7](https://github.com/miaoxing/admin/compare/v0.3.6...v0.3.7) (2021-03-11)





### Dependencies

* **@mxjs/upload:** upgrade from `0.3.5` to `0.3.6`

## [0.3.6](https://github.com/miaoxing/admin/compare/v0.3.5...v0.3.6) (2021-03-10)





### Dependencies

* **@mxjs/upload:** upgrade from `0.3.4` to `0.3.5`

## [0.3.5](https://github.com/miaoxing/admin/compare/v0.3.4...v0.3.5) (2021-03-10)





### Dependencies

* **miaoxing:** upgrade from 0.1.9 to 0.1.10
* **@mxjs/upload:** upgrade from 0.3.3 to 0.3.4
* **@miaoxing/dev:** upgrade from 6.3.1 to 6.3.2
* **@miaoxing/app:** upgrade from 0.2.9 to 0.2.10
* **@miaoxing/file:** upgrade from 0.1.4 to 0.1.5

## [0.3.4](https://github.com/miaoxing/admin/compare/v0.3.3...v0.3.4) (2021-03-09)





### Dependencies

* **miaoxing:** upgrade from 0.1.8 to 0.1.9
* **@mxjs/upload:** upgrade from 0.3.2 to 0.3.3
* **@miaoxing/dev:** upgrade from 6.3.0 to 6.3.1
* **@miaoxing/app:** upgrade from 0.2.8 to 0.2.9
* **@miaoxing/file:** upgrade from 0.1.3 to 0.1.4

## [0.3.3](https://github.com/miaoxing/admin/compare/v0.3.2...v0.3.3) (2021-03-09)





### Dependencies

* **miaoxing:** upgrade from 0.1.7 to 0.1.8
* **@mxjs/upload:** upgrade from 0.3.1 to 0.3.2
* **@miaoxing/dev:** upgrade from 6.2.0 to 6.3.0
* **@miaoxing/app:** upgrade from 0.2.7 to 0.2.8
* **@miaoxing/file:** upgrade from 0.1.2 to 0.1.3

## [0.3.2](https://github.com/miaoxing/admin/compare/v0.3.1...v0.3.2) (2021-03-05)





### Dependencies

* **@miaoxing/app:** upgrade from 0.2.6 to 0.2.7
* **@miaoxing/file:** upgrade from 0.1.1 to 0.1.2

## [0.3.1](https://github.com/miaoxing/admin/compare/v0.3.0...v0.3.1) (2021-03-05)





### Dependencies

* **miaoxing:** upgrade from 0.1.6 to 0.1.7
* **@mxjs/upload:** upgrade from 0.3.0 to 0.3.1
* **@miaoxing/dev:** upgrade from 6.1.2 to 6.2.0
* **@miaoxing/app:** upgrade from 0.2.5 to 0.2.6
* **@miaoxing/file:** upgrade from 0.1.0 to 0.1.1

# [0.3.0](https://github.com/miaoxing/admin/compare/v0.2.4...v0.3.0) (2021-03-05)


### Bug Fixes

* 切换页面，要重新计算左侧菜单 ([88aa03c](https://github.com/miaoxing/admin/commit/88aa03c66b5e6acac2713a21272247555e1dd282))
* 解决在子页面刷新后，侧边菜单未选中的问题 ([e7203d0](https://github.com/miaoxing/admin/commit/e7203d05d740689792dd92c7aead61219db030b7))
* 退出登录地址错误 ([abf1670](https://github.com/miaoxing/admin/commit/abf16701dffcf7ef92f0bb13fb55df04e0641539))


### Features

* **theme:** 增加 `danger` 颜色 ([5ba81d4](https://github.com/miaoxing/admin/commit/5ba81d4b18250dd5a909014d70445b58499be8bd))


### Code Refactoring

* 更改头像上传接口为由文件插件提供 ([9ecb305](https://github.com/miaoxing/admin/commit/9ecb3050eb8bcdab4fed719409ff38d76c81d467))


### BREAKING CHANGES

* 升级管理员日志功能
* 管理员接口原来是操作 UserModel，改为操作 AdminModel
* `Service/Model` 拆分出 `ModelTrait`, 改名为 `BaseModel`
* 下线头像上传接口，更改为文件插件的上传接口





### Dependencies

* **miaoxing:** upgrade from 0.1.5 to 0.1.6
* **@mxjs/upload:** upgrade from 0.2.0 to 0.3.0
* **@miaoxing/app:** upgrade from 0.2.4 to 0.2.5
* **@miaoxing/file:** upgrade to 0.1.0

## [0.2.4](https://github.com/miaoxing/admin/compare/v0.2.3...v0.2.4) (2020-09-27)





### Dependencies

* **@miaoxing/app:** upgrade from 0.2.3 to 0.2.4

## [0.2.3](https://github.com/miaoxing/admin/compare/v0.2.2...v0.2.3) (2020-09-25)





### Dependencies

* **miaoxing:** upgrade from 0.1.4 to 0.1.5
* **@miaoxing/dev:** upgrade from 6.1.1 to 6.1.2
* **@miaoxing/app:** upgrade from 0.2.2 to 0.2.3

## [0.2.2](https://github.com/miaoxing/admin/compare/v0.2.1...v0.2.2) (2020-09-06)


### Features

* 增加 jwt 登录 ([0eee357](https://github.com/miaoxing/admin/commit/0eee357ec854d4665a25e27b0d1b81b71a2f99a1))





### Dependencies

* **@miaoxing/app:** upgrade from 0.2.1 to 0.2.2

## [0.2.1](https://github.com/miaoxing/admin/compare/v0.2.0...v0.2.1) (2020-09-01)





### Dependencies

* **@miaoxing/app:** upgrade from 0.2.0 to 0.2.1

# [0.2.0](https://github.com/miaoxing/admin/compare/v0.1.7...v0.2.0) (2020-09-01)


### Code Refactoring

* 前端控制器改为 page 模式 ([3f2ffb8](https://github.com/miaoxing/admin/commit/3f2ffb8705b94b20128117047e2a14c0f81cfec4))
* 后端控制器改为 page 模式 ([be25a85](https://github.com/miaoxing/admin/commit/be25a857c0ab3b4770d0bca15db34efcc4130ed8))
* 重构 app 包，增加 Req，Url，Event 服务，统一配置 ([5ec7b43](https://github.com/miaoxing/admin/commit/5ec7b432c805771bd6bab7b4c4f22245e0ef9c32))


### BREAKING CHANGES

* 重构 app 包，增加 Req，Url，Event 等服务，统一配置
* 前端控制器改为 page 模式
* 后端控制器改为 page 模式





### Dependencies

* **miaoxing:** upgrade from 0.1.3 to 0.1.4
* **@miaoxing/app:** upgrade from 0.1.7 to 0.2.0

## [0.1.7](https://github.com/miaoxing/admin/compare/v0.1.6...v0.1.7) (2020-08-17)





### Dependencies

* **miaoxing:** upgrade from 0.1.2 to 0.1.3
* **@miaoxing/dev:** upgrade from 6.1.0 to 6.1.1
* **@miaoxing/app:** upgrade from 0.1.6 to 0.1.7

## [0.1.6](https://github.com/miaoxing/admin/compare/v0.1.5...v0.1.6) (2020-08-14)





### Dependencies

* **@miaoxing/dev:** upgrade from 6.0.0 to 6.1.0
* **@miaoxing/app:** upgrade from 0.1.5 to 0.1.6

## [0.1.5](https://github.com/miaoxing/admin/compare/v0.1.4...v0.1.5) (2020-08-14)





### Dependencies

* **@miaoxing/dev:** upgrade from  to 0.1.0
* **@miaoxing/app:** upgrade from 0.1.4 to 0.1.5

## [0.1.4](https://github.com/miaoxing/admin/compare/v0.1.3...v0.1.4) (2020-08-11)





### Dependencies

* **@miaoxing/app:** upgrade from 0.1.3 to 0.1.4

## [0.1.3](https://github.com/miaoxing/admin/compare/v0.1.2...v0.1.3) (2020-08-07)


### Features

* 增加 *Action 类，通过组合的方式简化常用的 CRUD 操作 ([65e5cc3](https://github.com/miaoxing/admin/commit/65e5cc36a5a97031998c302b7fb1094d0b44f120))





### Dependencies

* **@miaoxing/app:** upgrade from 0.1.2 to 0.1.3

## [0.1.2](https://github.com/miaoxing/admin/compare/v0.1.1...v0.1.2) (2020-08-06)





### Dependencies

* **@miaoxing/app:** upgrade from 0.1.1 to 0.1.2

## [0.1.1](https://github.com/miaoxing/admin/compare/v0.1.0...v0.1.1) (2020-08-01)





### Dependencies

* **@miaoxing/app:** upgrade from 0.1.0 to 0.1.1

# 0.1.0 (2020-07-30)


### Features

* init
